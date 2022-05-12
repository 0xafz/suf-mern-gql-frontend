import { useForm } from 'react-hook-form'
import { useAuthContext } from '~~/context/auth'
import { useAppContext } from '~~/context/state'
import AuthFormOnButton from '../Auth/AuthFormOnButton'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getErrorMsg } from '~~/utils/helperFuncs'

import 'twin.macro'
import { Button, Link } from '../my-mui/Misc'
import TextField from '../my-mui/TextField'
import Tag from '../Tag'
import {
  FetchQuestionDocument,
  FetchQuestionQuery,
  useAddAnswerMutation,
} from '../../generated/graphql'

const validationSchema = yup.object({
  answerBody: yup.string().min(30, 'Must be at least 30 characters'),
})

interface Props {
  quesId: string
  tags: string[]
}
const AnswerForm = ({ quesId, tags }: Props) => {
  const { user } = useAuthContext()
  const { notify, clearEdit } = useAppContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ answerBody: string }>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const [addAnswer, { loading }] = useAddAnswerMutation({
    onError: (err) => {
      notify(getErrorMsg(err), 'error')
    },
  })

  const postAnswer = ({ answerBody }: { answerBody: string }) => {
    addAnswer({
      variables: { quesId, body: answerBody },
      update: (proxy, { data }) => {
        // reset form state
        reset()

        const dataInCache = proxy.readQuery<FetchQuestionQuery>({
          query: FetchQuestionDocument,
          variables: { quesId },
        })

        const updatedData = {
          ...dataInCache?.viewQuestion,
          answers: data?.postAnswer,
        }

        proxy.writeQuery({
          query: FetchQuestionDocument,
          variables: { quesId },
          data: { viewQuestion: updatedData },
        })

        notify('Answer submitted!')
      },
    })
  }

  return (
    <div>
      {user && <h3 tw="mt-5 mb-4 font-normal text-lg">Your Answer</h3>}
      {user && (
        <form onSubmit={handleSubmit(postAnswer)}>
          <TextField
            tag="textarea"
            {...register('answerBody')}
            name="answerBody"
            required
            rows={5}
            fullWidth
            placeholder="Enter atleast 30 characters"
            error={'answerBody' in errors}
            helperText={
              'answerBody' in errors ? errors?.answerBody?.message : ''
            }
          />
          <Button tw="mt-10 block" type="submit" disabled={loading}>
            {loading ? 'processing...' : 'Post Your Answer'}
          </Button>
        </form>
      )}
      <div tw="mt-8 text-sm sm:text-base leading-6">
        Browse other questions tagged &nbsp;
        {tags.map((t) => (
          <Tag key={t} label={t} to={`/tags/${t}`} tw="mr-1" />
        ))}
        &nbsp; or &nbsp;
        {user ? (
          <>
            <Link to="/ask" onClick={() => clearEdit()}>
              ask your own question.
            </Link>
          </>
        ) : (
          <AuthFormOnButton />
        )}
      </div>
    </div>
  )
}

export default AnswerForm
