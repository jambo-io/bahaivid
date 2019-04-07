import React, { Component } from 'react';
import Logo from '../../images/jambo-io-logo@2x.png';

export default class NavBar extends Component {
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
        <nav className="nav-extended lime lighten-5 z-depth-5">
          <div className="nav-wrapper">
            <img src={Logo} height={100} className="brand-logo" />
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html"></a></li>
              <li><a href="badges.html">Registrar</a></li>
              <li><a href="collapsible.html">Login</a></li>
            </ul>
          </div>
          <div className="navbar-nav-content menu-custom indigo-text text-darken-4">
            <ul className="tabs">
              <li className="tab"><a href="#test1">Vídeos</a></li>
              <li className="tab"><a className="active" href="#test2">Fotos</a></li>
              <li className="tab disabled"><a href="#test3">Eventos</a></li>
              <li className="tab"><a href="#test4">Criador de Imagens</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="badges.html">Registrar</a></li>
          <li><a href="collapsible.html">Login</a></li>
        </ul>

      </React.Fragment>
    );
  }
}
