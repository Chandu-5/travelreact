import Navbar from '../components/Navbar'
import BackgroundImg from '../assets/night.jpg';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={BackgroundImg}
                title='About Us'
                btnclass='hide'
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;