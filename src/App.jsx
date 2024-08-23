import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar.jsx'
import Search from './components/Search.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <div className='flex'>
    <Cards newsImage="https://ichef.bbci.co.uk/news/1024/cpsprodpb/af61/live/10d18900-605c-11ef-b3ab-d92ed8dd7357.jpg.webp" heading="Diplomatic tightrope for Modi as he visits Kyiv after Moscow" description="Indian Prime Minister Narendra Modi is in Ukraine on Friday to hold talks with President Volodymyr Zelensky. The trip comes just weeks after he met Russian President Vladimir Putin in Moscow."/>
    <Cards newsImage="https://ichef.bbci.co.uk/news/1024/cpsprodpb/af61/live/10d18900-605c-11ef-b3ab-d92ed8dd7357.jpg.webp" heading="Diplomatic tightrope for Modi as he visits Kyiv after Moscow" description="Indian Prime Minister Narendra Modi is in Ukraine on Friday to hold talks with President Volodymyr Zelensky. The trip comes just weeks after he met Russian President Vladimir Putin in Moscow."/>
    <Cards newsImage="https://ichef.bbci.co.uk/news/1024/cpsprodpb/af61/live/10d18900-605c-11ef-b3ab-d92ed8dd7357.jpg.webp" heading="Diplomatic tightrope for Modi as he visits Kyiv after Moscow" description="Indian Prime Minister Narendra Modi is in Ukraine on Friday to hold talks with President Volodymyr Zelensky. The trip comes just weeks after he met Russian President Vladimir Putin in Moscow."/>
    <Cards newsImage="https://ichef.bbci.co.uk/news/1024/cpsprodpb/af61/live/10d18900-605c-11ef-b3ab-d92ed8dd7357.jpg.webp" heading="Diplomatic tightrope for Modi as he visits Kyiv after Moscow" description="Indian Prime Minister Narendra Modi is in Ukraine on Friday to hold talks with President Volodymyr Zelensky. The trip comes just weeks after he met Russian President Vladimir Putin in Moscow."/>
    </div>
    <br>
    </br>
    <Footer/>
    </>
  )
}

export default App
