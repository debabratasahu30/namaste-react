import React from 'react';
import { createRoot } from 'react-dom/client';
const Title = () => (
  <h1 className="title">Welcome to Namste Javascript!</h1>
);
const HeadingComponent = () => (
  <div className="container">
    <Title/>
    <h2>Namste javascript first react functional component.</h2>
  </div>
);
const root = createRoot(document.getElementById('root'));
root.render(  
    <HeadingComponent />
);
