import React from 'react';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div class="flex flex-col w-full h-full">
      <Navigation />
      <main class="flex max-w-full max-h-full"><h1>App Test</h1></main>
      <Footer />
    </div>
  );
};

export default App;
