function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Landing Page</Typography>
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