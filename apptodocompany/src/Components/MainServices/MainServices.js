import React from 'react'
import "./MainServices.css";

const MainServices = () => {
  return (
    <section className='MainServicesdesktop'>
      <div className='MainServicesdesktopwrap'>

        <div class="column">
          <h4 className='MainServicestitle'> O QUE É?
          </h4>
          <p className='GiftCardInfo'>O presente perfeito!
            Você escolhe o valor e usa para surpreender quem você ama</p>
        </div>

        <div class="column">
          <h4 className='MainServicestitle'>ONDE COMPRAR?
          </h4>
          <p className='GiftCardInfo'>Compre nas lojas próprias da TOK&amp;STOK
            ou em nosso e-commerce,
            clicando <a href='https://www.tokstok.com.br/lojas'>aqui</a>.</p>
        </div>

        <div class="column">
          <h4 className='MainServicestitle'> QUANTO CUSTA?
          </h4>
          <p className='GiftCardInfo'>Escolha o valor que você deseja presentear.
            Ele será creditado no cartão presente para ser resgatado.
          </p>
        </div>

        <div class="column">
          <h4 className='MainServicestitle'>  COMO USAR?
          </h4>
          <p className='GiftCardInfo'>Quem recebe o cartão, pode trocar nas lojas próprias TOK&amp;STOK ou
            em nosso e-commerce.</p>
        </div>
      </div >
    </section>

  )
}

export default MainServices