import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './settings/language/i18n';
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
