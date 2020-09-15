import React, { Component } from "react";
import {
  MainPageStyle,
  MainPageLeft,
  AvatarImage,
  MainPageMenu,
  MainPageContent,
  MainPageLinks
} from "./styles";
import { BrowserRouter,
         Switch,
         NavLink,
         Route } from 'react-router-dom';
import Home from '../Home';
import Books from '../Books';

export default class MainPage extends Component {

  render() {

    return (
      <BrowserRouter>
      <MainPageStyle>
        
        <MainPageLeft>
          <AvatarImage style={{backgroundImage: "url("+require('../../images/retornodafenix.jpg') + ")"}}>
          </AvatarImage>
          <MainPageMenu>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/formation">Formation</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </MainPageMenu>
          <MainPageLinks>
            <a href="https://github.com/vncsms" >
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vinicius-silva-571b883b">
              <i className="fab fa-linkedin"></i>
              </a>
            <a href="https://pt.stackoverflow.com/users/97786/vinicius-morais">
              <i className="fab fa-stack-overflow"></i>
            </a>
          </MainPageLinks>
        </MainPageLeft>
        
          <MainPageContent>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/books" exact component={Books} />
            </Switch>
          </MainPageContent>
        
      </MainPageStyle>
      </BrowserRouter>       
    );
  }
}
