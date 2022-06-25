import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer/Footer';
import GiftCardInstruction from './Components/GiftCardInstruction/GiftCardInstruction'
import MainBannerOrder from './Components/MainBannerOrder/MainBannerOrder'
import MainServices from './Components/MainServices/MainServices'
import HeaderMenu from './Components/Menu-Nav/HeaderMenu'
import SectionGiftCard from './Components/sectiongiftcard/SectionGiftCard'
import StiykyFooter from './Components/Stiky-Footer/StikyFooter';
import Vantagens from './Components/Vantagens/vantagens'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderMenu />
    <SectionGiftCard />
    <MainServices />
    <Vantagens />
    <MainBannerOrder />
    <GiftCardInstruction />
    <StiykyFooter />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
