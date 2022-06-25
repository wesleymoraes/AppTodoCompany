import React from 'react'
import './HeaderMenu.css'
import Logo from "../../assets/sociais/Logo.png"


const HeaderMenu = () => {
  return (

    <section class="top-nav">

      <div className="topnavwrapper">


        <div className='Logo'>
          <a href="http://localhost:3000/">
            <img src={Logo} alt='logo' />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li>
            <a className='Menubtn' href="https://www.tokstok.com.br/cartao-presente#como-funciona">Como Funciona </a>
          </li>

          <li>
            <a className='Menubtn' href="https://www.tokstok.com.br/cartao-presente">Comprar Para Empresas</a>
          </li>

          <li>
            <a className='Menubtn' href="https://www.tokstok.com.br/cartao-presente">Meu Cartão</a>
          </li>

          <li >
            <a className='BtnAcessarConta' href="https://www.tokstok.com.br/cartao-presente">Acessar Conta</a>
          </li>
        </ul>
      </div>
    </section>


  )
}

export default HeaderMenu