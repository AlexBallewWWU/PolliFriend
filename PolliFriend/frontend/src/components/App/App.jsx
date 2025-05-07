import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from '../HomePage/HomePage.jsx'
import CommunityPage from '../CommunityPage/CommunityPage.jsx'
import EducationPage from '../EducationPage/EducationPage.jsx'
import GardenPlanPage from '../GardenPlanPage/GardenPlanPage.jsx'

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/EducationPage" element={<EducationPage />} />
        <Route path="/GardenPlanPage" element={<GardenPlanPage />} />
    </Routes>
  )
}

export default App
