import React, { Component } from 'react';
import Logo from '../../images/jambo-io-logo@2x.png';

export default class Footer extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {
      color_links: 'blue-text',
      title: 'black-text',
      text: 'black-text',
    }
  }

  render() {
    return (
      <React.Fragment>
        <footer className="page-footer blue-grey lighten-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <img src={Logo} width={100} />
                <p className={this.state.text + " text-lighten-4"}>Jambo Network é uma maneira de organizar e facilitar acesso de dados e mídia da nossa comunidade. Este projeto está em fase Beta, então fique a vontade para reportar qualquer erro ou bug.</p>


              </div>
              <div className="col l3 s12">
                <h5 className={this.state.title}>Settings</h5>
                <ul>
                  <li><a className="blue-text darken-4" href="#!">Link 1</a></li>
                  <li><a className="blue-text" href="#!">Link 2</a></li>
                  <li><a className="blue-text" href="#!">Link 3</a></li>
                  <li><a className="blue-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className={this.state.title}>Connect</h5>
                <ul>
                  <li><a className={this.state.color_links} href="#!">Link 1</a></li>
                  <li><a className={this.state.color_links} href="#!">Link 2</a></li>
                  <li><a className={this.state.color_links} href="#!">Link 3</a></li>
                  <li><a className={this.state.color_links} href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container center black-text">
              Created by <span style={{fontWeight:'bold'}}>Jambo-IO</span>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
