import React from 'react'
import YouTube from 'react-youtube'
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const Video = props => (
  <div>
    <ButtonToolbar>
      <Button onClick={props.getVideo}>{props.isFetching ? 'Loading...' : 'Get Video'} <Glyphicon glyph="repeat" /></Button>
      <Button onClick={() => props.saveVideo(props.videoId)}>Save</Button>
    </ButtonToolbar>
    {props.videoId && 
      <YouTube
        videoId={props.videoId}
        opts={opts} />
    }
    {props.currentSongs && props.currentSongs.map(songId => {
      return <p>{songId}</p>
    })}
  </div>
)

Video.propTypes = { 
  videoId: React.PropTypes.string,
  getVideo: React.PropTypes.func,
  isFetching: React.PropTypes.bool
}

Video.defaultProps = {
  videoId: null,
  isFetching: false
}

export default Video
