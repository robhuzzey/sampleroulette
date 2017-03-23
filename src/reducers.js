import { combineReducers } from 'redux'
import {
  REQUEST_VIDEO,
  RECEIVE_VIDEO,
  SAVE_VIDEO
} from './actions'

function posts(state = {
  isFetching: false,
  video: {}
}, action) {
  switch (action.type) {
    case REQUEST_VIDEO:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {
        isFetching: false,
        video: action.video,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function randomVideo(state = {}, action) {
  switch (action.type) {
    case RECEIVE_VIDEO:
    case REQUEST_VIDEO:
      return Object.assign({}, state, posts(null, action))
    default:
      return state
  }
}

function savedVideo(state = {}, action) {
  switch (action.type) {
    case SAVE_VIDEO:
      const currentSongs = (window.localStorage.getItem('savedsongs') || '').split(',')
      currentSongs.push(action.videoId)
      window.localStorage.setItem('savedsongs', currentSongs.join(','))
      return Object.assign({}, state, {
        currentSongs
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  randomVideo,
  savedVideo
})

export default rootReducer
