import '../style/MainPage.css';
import Blog from './Blog.js';
import Livros from './Livros.js';
import Autor from './Autor.js';
import Galeria from './Galeria.js';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  buttonClick(paginaEscolhida) {
  }

  render() {

    return (
      <HashRouter>
        <div>
          <div className="top-head">
            <ul className="header">
             <li className="top-links"><NavLink exact to="/">Blog</NavLink></li>
              <li className="top-links"><NavLink to="/autor">Autor</NavLink></li>
              <li className="top-links"><NavLink to="/Livros">Livros</NavLink></li>
              <li className="top-links"><NavLink to="/galeria">Galeria</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Blog}/>
            <Route path="/autor" component={Autor}/>
            <Route path="/galeria" component={Galeria}/>
            <Route path="/livros" component={Livros}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
