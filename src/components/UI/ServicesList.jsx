import React from 'react';
import { Col } from 'reactstrap';

import servicesData from '../../assets/data/serviceData';

import '../../styles/ServicesList.css';

const ServicesList = () => {
    return (
        <>
            {
                servicesData.map(item => (
                    <Col lg="4" md="4" sm="6" key={item.id}>
                        <div className="service__item">
                            <span className='mb-3 d-inline-block'>
                                <i className={item.icon}></i>
                            </span>
                            <h6>{item.title}</h6>
                            <p className="section__description">{item.desc}</p>
                        </div>
                    </Col>
                ))
            }
        </>
    );
}

export default ServicesList;