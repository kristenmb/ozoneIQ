/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../../sw.js')
        .then((registration) => {
            console.log('SW Registered', registration);
        });
}

if (window.Cypress) {
    serviceWorkerRegistration.unregister();
} else {
    serviceWorkerRegistration.register();
}

self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys()
    .then(keys => {
      keys.forEach(key => {
        if (key !== pwaCache) {
          return caches.delete(key)
        }
      })
    })
  e.waitUntil(cacheCleaned)
});

// serviceWorkerRegistration.register();

reportWebVitals();
