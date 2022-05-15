import RightSidePanel from '~~/components/Layout/RightSidePanel/dynamic'
import getMainLayout from '~~/components/Layout/getMainLayout'
import { HomeMain } from '~~/pages'
import { GetServerSidePropsContext } from 'next'
import { getGqlString } from '~~/utils/graphql'
import {
  FetchQuestionsDocument,
  FetchQuestionsQuery,
  FetchQuestionsQueryVariables,
} from '~~/generated/graphql'
import { fetchGraphql } from '~~/lib/server/fetch'

interface TaggedQuestionsProps {
  data: any
}

export default function TaggedQuestions({ data }: TaggedQuestionsProps) {
  return (
    <>
      <HomeMain data={data} />
      <RightSidePanel />
    </>
  )
}
TaggedQuestions.getLayout = getMainLayout

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  console.log(req)
}
