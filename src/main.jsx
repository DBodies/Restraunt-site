import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import 'modern-normalize';
import SecondSection from './components/main/secondSectionComponents/secondSection';
import First from './components/main/firstSectionComponents/first_section';
import ThirdSection from './components/main/thirdSectionComponents/thirdSection';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <First/>
      <SecondSection />
      <ThirdSection/>
    </main>
  </StrictMode>,
)
