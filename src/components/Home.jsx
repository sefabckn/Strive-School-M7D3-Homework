
import {Nav, Row, Col, Container, Navbar, Form, FormControl, Button, ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, setState, useEffect } from 'react';
import reactDom from 'react-dom';
import moment from 'moment'
import Company from './Company';
import Favs from './Favs';
import {Link} from 'react-router-dom'
const Home =  () =>{
    
    const [query, setQuery] = useState();
    const [jobOffers, setJobOffers] = useState([]);

    useEffect(()=>{
        fetchJobs();
    },[query])

    const fetchJobs = async () =>{
        try {
            let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`)
            if(response.ok){
                let jobs = await response.json()
                console.log(jobs)
                setJobOffers(jobs.data)
            }else{
                console.log('Error')
            }
    
        }
        catch (err){
            console.log(err)
        }
    }
    
        return(
            <>
            
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Find a Job</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/favorites">Favourites</Nav.Link>
                        </Nav>

                    </Container>
                </Navbar>
    
    

                <h1>Here is your Job Search Results: </h1>
                <Container>
                    <Row id='row1'>
                        <Col id='col1'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup as="ul">
                                {
                                   jobOffers.map((job) => (

                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto justify-content-center align-items-center">
                                                <div className="fw-bold">{job.title}</div>
                                                <div><Link to={`/${job._id}`}>{job.company_name}</Link> </div>
                                                <div>
                                                    <em>Publication Date:</em> 
                                                    <span className="date1">{moment(job.publication_date).format('DD/MM/YYYY')}</span>
                                                </div>
                                                <Button variant="primary" >Add To Fav</Button>
                                            </div><hr />
                                        </ListGroup.Item>
                                        
                                    ))
                                }

                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )

        

        
                        }


export default Home