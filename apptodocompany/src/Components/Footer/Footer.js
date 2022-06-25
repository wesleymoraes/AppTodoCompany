import React from 'react'
import './Footer.css'
import facebookBrand from '../../assets/sociais/facebook-brands.svg'
import instagramBrand from '../../assets/sociais/instagram-brands.svg'
import twitterBrands from '../../assets/sociais/twitter-brands.svg'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="copyright-box">
                            <p className="copyright-text">Copyright &copy; 2022 todos direitos reservados<a href="http://localhost:3000/]">TodoCompany</a>.
                            </p>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='RowSociais'>
                            <div className="sociais-box">
                                <a href="http://localhost:3000/]">
                                    <img className="redessociais" src={facebookBrand} alt="" />
                                </a>
                                <a href="http://localhost:3000/]">
                                    <img className="redessociais" src={instagramBrand} alt="" />
                                </a>
                                <a href="http://localhost:3000/]">
                                    <img className="redessociais" src={twitterBrands} alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer