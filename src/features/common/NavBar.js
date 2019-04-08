import React, { Component } from 'react';
import Logo from '../../images/jambo-io-logo@2x.png';
const M = window.M;
M.AutoInit;
const options = {};

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

  componentDidMount () {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav-extended nav-extended-custom">
          <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a><img src={Logo} height={50}  /></a></li>
              <li><a href="sass.html"></a></li>
              <li><a href="badges.html">Registrar</a></li>
              <li><a href="collapsible.html">Login</a></li>
            </ul>
          </div>
          <div className="navbar-nav-content menu-custom indigo-text text-darken-4 hide-on-med-and-down">
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
