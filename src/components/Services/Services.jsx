import React from 'react';
import './Services.css';
import { StoreContext } from '../../context/StoreContext';
import ServicesLoader from './ServicesLoader';

const Services = ({ setShowService }) => {

    const { servicesList, url } = React.useContext(StoreContext);

    return (
        <div className='services' id="services">
            <h2>Services</h2>

            <p className="services-text">These are the services we provide!</p>

            <div className="services-list">
                {servicesList ? (
                    servicesList.filter(service => service.cost !== null).map((service, index) => {
                        return (
                            <div key={index} className="services-list-name" onClick={() => setShowService(service.name)}>
                                <img src={url + "/images/" + service.image} alt="" />
                                <p>{service.name}</p>
                            </div>
                        )
                    })
                ) : (
                    <ServicesLoader />
                )}
            </div>
        </div>
    )
}

export default Services;
