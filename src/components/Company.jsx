import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {Container, Row, Col} from 'react-bootstrap'
import Link from 'react-dom'



const Company = ()=>{
    
    
    const [jobs, setJobs] = useState([])
    const params = useParams()
    
    useEffect(()=>{
        fetchJobs()
    },[jobs])
    
    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='
    
    const fetchJobs = async ()=>{

        const response = await fetch(baseEndpoint + params.company_name)
        const { data } = await response.json()

        setJobs(data)

    }
    
    
    return(

        <Container>
            <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
            
                <Col xs={3}>
                    <Link to={`/${jobs.company_name}`}>{jobs.company_name}</Link>
                </Col>
                <Col xs={9}>
                    <a href={jobs.url} target='_blank' rel="noreferrer">{jobs.title}</a>
                </Col>
            </Row>
        </Container>

    )
}
export default Company