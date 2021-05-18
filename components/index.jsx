import ReactDOM from 'react-dom';
import React from 'react';

import Header from './Header.jsx';
import CallToAction from './CallToAction.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';

const Home = () => {
  return (
    <div id="home">
      <Header />
      <CallToAction />
      <About />
      <Testimonials />
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('app'));