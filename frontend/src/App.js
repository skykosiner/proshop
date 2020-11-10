import React from 'react'
import Header from'./components/Header'
import Footer from'./components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Welcome To ProShop</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
