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
    <>
      {/* GitHub corner */}
      <a
        href="https://github.com/mewmewdevart/WebDevelopment4Fun"
        target="_blank"
        rel="noopener noreferrer"
        className="github-corner"
        aria-label="View source on GitHub"
      >
      </a>

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
          <button className={`btn ${filter === 'design' ? 'active' : ''}`} onClick={() => setFilter('design')}>
            Design
          </button>
          <button className={`btn ${filter === 'logic' ? 'active' : ''}`} onClick={() => setFilter('logic')}>
            JS Logic
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
    </>
  )
}
