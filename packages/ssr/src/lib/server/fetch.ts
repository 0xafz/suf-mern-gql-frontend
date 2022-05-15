import { backendUrl } from '~~/constants'

export const getDefaultFetchOptions = (token?: string): RequestInit => {
  return {
    // credentials: "include" is REQUIRED for cookies to work
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: token } : {}),
    },
  } as RequestInit
}
export async function fetchGraphql<TData, TVariables>(
  query: string,
  variables?: TVariables,
  init?: RequestInit
) {
  return new Promise<TData>(async (resolve, reject) => {
    const res = await fetch(backendUrl as string, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      ...getDefaultFetchOptions(),
      ...init,
    })

    let json
    try {
      json = await res.json()
    } catch (_) {
      reject(res.statusText)
    }

    if (json.errors) {
      const { message, extensions } = json.errors[0]
      if (extensions && extensions.code === 'INTERNAL_SERVER_ERROR') {
        reject('Something went wrong!')
      }
      reject(message)
    }

    resolve(json.data)
  })
}
