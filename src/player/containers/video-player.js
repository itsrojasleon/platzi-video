import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
    lastValue: null
  }

  tooglePlay = (event) => {
    this.setState({ pause: !this.state.pause })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetaData = event => {
    this.video = event.target
    this.setState({ duration: (this.video.duration) })
  }

  handleTimeUpdate = event => {
    this.setState({ currentTime: (this.video.currentTime) })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = (event) => {
    this.setState({ loading: true })
  }

  handleSeeked = event => {
    this.setState({ loading: false })
  }

  handleResetVolume = () => {
    const lastValue = this.video.volume
    this.setState({ lastValue })
    if(this.video.volume !== 0) {
      this.video.volume = 0
      this.setState({ volume: this.video.volume })
    }else {
      this.video.volume = this.state.lastValue
      this.setState({ volume: this.video.volume })
    }
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({ volume: this.video.volume })
  }

  handleFullScreenClick = event => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    }else {
      document.webkitExitFullscreen()
    }
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
        >
        <Title title={this.props.title} />
        <VideoPlayerControls>
          <PlayPause
            handleClick={this.tooglePlay}
            pause={this.state.pause}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleResetVolume={this.handleResetVolume}
            handleVolumeChange={this.handleVolumeChange}
            volume={this.state.volume}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </VideoPlayerControls>
        <Spinner active={this.state.loading} />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetaData={this.handleLoadedMetaData}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}
export default VideoPlayer
