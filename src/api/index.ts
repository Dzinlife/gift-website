import Prismic from 'prismic-javascript'
import req, { previewReq, getByQuery as _getByQuery, getSingle as _getSingle } from './req'
import { QueryOptions } from 'prismic-javascript/d.ts/ResolvedApi'

const apiEndpoint = 'https://gift.cdn.prismic.io/api/v2'

export async function getByQuery (query: string | string[], opts?: QueryOptions) {
  return _getByQuery(query, opts)
}

export async function getSingle (type: string, opts?: QueryOptions) {
  return _getSingle(type, opts)
}

export async function getAll () {
  return _getByQuery('')
}

export async function preview () {
  return previewReq()
}
