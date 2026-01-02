import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Project01 } from './pages/Project01/Project01'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/project-01" element={<Project01 />} />
    </Routes>
  )
}
