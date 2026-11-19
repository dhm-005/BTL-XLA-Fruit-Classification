// This file is generated from the application's OpenAPI schema.

import {
  type Client,
  type Options as Options2,
  type TDataShape,
} from "./client"
import { client } from "./client.gen"
import type {
  itemsCreateItemData,
  itemsCreateItemErrors,
  itemsCreateItemResponses,
  itemsDeleteItemData,
  itemsDeleteItemErrors,
  itemsDeleteItemResponses,
  itemsReadItemData,
  itemsReadItemErrors,
  itemsReadItemResponses,
  itemsReadItemsData,
  itemsReadItemsErrors,
  itemsReadItemsResponses,
  itemsUpdateItemData,
  itemsUpdateItemErrors,
  itemsUpdateItemResponses,
  utilsHealthCheckData,
  utilsHealthCheckResponses,
} from "./types.gen"

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
  TResponse = unknown,
> = Options2<TData, ThrowOnError, TResponse> & {
  client?: Client
  meta?: Record<string, unknown>
}

export class ItemsService {
  public static readItems<ThrowOnError extends boolean = true>(
    options?: Options<itemsReadItemsData, ThrowOnError>,
  ) {
    return (options?.client ?? client).get<
      itemsReadItemsResponses,
      itemsReadItemsErrors,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/items/",
      ...options,
    })
  }

  public static createItem<ThrowOnError extends boolean = true>(
    options: Options<itemsCreateItemData, ThrowOnError>,
  ) {
    return (options.client ?? client).post<
      itemsCreateItemResponses,
      itemsCreateItemErrors,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/items/",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })
  }

  public static deleteItem<ThrowOnError extends boolean = true>(
    options: Options<itemsDeleteItemData, ThrowOnError>,
  ) {
    return (options.client ?? client).delete<
      itemsDeleteItemResponses,
      itemsDeleteItemErrors,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/items/{id}",
      ...options,
    })
  }

  public static readItem<ThrowOnError extends boolean = true>(
    options: Options<itemsReadItemData, ThrowOnError>,
  ) {
    return (options.client ?? client).get<
      itemsReadItemResponses,
      itemsReadItemErrors,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/items/{id}",
      ...options,
    })
  }

  public static updateItem<ThrowOnError extends boolean = true>(
    options: Options<itemsUpdateItemData, ThrowOnError>,
  ) {
    return (options.client ?? client).put<
      itemsUpdateItemResponses,
      itemsUpdateItemErrors,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/items/{id}",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })
  }
}

export class UtilsService {
  public static healthCheck<ThrowOnError extends boolean = true>(
    options?: Options<utilsHealthCheckData, ThrowOnError>,
  ) {
    return (options?.client ?? client).get<
      utilsHealthCheckResponses,
      unknown,
      ThrowOnError
    >({
      responseType: "json",
      url: "/api/v1/utils/health-check/",
      ...options,
    })
  }
}
