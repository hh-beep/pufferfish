//Base
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';

/* Styles */
import './index.css';
import LoadFont from './LoadFont';

/* Components */
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Inicialize Firebase */
import inicializeDB from './Api/Firebase'



/* Inicialize things here */
inicializeDB()
LoadFont()


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
