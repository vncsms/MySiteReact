import '../style/Gallery.css';
import React, { Component } from 'react';

export default class Galeria extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: [
        'retornodafenix.jpg',
      ]
    };
  }

  render() {
    var items = this.state.gallery.map((item, key) =>
                  <div className="gallery-photo-container"
                       style={{backgroundImage: "url("+require('../images/' + item) + ")"}}/>
                );

    return (
      <div className="gallery-container">
          {items}
      </div>
    );
  }
}