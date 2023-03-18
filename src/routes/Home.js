import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import BackgroundImg from '../assets/12.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                heroImg={BackgroundImg}
                title='Your Journey Your Story'
                text='Choose Your Favourite Destination'
                url='/Services'
                btntext='Travel Plan'
                btnclass='show'
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;