import React from 'react'
import { connect } from 'react-redux'
import { fetchVideo, saveVideo } from '../actions'
import Video from '../components/Video.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    videoId: ownProps.match.params.videoId,
    isFetching: state.randomVideo.isFetching,
    currentSongs: state.savedVideo.currentSongs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getVideo: () => {
      dispatch(fetchVideo())
    },
    saveVideo: videoId => {
      dispatch(saveVideo(videoId))
    }
  }
}

const VideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Video)

export default VideoContainer
