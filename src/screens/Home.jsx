
import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Features from '../components/Features'
import Advert from '../components/Advert'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Landing />
            <Features />
            <Advert />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home
