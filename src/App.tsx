import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Typewriter from './components/typewriter/Typewriter';
import AboutMe from './components/about/About';
import Footer from './components/footer/Footer';
import Socials from './components/socials/Socials';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const description =
  'I am a passionate software developer with expertise spanning from mainframes to modern full-stack technologies, driven by a commitment to continuous learning and innovation';
const App = () => {
  return (
    <div className="container">
      <div id='top'>
      {/* <Header> */}
        {/* <Navbar links={links} /> */}
        <Hero description={description}>
        <Typewriter className="hero-title" text="Marcia T. Merritt" delay={500} />
      </Hero>
      {/* </Header> */}
      </div>
      {/* <AboutMe /> */}
      <Footer links={links} text='Marcia T. Merritt. All Rights Reserved.'/>
    </div>
  );
};

export default App;
