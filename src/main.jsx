import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import 'modern-normalize';
import First from './components/main/first_section';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <First />
    </main>
  </StrictMode>,
)
