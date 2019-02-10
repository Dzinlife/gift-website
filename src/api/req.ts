import Prismic from 'prismic-javascript'
import { QueryOptions } from 'prismic-javascript/d.ts/ResolvedApi'
import qs from 'qs'
import Cookies from 'js-cookie'
import router from '@/router'

var apiEndpoint = 'https://gift.cdn.prismic.io/api/v2'
const resolvedApi = Prismic.getApi(apiEndpoint)

let globalOpt = null as null | {ref: string}

export default async function getApi () {
  const api = await resolvedApi

  const previewRef = Cookies.get(Prismic.previewCookie)
  const masterRef = api.refs.find(ref => { return ref.isMasterRef === true })!.ref
  const params = qs.parse(location.search.slice(1))
  const isPreview = location.pathname === '/preview' || params.preview

  const ref = (isPreview && previewRef) || masterRef
  globalOpt = { ref }

  return api
}

export async function getByQuery (query: string | string[], opt: QueryOptions | null = null) {
  const api = await getApi()

  if (opt) {
    opt.ref = globalOpt!.ref
  } else {
    opt = globalOpt
  }
  return api.query(query, opt!)
}

export async function getSingle (type: string, opt: QueryOptions | null = null) {
  const api = await getApi()

  if (opt) {
    opt.ref = globalOpt!.ref
  } else {
    opt = globalOpt
  }
  return api.getSingle(type, opt!)
}

export async function getById (type: string, opt: QueryOptions | null = null) {
  const api = await getApi()

  if (opt) {
    opt.ref = globalOpt!.ref
  } else {
    opt = globalOpt
  }
  return api.getByID(type, opt!)
}

export async function getByIds (ids: string[], opt: QueryOptions | null = null) {
  const api = await getApi()

  if (opt) {
    opt.ref = globalOpt!.ref
  } else {
    opt = globalOpt
  }
  return api.getByIDs(ids, opt!)
}

function linkResolver (doc: any): any {
  const routeObj = {
    name: doc.type,
    params: {
      id: doc.uid
    },
    query: {
      preview: true
    }
  }
  return routeObj
}

export async function previewReq () {
  const api = await resolvedApi
  const params = qs.parse(location.search.slice(1))
  const route = await api.previewSession(params.token, linkResolver, '/')
  router.replace(route)
}
