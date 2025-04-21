import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import 'modern-normalize';
import First from './components/main/first_section';
import Second from './second';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <First />
      <Second/>
    </main>
  </StrictMode>,
)
