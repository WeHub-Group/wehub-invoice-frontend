
import Navbar from '../components/Landing/Navbar'
import Features from '../components/Landing/Features'
import Advert from '../components/Landing/Advert'
import Testimonial from '../components/Landing/Testimonial'
import Footer from '../components/Landing/Footer'
import Hero from '../components/Landing/Hero'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Features />
            <Advert />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home
