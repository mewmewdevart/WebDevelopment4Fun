import { useState } from 'react'
import '../App.css'

import projectsData from '../utils/projectsData'
import logoImage from '../assets/icon.png'
import { CardComponent } from '../components/CardComponent/CardComponent'

export function Home() {
	const [filter, setFilter] = useState('all')

	const filteredProjects =
		filter === 'all'
			? projectsData
			: projectsData.filter(project => project.category === filter)

	return (
		<section className="home-container">
			<a href="https://github.com/mewmewdevart/WebDevelopment4Fun" target="_blank" rel="noopener noreferrer" className="github-corner" aria-label="Visualizar projeto no GitHub" > <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, border: 0, transform: 'scale(-1, 1)', }} > <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /> <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm" style={{ transformOrigin: '130px 106px' }} /> <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" /> </svg> </a>


			<header className="hero">
				<img src={logoImage} alt="WebDevelopment4Fun logo" className="logo" />
				<h1 className="title">
					WebDevelopment4Fun <span className="highlight">Showcase</span>
					<span className="emoji" aria-hidden="true"></span>
				</h1>
				<p className="subtitle">Learning web development by building web pages</p>
			</header>

			<section className="container-fluid">
				<div id="myBtnContainer">
					<button className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
						Show all
					</button>
					<button className={`btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>
						Frontend
					</button>
				</div>

				<div className="cards-grid">
					{filteredProjects.map((project, index) => (
						<CardComponent
							key={index}
							number={index + 1}
							name={project.name}
							description={project.description}
							imagePath={project.imagePath}
							badgeText={project.badgeText}
							slug={project.slug}
						/>
					))}
				</div>
			</section>

		<footer>
			<span className="footer-text">
				Developed with <span className="heart-mask" aria-hidden="true"></span> by Larissa
			</span>
		</footer>

		</section>
	)
}
