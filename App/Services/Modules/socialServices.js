import apiObject from '../Api'

export const getSocialPost = (url) => {
  return async () => {
    const {api} = apiObject(url)
    return api.get('MassRelDemo/kindle.json')
  }
}

export const getLimitPost = (url) => {
  return async (param) => {
    const {api} = apiObject(url)
    return api.get('MassRelDemo/kindle.json?limit=' + param)
  }
}
