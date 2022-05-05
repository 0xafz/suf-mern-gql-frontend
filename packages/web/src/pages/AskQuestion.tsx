import 'twin.macro'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppContext } from '../context/state'
import ErrorMessage from '../components/AlertError'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getErrorMsg } from '../utils/helperFuncs'

import TextField from '~~/components/my-mui/TextField'
import { ChipWithClose } from '~~/components/my-mui/Chips'
import Autocomplete from '~~/components/my-mui/AutoComplete'
import { Button, Link } from '../components/my-mui/Misc'
import {
  useAddQuestionMutation,
  useUpdateQuestionMutation,
} from '../generated/graphql'

interface BaseQuestionArgs {
  title: string
  body: string
}
const validationSchema = yup.object({
  title: yup
    .string()
    .required('Required')
    .min(15, 'Must be at least 15 characters'),
  body: yup
    .string()
    .required('Required')
    .min(30, 'Must be at least 30 characters'),
})

const AskQuestionPage = () => {
  const navigate = useNavigate()
  const { editingQuestion, clearEdit, notify } = useAppContext()
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState(editingQuestion ? editingQuestion.tags : [])
  const [errorMsg, setErrorMsg] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editingQuestion ? editingQuestion.title : '',
      body: editingQuestion ? editingQuestion.body : '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  })

  const [addQuestion, { loading: addQuesLoading }] = useAddQuestionMutation({
    onError: (err) => {
      setErrorMsg(getErrorMsg(err))
    },
  })

  const [updateQuestion, { loading: editQuesLoading }] =
    useUpdateQuestionMutation({
      onError: (err) => {
        setErrorMsg(getErrorMsg(err))
      },
    })

  const postQuestion = ({ title, body }: BaseQuestionArgs) => {
    if (tags.length === 0) return setErrorMsg('Atleast one tag must be added.')

    addQuestion({
      variables: { title, body, tags },
      update: (_, { data }) => {
        navigate(`/questions/${data?.postQuestion._id}`)
        reset()
        notify('Question posted!')
      },
    })
  }

  const editQuestion = ({ title, body }: BaseQuestionArgs) => {
    if (tags.length === 0) return setErrorMsg('Atleast one tag must be added.')

    updateQuestion({
      variables: { quesId: editingQuestion.quesId, title, body, tags },
      update: (_, { data }) => {
        navigate(`/questions/${data?.editQuestion._id}`)
        clearEdit()
        notify('Edit successful!')
      },
    })
  }
  const handleACInputChange = (value: string) => {
    const newInputValue = value.toLowerCase().trim()

    if (!/^[a-zA-Z0-9-]*$/.test(value)) {
      return setErrorMsg('Only alphanumeric characters & dash are allowed.')
    }
    if (newInputValue.length > 15) {
      return setErrorMsg("A single tag can't have more than 15 characters.")
    }

    setTagInput(newInputValue)
  }
  const handleACChange = (value: string[]) => {
    if (value.length < tags.length) {
      setTags(value)
      return
    }
    if (value.length > 5) {
      setTagInput('')
      setErrorMsg('Max 5 tags can be added! Not more than that.')
      console.log('error')
      return
    }
    if (tags.includes(tagInput)) {
      return setErrorMsg(
        "Duplicate tag found! You can't add the same tag twice."
      )
    }
    console.log('set')
    setTags(value)
  }
  return (
    <div tw="w-full my-6 mx-3">
      <Link to={`/questions/${editingQuestion.quesId}`} tw="text-purple-800">
        {' '}
        &lt; Back
      </Link>
      <h1 tw="text-purple-900 text-xl">
        {editingQuestion ? 'Edit Your Question' : 'Ask A Question'}
      </h1>
      <form
        tw="mt-4 text-purple-800"
        onSubmit={
          editingQuestion
            ? handleSubmit(editQuestion)
            : handleSubmit(postQuestion)
        }
      >
        <div tw="mb-4">
          <p tw=" text-xs md:text-sm mb-2">
            Be specific and imagine you’re asking a question to another person
          </p>
          <TextField
            tag="input"
            required
            fullWidth
            {...register('title')}
            placeholder="Enter atleast 15 characters"
            type="text"
            label="Title"
            error={'title' in errors}
            helperText={'title' in errors ? errors.title?.message : ''}
          />
        </div>
        <div tw="mb-4">
          <p tw="text-xs md:text-sm mb-2">
            Include all the information someone would need to answer your
            question
          </p>
          <TextField
            tag="textarea"
            required
            rows={5}
            fullWidth
            {...register('body')}
            placeholder="Enter atleast 30 characters"
            label="Body"
            error={'body' in errors}
            helperText={'body' in errors ? errors.body?.message : ''}
          />
        </div>
        <div tw="mb-4">
          <p tw="text-xs md:text-sm mb-2">
            Add up to 5 tags to describe what your question is about
          </p>
          <Autocomplete
            value={tags}
            inputValue={tagInput}
            onInputChange={(_, value) => {
              handleACInputChange(value)
            }}
            onChange={(_, value) => {
              handleACChange(value)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tags"
                placeholder="press Enter to add tags"
                fullWidth
              />
            )}
            renderTags={(_, getTagProps) =>
              tags.map((option: string, index: number) => (
                <ChipWithClose
                  label={option}
                  color="primary"
                  size="small"
                  {...getTagProps({ index })}
                />
              ))
            }
          />
        </div>
        <Button
          type="submit"
          tw="bg-purple-700 hover:bg-purple-800 text-sm sm:text-base"
          disabled={addQuesLoading || editQuesLoading}
        >
          {editingQuestion ? 'Update Your Question' : 'Post Your Question'}
        </Button>
        <ErrorMessage
          errorMsg={errorMsg}
          clearErrorMsg={() => setErrorMsg('')}
        />
      </form>
    </div>
  )
}

export default AskQuestionPage
