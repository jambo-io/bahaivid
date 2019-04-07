import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer.js';
import NavBar from '../common/NavBar.js';
import Title from '../common/Title.js';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Title title={'Vídeos'} />
        <div className="page-container h-100">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}
