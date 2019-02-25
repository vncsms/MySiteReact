import '../style/MainPage.css';
import Blog from './Blog.js';
import Livros from './Livros.js';
import Autor from './Autor.js';
import Galeria from './Galeria.js';
import TopMenu from '../components/TopMenu.js'
import React, { Component } from 'react';


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
      <div className="MainPage">
        <TopMenu/>
      </div>
    );
  }
}
