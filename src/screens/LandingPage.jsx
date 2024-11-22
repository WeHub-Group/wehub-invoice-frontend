
import Navbar from '../components/Landing/Navbar'
import Advert from '../components/Landing/Advert'
import Testimonial from '../components/Landing/Testimonial'
import Footer from '../components/Landing/Footer'
import Hero from '../components/Landing/Hero'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Benefits from '../components/Landing/Benefits'
import CTA from '../components/Landing/CTA'
import Team from '../components/Landing/Team'

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Benefits />
      <Advert />
      <Team />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage
