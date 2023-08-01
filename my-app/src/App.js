
import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Pending title</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <HeroSection />
        <FeaturesSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;