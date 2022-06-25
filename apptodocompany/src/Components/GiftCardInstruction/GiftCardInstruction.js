import React from 'react'
import './GiftCardInstruction.css';
import corporatesalesdesktop from "../../assets/imagens/Bannervendascorporativas.webp"
import corporatesalesmobile from '../../assets/imagens/VendasCorporativasmobile.webp'

const GiftCardInstruction = () => {
    return (

        <section className='GiftCardInstruction'>
            <div className='GiftCardInstructionwrapper'>
                <div className='instructionContent'>
                    <h1 className='InstructionTitle'>
                        <b>
                            Ganhou um cartão presente?
                        </b>
                    </h1>
                    <p className='GiftCardInstructionParagraph'>Consulte o valor e a validade do seu cartão seguindo os passos:
                    </p>
                    <p className='p-GiftCardInstuction'> <b>1.</b>  Acesse o site: <a id='ShoulderCard' href='https://conteudo.todocartoes.com.br/tokstokcorporativo'>conteudo.todocartoes.com.br/</a></p>
                    <p className='p-GiftCardInstuction'><b>2.</b> Clique em "Consultar Saldo" no canto superior direito;</p>
                    <p className='p-GiftCardInstuction'><b>3.</b> Insira o número e a senha do cartão presente.</p>
                </div>

            <div className='ButtonGiftCardInstruction'>
                <button  href="https://shoulder.todocartoes.com.br/#/purchase"  className='btngiftcardinstruction' >  Consultar Valor</button>
                <button  href="https://whts.co/shoulder" className='btngiftcardinstruction'>Onde Usar</button>

            </div>
            <div className='ImgCorporateSales'>
                <img className='corporatesalesdesktop' src={corporatesalesdesktop} alt="" />
            </div>

            <div>
                <img className='corporatesalesmobile' src={corporatesalesmobile} alt="" />
            </div>

            <div className='FaqDesktop'>
                <a href="http://localhost:3000/" className='faq1'>Perguntas Frequentes</a>
                <a href="http://localhost:3000/" className='faq2'>Termos de Uso</a>
            </div>
            </div>
            
        </section>
    )
}

export default GiftCardInstruction