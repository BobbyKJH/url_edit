import ReactDOM from 'react-dom/client'
/** Components */
import App from '@/App.tsx'
/** Atom */
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
