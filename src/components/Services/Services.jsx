import React from 'react'
import './Services.css'
import { StoreContext } from '../../context/StoreContext'

const Services = ({ setShowService }) => {

    const { servicesList, url } = React.useContext(StoreContext);
    const [loading, setLoading] = React.useState(true); // State to track loading status

    // Simulate loading delay
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after delay
        }, 8000); // Adjust delay time as needed

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const skeleton = (
        <div className='services' id="services">
            <h2>Loading Services...</h2>
            <p className="services-text">Please wait while we fetch the services.</p>
            <div className="services-list">
                {/* Create skeleton cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
                    <div key={index} className="services-list-name skeleton">
                        <div className="skeleton-image"></div>
                        <div className="skeleton-text"></div>
                    </div>
                ))}
            </div>
        </div>
    );

    // Actual content when not loading
    if (loading) {
        return skeleton; // Render skeleton if loading
    }

    return (
        <div className='services' id="services">
            <h2>Services</h2>

            <p className="services-text">These are the services we provide!</p>

            <div className="services-list">
                {servicesList.filter(service => service.cost !== null).map((service, index) => {
                    return (
                        <div key={index} className="services-list-name" onClick={() => setShowService(service.name)}>
                            <img src={url + "/images/" + service.image} alt="" />
                            <p>{service.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services