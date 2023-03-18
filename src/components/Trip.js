import TripData from './TripData';
import './TripStyles.css';
import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/6.jpg';
import Trip3 from '../assets/8.jpg';

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>

                <TripData
                    image={Trip1}
                    heading='Trip in Indonasia'
                    text='This library contains a React component, as well as custom hooks to help integrate Rive into your web application (types included). Under the hood, this runtime is a React-friendly wrapper around the @rive-app/webgl runtime, exposing types and Rive instance functionality.'
                />

                <TripData
                    image={Trip2}
                    heading='Trip in Malaysia'
                    text='This library contains a React component, as well as custom hooks to help integrate Rive into your web application (types included). Under the hood, this runtime is a React-friendly wrapper around the @rive-app/webgl runtime, exposing types and Rive instance functionality.'
                />

                <TripData
                    image={Trip3}
                    heading='Trip in France'
                    text='This library contains a React component, as well as custom hooks to help integrate Rive into your web application (types included). Under the hood, this runtime is a React-friendly wrapper around the @rive-app/webgl runtime, exposing types and Rive instance functionality.'
                />

            </div>
        </div>
    )
}

export default Trip;