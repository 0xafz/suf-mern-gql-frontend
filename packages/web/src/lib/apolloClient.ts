import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import storage from '~~/utils/localStorage'
import { backendUrl } from '~~/constants'

let apolloClient: ApolloClient<NormalizedCacheObject>

export function initializeApollo(initialState = {}) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

const httpLink = new HttpLink({
  uri: backendUrl,
  credentials: 'include',
})

const authLink = setContext(() => {
  const loggedUser = storage.loadUser()

  return {
    headers: {
      authorization: loggedUser ? loggedUser.token : null,
    },
  }
})

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    cache: new InMemoryCache({
      typePolicies: {
        Question: {
          fields: {
            upvotedBy: {
              merge(_, incoming) {
                return incoming
              },
            },
            downvotedBy: {
              merge(_, incoming) {
                return incoming
              },
            },
            comments: {
              merge(_, incoming) {
                return incoming
              },
            },
            answers: {
              merge(_, incoming) {
                return incoming
              },
            },
            tags: {
              merge(_, incoming) {
                return incoming
              },
            },
          },
        },
        Answer: {
          fields: {
            upvotedBy: {
              merge(_, incoming) {
                return incoming
              },
            },
            downvotedBy: {
              merge(_, incoming) {
                return incoming
              },
            },
            comments: {
              merge(_, incoming) {
                return incoming
              },
            },
          },
        },
      },
    }),
    link: from([authLink, httpLink]),
  })
}
