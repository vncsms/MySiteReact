import '../style/MainPage.css';
import React, { Component } from 'react';

export default class MainPage extends Component {
  render() {
    return (
      <body className="MainPage">
        <div className="HeadOptions">
          <ul>
            <li className="TopLinks">Opacao 1</li>
            <li className="TopLinks">Opacao 2</li>
          </ul>
        </div>
      </body>
    );
  }
}
