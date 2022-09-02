import React from 'react';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div class="flex flex-col w-full h-full">
      <Navigation />
      <main class="flex flex-col flex-grow">
        <h1 id="changing_text1" class="mb-0 font-sans text-4xl flex-grow-0 w-min h-min">raine</h1>
        <h1 id="changing_text2" class="mb-0 font-sans text-4xl flex-grow-0 w-min h-min">does</h1>
        <h1 id="changing_text3" class="mb-0 font-sans text-4xl flex-grow-0 w-min h-min">code</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
