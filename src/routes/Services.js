import Navbar from '../components/Navbar'
import BackgroundImg from '../assets/service.jpg';
import Hero from '../components/Hero';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Services() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={BackgroundImg}
                title='Services'
                btnclass='hide'
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Services;