import '../style/Livros.css';
import retornodafenix from '../images/retornodafenix.jpg';
import React, { Component } from 'react';

export default class Livros extends Component {
  render() {
    return (
      <div className="bigContainer">
        <div className="pageTitle">
          Livros
        </div>
        <div className="livroContent">
          <p className="livroTitle">As Crônicas Do Infinito: O Retorno da Fênix</p>
          <div className="row">
            <div className="avatar">
              <img src={retornodafenix} alt="true" className="livroAvatar"/>
            </div>
            <div className="sinopseContainer">
              <p>Sinopse</p>
              <p className="sinopse">
              Agatha uma excelente maga do tempo e uma adorável irmã,
              treinada pelo melhor mago do reino, vê seu mundo mudar
              quando Kirin, seu tutor, faz uma previsão sobre a nova 
              invasão dos grugs. Junto com seu irmão Tork,
              um guarda real atrapalhado, e Sylvia, uma maga do fogo
              com cabelos rubros, irão investigar a profecia.
              Mas descobrirão coisas muito além da profecia que apenas
              eles serão capazes de lidar. E trilharão uma jornada que
              decidirá o futuro do reino de Jirajan.
              </p>
              <p className="sinopse">
              Entre montanhas e florestas, sob a água e desertos,
              Agatha e seus amigos irão enfrentar perigos, para descobrir
              a verdade por trás dos grugs. E combatê-los antes do retorno
               do destemido Virian, um mago que outrora fora 
              </p>
            </div>
          </div>
        <div>
          <p className="buy">Onde Comprar</p>
          <ul>
            <li className="optionBuy">
              <a target="_blank" href="https://www.amazon.com.br/dp/B07NVSGTYZ">Ebook</a>
            </li>
            <li className="optionBuy">
              Livro Impresso
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}
