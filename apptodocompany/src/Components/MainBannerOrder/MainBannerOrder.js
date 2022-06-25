import React from 'react'
import './MainBannerOrder.css';
import bannerSaldo from "../../assets/imagens/bannersaldo.jpg"
import bannerPedido from "../../assets/imagens/bannerpedidos.jpg"


const MainBannerOrder = () => {
  return (
    <section className='MainBannerOrder'>
      <div className='MainBannerOrderWrapper'>
        <div className='bannersaldo'>
          <a href="https://autorizador.todocartoes.com.br/meucartao/login/card/tokstok">
            <img className='imgbannerorderdesktop-saldo' src={bannerSaldo} alt="" />
          </a>
        </div>

        <div className='bannerpedidos'>
          <a href="https://cartaopresente.tokstok.com.br/login">
            <img className='imgbannerorderdesktop-pedidos' src={bannerPedido} alt="" />
          </a>
        </div>
      </div>
    </section>

  )
}

export default MainBannerOrder