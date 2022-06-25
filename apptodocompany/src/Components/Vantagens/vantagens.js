import React from 'react'
import './Vantagens.css';
import Vantagensmobile from '../../assets/imagens/vantagensdocartaomobile.png'
import VantagensDesktop from '../../assets/imagens/vantagensdocartao.png'
import App from './SimpleSlide'



const Vantagens = () => {
  return (
    <section className='Vantagens'>

      <div className="vantagenswrapper">


        <div className='App'>
          <App />
          <div className="Vantagensmobile">
            <img className='bannervantagensmobile' src={Vantagensmobile} alt="" />
          </div>
        </div>

        <div className="vantagensbackground">

          <div className='Vantagensdesktop'>
            <img className='bannervantagens' src={VantagensDesktop} alt="" />
          </div>
        </div>
      </div>


    </section>
  )
}

export default Vantagens