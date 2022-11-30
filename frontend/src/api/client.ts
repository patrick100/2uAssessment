const API_URL = process.env.REACT_APP_API_URL

const requestErrorHandler = (error: unknown) => {
  throw error
}

enum method {
  GET = 'GET',
  POST = 'POST',
}

type PostType<T> = {
  data?: T
  path: string
}

export const post = async <T>({ data, path }: PostType<T>) => {
  return fetch(`${API_URL}/${path}`, {
    method: method.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch(requestErrorHandler)
}
