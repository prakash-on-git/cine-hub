import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// install react-router-dom using "npm install react-router-dom@6"
// install tailwind directory "npm install -D tailwindcss@3"
// then do "npx tailwindcss init"
// make "tailwind.config.js" in route directory and add boiler code from website
// in index.css import @tailwind base; @tailwind components; @tailwind utilities;
// for full guide go to "https://tailwindcss.com/docs/guides/create-react-app"

// npm i
// npm start
