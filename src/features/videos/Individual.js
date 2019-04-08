import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const $ = window.$
const vimeo_player = window.Vimeo.Player;
const M = window.M;

export default class Individual extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

  }

  openModal = (e) => {
    this.props.select_video(this.props.video);
  }

  render() {
    const size = this.props.video.pictures.sizes[3];
    const image = size.link_with_play_button;
    const image_width = size.width || 295;
    const image_height = size.height || 295;
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-image">
            <div onClick={e => this.openModal(e)} className="waves-effect waves-block waves-light" >
              <img src={image} />
            </div>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">get_app</i></a>
          </div>

          <div className="card-action">
          <span>{this.props.video ? this.props.video.name : null }</span>
          </div>
        </div>

      </React.Fragment>
    );
  }
}



export class Modal extends Component {

  constructor (props) {
    super(props);


    this.state = {
      started: false,
      options: {},
    }
  }

  onPlay = (data) => {
    // Function logic goes here
  };



  componentDidUpdate (prevProps) {
    if(this.props !== prevProps) {
      this.setState({mounted: true});

      if(this.props.video) {
        const video_uri = this.props.video.uri;
        if(typeof video_uri !== "undefined") {
          const array = video_uri.split('/');
          const modalDOM = ReactDOM.findDOMNode(this.modal);
          modalDOM.scrollTop = 0;
          if(this.state.started === true) {
            this.instances[0].open();
            if(typeof this.player !== "undefined") {
              this.player.loadVideo(array[2]);
            }
          }
        }
      }
    }
  }

  pauseVideo = () => {

    this.player.pause();
    this.player.unload();
  }

  componentDidMount () {

    window.scrollTo(0, 0);

    let options = {
      id: '326720438',
      width: '90vh',
      responsive: true,
      byline: false,
      playsinline: false,
      autoplay: true,
    }
    this.player = new vimeo_player('1', options);

    options = {
      opacity: .9,
      inDuration: 400,
      onCloseEnd: this.pauseVideo,
    }

    var elems = document.querySelectorAll('#modal1');
    this.instances = M.Modal.init(elems, options);
    this.instance = M.Modal.getInstance(this.instances[0]);
    this.setState({started: true});
  }

  handleClick = () => {
    console.log(this.player.getVideoUrl());
  }

  render() {
    return (
      <React.Fragment>
          <div className="modal-dialog">
          <div id="modal1" className="modal-custom" ref={el => (this.modal = el)}>
              <div className="video-container">

                <div id='1'></div>

              </div>
            </div>
            </div>
      </React.Fragment>
    );
  }
}
