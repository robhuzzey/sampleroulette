import request from 'superagent'
import jsonp from 'superagent-jsonp'
import { push } from 'react-router-redux'

export const REQUEST_VIDEO = 'REQUEST_VIDEO'
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const SAVE_VIDEO = 'SAVE_VIDEO'

function requestVideo() {
  return {
    type: REQUEST_VIDEO
  }
}

function receiveVideo(video) {
  return dispatch => {
    dispatch(push(`/video/${video.id}`))
    return {
      type: RECEIVE_VIDEO,
      video,
      receivedAt: Date.now()
    }
  }
}

export function saveVideo(videoId) {
  return {
    type: SAVE_VIDEO,
    videoId
  }
}

export function fetchVideo() {
  return dispatch => {
    dispatch(requestVideo())
    return request
      .get(`/api`)
      .end(function(error, res) {
        dispatch(receiveVideo(res.body))
      });
  }
}
