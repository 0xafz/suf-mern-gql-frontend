import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppContext } from '../context/state'
import { useAuthContext } from '../context/auth'
import QuesPageContent from '../components/Question/Content'
import AuthFormOnButton from '../components/Auth/AuthFormOnButton'
import LoadingSpinner from '../components/LoadingSpinner'
import { formatDateAgo, getErrorMsg } from '../utils/helperFuncs'

import tw from 'twin.macro'
import { Question, useFetchQuestionLazyQuery } from '../generated/graphql'
import { ButtonLikeLink } from '~~/components/my-mui/Misc'

const Container = tw.div`p-3 w-full`
const Header = tw.div``

const QuestionPage = () => {
  const { clearEdit, notify } = useAppContext()
  const { user } = useAuthContext()
  const { quesId } = useParams<{ quesId: string }>()
  const [question, setQuestion] = useState<Question | null>(null)

  const [fetchQuestion, { data, loading }] = useFetchQuestionLazyQuery({
    onError: (err) => {
      notify(getErrorMsg(err), 'error')
    },
  })

  useEffect(() => {
    if (quesId) {
      fetchQuestion({ variables: { quesId } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quesId])

  useEffect(() => {
    if (data) {
      setQuestion(data.viewQuestion as Question)
    }
  }, [data])

  if (loading || !question) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    )
  }

  const { title, views, createdAt, updatedAt } = question

  return (
    <Container>
      <Header>
        <div tw="flex sm:(justify-between items-center) flex-nowrap flex-col sm:flex-row ">
          <h1 tw="m-0 mb-1 font-normal text-2xl word-wrap[break-word]">
            {title}
          </h1>
          {user ? (
            <div tw="p-0 m-0 ml-2 align-baseline  order[-1] self-end sm:(order-none self-auto) ">
              <ButtonLikeLink to="/ask" onClick={() => clearEdit()}>
                Ask Question
              </ButtonLikeLink>
            </div>
          ) : (
            <AuthFormOnButton buttonType="ask" />
          )}
        </div>
        <div tw="pb-2 text-xs mb-2 ">
          <span>
            Asked <strong>{formatDateAgo(createdAt)} ago</strong>
          </span>
          {createdAt !== updatedAt && (
            <span tw="ml-2">
              Edited <strong>{formatDateAgo(updatedAt)} ago</strong>
            </span>
          )}
          <span tw="ml-2">
            Viewed <strong>{views} times</strong>
          </span>
        </div>
      </Header>
      <QuesPageContent question={question} />
    </Container>
  )
}

export default QuestionPage
