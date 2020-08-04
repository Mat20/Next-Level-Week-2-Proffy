import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import  './styles.css';

function TeacherItem() {
  return (

    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/20867486?s=460&u=b635b04c8d1b062365e7080de1ce1f09d84f18fc&v=4" alt="Matheus Souza Monteiro" />
      <div>
        <strong>Matheus Souza Monteiro</strong>
        <span>Sistema de Informação</span>
      </div>
    </header>

    <p>
      Apaixando por programação e pela melhores tecnologia do mercado.
      <br /><br />
      Em busca de aprendizado.... O dinheiro nao leva ninguem a nada,em busca de estudos. E tentando entender as liguanguens de programação e framework..
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 1000,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
    </footer>
</article>

  );
}
    

export default TeacherItem;