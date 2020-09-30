import React, { Component } from "react";
import { books } from '../../utils/books.js';
import parse from 'html-react-parser';
import {
  PageContainer,
  BookContainer,
  BookTitle,
  BookInformation,
  BookAvatar,
  BookDescription,
  BookPurchase
} from './styles';

export default class Books extends Component {

  componentDidMount() {
    console.log(books);
  }

  render() {

    return (
      <PageContainer>
        <BookContainer>
          <BookTitle>As Crônicas Do Infinito: O Retorno da Fênix</BookTitle>
          <BookInformation>
            <BookAvatar style={{backgroundImage: "url("+require('../../images/retornodafenix.jpg') + ")"}}/>
            <BookDescription>{parse(books[0].body)}</BookDescription>
          </BookInformation>
          <BookPurchase>oloco</BookPurchase>
        </BookContainer>
      </PageContainer>
    );
  }
}
