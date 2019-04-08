import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Individual, { Modal } from './Individual';
import Vimeo from '../../common/vimeo-sdk.js';

const $ = window.$;
const M = window.M;

export class Videos extends Component {
  static propTypes = {
    videos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor () {
    super();
    this.state = {
      videos:[],
      categories: [],
      selected_video: [],
    }
  }

  componentDidMount () {
    const vimeo = new Vimeo;
    let videos = vimeo.channels.getChannelVideos()
    .then(videos => {
      this.setState({videos: videos});
    })
    .catch(error => {
      console.log(error);
    });

    let categories = vimeo.channels.getChannelCategories()
    .then(categories => {
      console.log("Categories");
      console.log(categories);
    });


  }

  select_video = (video) => {
    this.setState({selected_video: video});
  }

  videos = () => {
    let table = [];
    const videos = this.state.videos;
    if(videos === [] || videos.length === 0) {
      return;
    }

    videos.data.forEach((video, index) => {
      ( table.push (
        <div className="col s12 m6">
          <Individual select_video={this.select_video} video={video} />
        </div>
      ))
    });

    return table;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            { this.videos() }
          </div>

          <Modal video={this.state.selected_video} />

        </div>
      </React.Fragment>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    videos: state.videos,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);
