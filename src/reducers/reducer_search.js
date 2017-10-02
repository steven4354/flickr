import {FETCH_PHOTOS} from '../actions'

export default function(state = [], action){
  console.log('Action recieved', action);
  console.log('test if fetchphotos got imported to reducer', FETCH_PHOTOS);
  return [action.payload, ...state]
}
