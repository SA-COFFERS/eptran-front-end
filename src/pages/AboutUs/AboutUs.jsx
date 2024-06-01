import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import eptranLogo from '../../assets/logo-eptran.png';
import AboutUsText from '../../components/AboutUsText/AboutUsText';

import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="about-us-main">
          <section className="about-us-picture">
            <h1 className="about-us-main-text">Sobre nós</h1>
            <div className="eptran-logo-retangle">
              <img src={eptranLogo} alt="logo-eptran" />
            </div>
          </section>
          <section className="about-us-texts">
            <AboutUsText title="Quem somos" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. " />
            <AboutUsText title="Missão" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. " />
            <AboutUsText title="Visão" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. " />
            <AboutUsText title="Valores" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. " />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
