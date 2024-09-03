import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import TopAlbums from './components/TopAlbums/TopAlbums';
import Section from './components/TopAlbums/TopAlbums'
import SongsSection from './components/SongsSection/SongsSection';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/top"
        initialItemCount={4} 
      />
      <Section
        title="New Albums"
        apiUrl="https://qtify-backend-labs.crio.do/albums/new"
        initialItemCount={4} 
      />
<SongsSection />
          </div>
  );
}

export default App;
