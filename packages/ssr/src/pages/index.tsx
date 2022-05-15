import { useAuthContext } from '../context/auth'
import SortQuesBar from '../components/Buttons/SortQuesTabGroup'
import QuestionCard from '../components/Question/QuestionCard'
import AuthFormOnButton from '../components/Auth/AuthFormOnButton'

import tw, { styled } from 'twin.macro'
import { Button } from '../components/my-mui/Misc'
import Divider from '~~/components/my-mui/Divider'
import {
  FetchQuestionsDocument,
  FetchQuestionsQuery,
  FetchQuestionsQueryVariables,
  Question,
  QuestionSortBy,
} from '../generated/graphql'
import Link from 'next/link'
import RightSidePanel from '~~/components/Layout/RightSidePanel/dynamic'
import getMainLayout from '~~/components/Layout/getMainLayout'
import { GetServerSidePropsContext } from 'next'
import { fetchGraphql } from '~~/lib/server/fetch'
import { getGqlString } from '~~/utils/graphql'
import Pagination from '~~/components/Pagination'

const QuestionListContainer = styled.div`
  ${tw`relative w-full mx-1 mt-6 sm:mx-3 `}
`

const QuestionListHeader = styled.div`
  ${tw`flex justify-between items-center`}
`

const QuestionListBody = tw.div`min-height[80vh]`

const getNotFoundString = (search: string, tag: string) => {
  if (search && tag) {
    return `No matches found in "${tag}" for search term: "${search}".`
  } else if (search) {
    return 'No questions found.'
  } else if (tag) {
    return `There are no questions tagged "${tag}".`
  } else return 'No questions found.'
}

interface HomeMainProps {
  data: FetchQuestionsQuery['getQuestions']
  sortBy: QuestionSortBy
}
export const HomeMain = ({ data, sortBy }: HomeMainProps) => {
  const { user } = useAuthContext()
  const { totalCount, currentPage, pageSize } = data

  return (
    <QuestionListContainer>
      <QuestionListHeader>
        <h2 tw="text-lg sm:text-xl font-normal  m-0">All Questions</h2>
        {user ? (
          <Link href="/ask">
            <Button>Ask Question</Button>
          </Link>
        ) : (
          <AuthFormOnButton buttonType="ask" />
        )}
      </QuestionListHeader>
      <SortQuesBar sortBy={sortBy} />
      <Divider />
      <QuestionListBody>
        {data &&
          data.questions.length !== 0 &&
          data.questions.map((q) => (
            <QuestionCard key={q?._id} question={q as Question} />
          ))}
      </QuestionListBody>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
        tab={sortBy}
      />
    </QuestionListContainer>
  )
}
interface HomeProps {
  data: FetchQuestionsQuery['getQuestions']
  sortBy: QuestionSortBy
}

export default function Home({ data, sortBy }: HomeProps) {
  return (
    <>
      <HomeMain data={data} sortBy={sortBy} />
      <RightSidePanel />
    </>
  )
}
Home.getLayout = getMainLayout

const validTabs = [
  QuestionSortBy.Newest,
  QuestionSortBy.Oldest,
  QuestionSortBy.Votes,
  QuestionSortBy.Views,
  QuestionSortBy.Hot,
] as string[]
const isValidTab = (tab: string) => {
  return validTabs.includes(tab)
}
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const queryString = getGqlString(FetchQuestionsDocument)
  if (!queryString) {
    return {
      props: {},
    }
  }
  const sortBy = (
    isValidTab(query.tab as string) ? query.tab : validTabs[0]
  ) as QuestionSortBy
  const page = Number(query.page) || 1
  try {
    const data = await fetchGraphql<
      FetchQuestionsQuery,
      FetchQuestionsQueryVariables
    >(queryString, {
      sortBy,
      page,
      limit: 12,
    })

    return {
      props: {
        data: data.getQuestions,
        sortBy,
      }, // will be passed to the page component as props
    }
  } catch (err) {
    return {
      props: {
        data: {
          sortBy,
        },
      },
    }
  }
}
