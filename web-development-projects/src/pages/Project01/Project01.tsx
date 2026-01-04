import { useState } from 'react';
import './Project01.css'

import MikkerunLogo from '../../assets/projects01/logo.webp'
import BackgroundMain from '../../assets/projects01/teste.png'

import Props01 from '../../assets/projects01/prop01.svg'
import Props02 from '../../assets/projects01/prop02.webp'
import Props03 from '../../assets/projects01/prop03.webp'
import Props04 from '../../assets/projects01/prop04.webp'
import IconBack from '../../assets//icon-back.svg'

// import Photo01 from '../../assets/projects01/about-ph01.png';
import Photo03 from '../../assets/projects01/about-ph03.png';


export function Project01() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<>
					<main className="project01-container">
				<a href="/WebDevelopment4Fun/" className="backlink" aria-label="Go back">
					<img src={IconBack} alt="Go back" />
				</a>

				
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

				<section className="project-home" aria-labelledby="project-title">
					
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

<section className="aboutUs">
  <h1>
    五感をひらく裏山探検で <br />
    自然に隠されたアートをみっけ！
  </h1>

  {/* ===================== FIRST ARTICLE ===================== */}
  <article className="about-article first">
    <div className="text center">
      檜原村の大自然にようこそ。<br />
      君は今日、「自然のアート」を探して歩く、たんけん隊の隊長だ。<br />
      カメラを首からぶらさげて、望遠鏡とルーペを手に、森の中へ！<br />
      地図どおり、コースに沿って進んでいくと…<br />
      ほら、ここにも！あそこにも！。<br />
      次々に出会う景色は、ワクワクと発見の連続。<br />
      準備はいいかい？さあ、探検のはじまりだ！
    </div>
  </article>

  {/* ===================== SECOND ARTICLE ===================== */}
  <article className="about-article with-image">
    <img src={Photo03} alt="" />

    <div className="text left">
      <h2 className="red">
        子どもが主役！ <br />
        家族で楽しめる自然体験プログラム
      </h2>

      <p>
        外遊びのプロが入念に設計した体験内容で、子どもたちの気づきと熱中をサポート！
        東京とは思えない自然豊かな檜原村（ひのはらむら）を探検しながら、
        自然の風景の中にキラリと光る「自然のアート」を発見していく、探検プログラムです。
        子どもが先頭に立って目を輝かせて進み遊ぶ、そんな時間を家族で楽しもう！
      </p>
    </div>
  </article>

  {/* ===================== THIRD ARTICLE ===================== */}
  <article className="about-article with-image reverse">
    <div className="text left">
      <h2 className="blue">
        子どもが主役！ <br />
        家族で楽しめる自然体験プログラム
      </h2>

      <p>
        外遊びのプロが入念に設計した体験内容で、子どもたちの気づきと熱中をサポート！
        東京とは思えない自然豊かな檜原村（ひのはらむら）を探検しながら、
        自然の風景の中にキラリと光る「自然のアート」を発見していく、探検プログラムです。
        子どもが先頭に立って目を輝かせて進み遊ぶ、そんな時間を家族で楽しもう！
      </p>
    </div>

    <img src={Photo03} alt="" />
  </article>

  {/* ===================== FOURTH ARTICLE ===================== */}
  <article className="about-article with-image">
    <img src={Photo03} alt="" />

    <div className="text left">
      <h2 className="green">
        子どもが主役！ <br />
        家族で楽しめる自然体験プログラム
      </h2>

      <p>
        外遊びのプロが入念に設計した体験内容で、子どもたちの気づきと熱中をサポート！
        東京とは思えない自然豊かな檜原村（ひのはらむら）を探検しながら、
        自然の風景の中にキラリと光る「自然のアート」を発見していく、探検プログラムです。
        子どもが先頭に立って目を輝かせて進み遊ぶ、そんな時間を家族で楽しもう！
      </p>
    </div>
  </article>
</section>

		</>
	)
}