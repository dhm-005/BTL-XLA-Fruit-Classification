// This file is generated from the application's OpenAPI schema.

export type ClientOptions = {
  baseURL: `${string}://${string}` | (string & {})
}

export type ValidationError = {
  loc: Array<string | number>
  msg: string
  type: string
  input?: unknown
  ctx?: Record<string, unknown>
}

export type HTTPValidationError = {
  detail?: Array<ValidationError>
}

export type ItemCreate = {
  title: string
  description?: string | null
}

export type ItemPublic = {
  title: string
  description?: string | null
  id: string
  created_at?: string | null
}

export type ItemUpdate = {
  title?: string | null
  description?: string | null
}

export type ItemsPublic = {
  data: Array<ItemPublic>
  count: number
}

export type Message = {
  message: string
}

export type itemsReadItemsData = {
  body?: never
  path?: never
  query?: {
    skip?: number
    limit?: number
  }
  url: "/api/v1/items/"
}

export type itemsReadItemsErrors = {
  422: HTTPValidationError
}

export type itemsReadItemsResponses = {
  200: ItemsPublic
}

export type itemsCreateItemData = {
  body: ItemCreate
  path?: never
  query?: never
  url: "/api/v1/items/"
}

export type itemsCreateItemErrors = {
  422: HTTPValidationError
}

export type itemsCreateItemResponses = {
  200: ItemPublic
}

export type itemsDeleteItemData = {
  body?: never
  path: {
    id: string
  }
  query?: never
  url: "/api/v1/items/{id}"
}

export type itemsDeleteItemErrors = {
  422: HTTPValidationError
}

export type itemsDeleteItemResponses = {
  200: Message
}

export type itemsReadItemData = {
  body?: never
  path: {
    id: string
  }
  query?: never
  url: "/api/v1/items/{id}"
}

export type itemsReadItemErrors = {
  422: HTTPValidationError
}

export type itemsReadItemResponses = {
  200: ItemPublic
}

export type itemsUpdateItemData = {
  body: ItemUpdate
  path: {
    id: string
  }
  query?: never
  url: "/api/v1/items/{id}"
}

export type itemsUpdateItemErrors = {
  422: HTTPValidationError
}

export type itemsUpdateItemResponses = {
  200: ItemPublic
}

export type utilsHealthCheckData = {
  body?: never
  path?: never
  query?: never
  url: "/api/v1/utils/health-check/"
}

export type utilsHealthCheckResponses = {
  200: boolean
}
