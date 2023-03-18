import Navbar from '../components/Navbar'
import BackgroundImg from '../assets/2.jpg';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={BackgroundImg}
                title='Contact Us'
                btnclass='hide'
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;