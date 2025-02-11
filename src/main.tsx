import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GLobalCtx from './context/globalCtx.tsx'
import './assets/css/index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GLobalCtx>
      <StrictMode>
        <App />
      </StrictMode>
    </GLobalCtx>
  </Provider>,
)
