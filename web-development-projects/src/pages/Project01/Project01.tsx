import { useState } from 'react';
import './Project01.css'

import MikkerunLogo from '../../assets/projects01/logo.webp'
import BackgroundMain from '../../assets/projects01/teste.png'

import Props01 from '../../assets/projects01/prop01.svg'
import Props02 from '../../assets/projects01/prop02.webp'
import Props03 from '../../assets/projects01/prop03.webp'
import Props04 from '../../assets/projects01/prop04.webp'

export function Project01() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <main className="project01-container">
      
      <button 
          className={`nav-button ${isOpen ? 'nav-button--open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="main-navigation"
      >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          MENU
      </button>

      <nav 
        id="main-navigation" 
        className={`nav-overlay ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className='nav-section'>
          <div className='nav-content'>
            <ul>
              <li>
                みっけるんとは
                <span>「裏山アート探検隊 みっけるん」とは？</span>
              </li>
              <li>
                プログラムの流れ
                <span>予約〜当日の流れ</span>
              </li>
            </ul>
          </div>
        </div>
      </nav> 

      <section className="project-display" aria-labelledby="project-title">
        
        <header className="project__logo">
          <img
            src={MikkerunLogo}
            alt="Logo Mikkerun: Equipe de Exploração Artística"
            id="project-title"
          />
        </header>

        <aside className="project__props" aria-hidden="true">
          <img src={Props01} alt="" />
          <img src={Props02} alt="" />
          <img src={Props03} alt="" />
          <img src={Props04} alt="" />
        </aside>

        <div
          className="project__hero-bg"
          style={{ backgroundImage: `url(${BackgroundMain})` }}
          role="img"
          aria-label="Ilustração principal do projeto Mikkerun"
        />

        <div className="project__news-ticker">
          <div className='info'>
            <time dateTime="2024-04-16">2024.04.16</time>
            <span className="tag">お知らせ</span>
          </div>
          <p>町田市・四季彩の杜でも新しい「みっけるん」がスタート！</p>
        </div>
    </section>
  </main>
  )
}