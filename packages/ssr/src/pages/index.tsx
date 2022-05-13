import { useState, useEffect } from 'react'
import { useAppContext } from '../context/state'
import { useAuthContext } from '../context/auth'
import SortQuesBar from '../components/Buttons/SortQuesButtonGroup'
import QuestionCard from '../components/Question/QuestionCard'
import AuthFormOnButton from '../components/Auth/AuthFormOnButton'
import LoadMoreButton from '../components/Buttons/LoadMore'
import LoadingSpinner from '../components/LoadingSpinner'
import { filterDuplicates, getErrorMsg } from '../utils/helperFuncs'

import tw, { styled } from 'twin.macro'
import { Button } from '../components/my-mui/Misc'
import Divider from '~~/components/my-mui/Divider'
import {
  FetchQuestionsQuery,
  FetchQuestionsQueryVariables,
  Question,
  QuestionSortBy,
  useFetchQuestionsLazyQuery,
} from '../generated/graphql'
import Link from 'next/link'
import RightSidePanel from '~~/components/Layout/RightSidePanel/dynamic'
import { useRouter } from 'next/router'
import getMainLayout from '~~/components/Layout/getMainLayout'

const QuestionListContainer = styled.div`
  ${tw`relative w-full mx-1 mt-6 sm:mx-3 `}
`

const QuestionListHeader = styled.div`
  ${tw`flex justify-between items-center`}
`

const QuestionListBody = tw.div`min-height[80vh]`

interface QuesListPageProps {}

const HomeMain = () => {
  const router = useRouter()
  const { tag, search } = router.query || {}
  const { clearEdit, notify } = useAppContext()
  const { user } = useAuthContext()
  const [quesData, setQuesData] = useState<
    FetchQuestionsQuery['getQuestions'] | null
  >(null)
  const [sortBy, setSortBy] = useState<QuestionSortBy>(QuestionSortBy.Hot)
  const [page, setPage] = useState(1)

  const [fetchQuestions, { data, loading }] = useFetchQuestionsLazyQuery({
    fetchPolicy: 'network-only',
    onError: (err) => {
      notify(getErrorMsg(err), 'error')
    },
  })

  const getQues = (args: FetchQuestionsQueryVariables) => {
    fetchQuestions({
      variables: { ...args },
    })
  }

  useEffect(() => {
    getQues({
      sortBy,
      page: 1,
      limit: 12,
      filterByTag: tag as string,
      filterBySearch: search as string,
    })
    setPage(1)
    if (window) window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, router.query.tag, router.query.search])

  useEffect(() => {
    if (data && page === 1) {
      setQuesData(data.getQuestions)
    }

    if (data && page !== 1) {
      setQuesData((prevState) => ({
        ...data.getQuestions,
        questions: prevState!.questions.concat(
          filterDuplicates<Question>(
            prevState!.questions as Question[],
            data.getQuestions.questions as Question[]
          )
        ),
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleLoadPosts = () => {
    getQues({
      sortBy,
      page: page + 1,
      limit: 12,
      filterByTag: tag as string,
      filterBySearch: search as string,
    })
    setPage(page + 1)
  }

  return (
    <QuestionListContainer>
      <QuestionListHeader>
        <h2 tw="text-lg sm:text-xl font-normal  m-0">
          {tag
            ? `Questions tagged [${tag}]`
            : search
            ? `Search results for "${search}"`
            : 'All Questions'}
        </h2>
        {user ? (
          <Link href="/ask" onClick={() => clearEdit()}>
            <Button>Ask Question</Button>
          </Link>
        ) : (
          <AuthFormOnButton buttonType="ask" />
        )}
      </QuestionListHeader>
      <SortQuesBar sortBy={sortBy} setSortBy={setSortBy} />
      <Divider />
      <QuestionListBody>
        {loading && page === 1 && <LoadingSpinner />}
        {quesData &&
          (quesData.questions.length !== 0 ? (
            quesData.questions.map((q) => (
              <QuestionCard key={q?._id} question={q as Question} />
            ))
          ) : (
            <h3 tw="text-center  mt-10">
              {tag
                ? `There are no questions tagged "${tag}".`
                : search
                ? `No matches found for your search "${search}".`
                : 'No questions found.'}
            </h3>
          ))}
      </QuestionListBody>
      {quesData && quesData.next && (
        <LoadMoreButton
          loading={page !== 1 && loading}
          handleLoadPosts={handleLoadPosts}
        />
      )}
    </QuestionListContainer>
  )
}

export default function Home() {
  return (
    <>
      <HomeMain />
      <RightSidePanel />
    </>
  )
}
Home.getLayout = getMainLayout
