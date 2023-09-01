import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import blogData from '../../assets/data/blogData';

import '../../styles/BlogList.css';

const BlogList = () => {
    return (
        <>
            {
                blogData.map(item => (
                    <Col lg="4" md="4" sm="6" key={item.id} className="mb-5">
                        <div className="blog__item">
                            <img src={item.imgUrl} alt="" className='w-100'/>
                            <div className="blog__info p-3">
                                <Link to={`/blogs/${item.title}`} className="blog__title">{item.title}</Link>
                                <p className="section__description mt-3">
                                    {
                                        item.description > 100 ? item.description.substring(0, 100) : item.description
                                    }
                                </p>
                                <Link to={`/blogs/${item.title}`} className="read__more">Read More</Link>
                                <div className="blog__time pt-3 mt-3 d-flex
                                    align-items-center justify-content-between">
                                    <span className='blog__author'>
                                        <i className='ri-user-line'></i> {item.author}
                                    </span>
                                    <div className='d-flex align-items-center gap-3'>
                                        <span className='d-flex align-items-center gap-1
                                            section__description'>
                                            <i className='ri-calendar-line'></i> {item.date}
                                        </span>
                                        <span className='d-flex align-items-center gap-1
                                            section__description'>
                                            <i className='ri-time-line'></i> {item.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </>
    );
}

export default BlogList;