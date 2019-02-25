import '../style/TopMenu.css';
import React, { Component } from 'react';


export default class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="HeadOptions">
        <ul>
          <li className="TopLinks">
            <a href="../pages/Blog">Blog</a>
          </li>
          <li className="TopLinks">
            <a onClick={() => this.buttonClick('Livros')}>Livros</a>
          </li>
          <li className="TopLinks">
            <a onClick={() => this.buttonClick('Autor')}>Autor</a>
          </li>
          <li className="TopLinks">
            <a onClick={() => this.buttonClick('Galeria')}>Galeria</a>
          </li>
        </ul>
      </div>
    );
  }
}
