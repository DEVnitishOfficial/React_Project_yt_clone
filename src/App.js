import React  from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx"
import Feed from "./components/Feed.jsx"
// import LeftNav from "./components/LeftNav.jsx"
// import LeftNavMenu from "./components/LeftNavMenu"
import SearchResults from "./components/SearchResults"
// import SearchResultVideo from "./components/SearchResultVideo"
// import SuggestionVideo from "./components/SuggestionVideo"
// import VideoCard from "./components/VideoCard"
import VideoDetails from "./components/VideoDetails"
import { AppContext } from './context/contextApi'



const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/searchResul/:searchQuery" element={<SearchResults />} />
          <Route path="/video/:id"  element={<VideoDetails />} />
        </Routes>
      </div>

      </BrowserRouter>
    </AppContext>
  )
}

export default App