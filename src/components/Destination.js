import './DestinationStyles.css';
import DestinationData from './DestinationData';
import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/3.jpg';
import Mountain4 from '../assets/4.jpg';

const Destination = () => {
    return (
        <div className="destination">

            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                cName='first-des'
                heading='Taal Volcano, Batangas'
                text='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to crater is a mere 45mins, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanoic rocks steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!'
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                cName='first-des-reverse'
                heading='Taal Volcano, Batangas'
                text='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to crater is a mere 45mins, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peculiar environment found on an active volcano, including volcanoic rocks steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!'
                img1={Mountain3}
                img2={Mountain4}
            />

        </div>
    )
}

export default Destination;