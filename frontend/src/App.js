import React from 'react'
import Header from'./components/Header'
import Footer from'./components/Footer'

// Screens
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <HomeScreen />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
