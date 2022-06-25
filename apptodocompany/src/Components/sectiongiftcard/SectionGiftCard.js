import React from 'react'
import './SectionGiftCard.css';
import bannercartaodesktop from "../../assets/imagens/bannercartao.png"
import bannercartaomobile from "../../assets/imagens/bannercartaomobile.jpg"


const SectionGiftCard = () => {
    return (
        <section className='sectiongiftcard'>

            <div className='sectiongiftcarddesktop'>
                <div className='sectiongiftcarddesktopwrapper'>

                    <div className='sectiongiftcardtext'>
                        <h1 className='h1-sectiongiftcard'>  CARTÃO <b> PRESENTE </b></h1>
                        <h4 className='h4-sectiongiftcard'>TOK&amp;STOK</h4>
                        <p className='p-sectiongiftcard'>Um jeito prático de presentear quem você gosta. <br />
                            Esse é o <b>Cartão Presente Tok&amp;Stok</b>, um cartão pré- <br />
                            pago  para presentear sem complicações. </p>
                        <button href='http://localhost:3001/' className='btn-sectiongiftcardgreen'>Comprar</button>
                        <button href='http://localhost:3001/' className='btn-sectiongiftcardwhite'>Compras Corporativas</button>
                    </div>
                    <img className="bannercartaodesktop" src={bannercartaodesktop} alt='bannercartao' />
                </div>

                <div className='sectiongiftcardmobile'>
                    <img className='bannercartaomobile' src={bannercartaomobile} alt='bannercartao' />

                    <div className='buttongiftcard'>
                        <button href='http://localhost:3001/' className='btn-sectiongiftcardgreen'>Comprar</button>
                        <button href='http://localhost:3001/' className='btn-sectiongiftcardwhite'>Compras Corporativas</button>
                    </div>
                </div>

            </div>




        </section>
    )
}

export default SectionGiftCard