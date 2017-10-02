import fetchJsonp from 'fetch-jsonp'

const ROOT_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags='

export const FETCH_PHOTOS = 'FETCH_PHOTOS'

export function fetchPhotos(tag){
  const url = `${ROOT_URL}&q=${tag}`

  const request = fetchJsonp('/users.jsonp', {
      jsonpCallbackFunction: 'jsonFlickrFeed'
    })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

  console.log('request:', request);

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
