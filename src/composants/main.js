// MainContent.js
import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';

function MainContent() {
  return (
    <div>
      <Header />
      <main>
        {/* Contenu principal de votre page */}
      </main>
      <Footer />
    </div>
  );
}

export default MainContent;
