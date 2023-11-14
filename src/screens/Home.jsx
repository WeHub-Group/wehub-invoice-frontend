
import Navbar from '../components/navbar'
import Features from '../components/Features'
import Advert from '../components/Advert'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

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
