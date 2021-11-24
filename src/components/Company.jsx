import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const Company = ()=>{
    
    
    const [jobs, setJobs] = useState([])
    const params = useParams()
    
    useEffect(()=>{
        fetchJobs()
        console.log(jobs)
    },[])
    
    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?_id='
    
    const fetchJobs = async ()=>{

        const response = await fetch(baseEndpoint + params.company)
        const { data } = await response.json()

        setJobs(data[0])
        
        
    }
    
    
    return(

        <Container>
            <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
            
                <Col xs={3}>
                    <Link to={`/${jobs._id}`}>{jobs.company_name}</Link>
                </Col>
                <Col xs={9}>
                    <a href={jobs.url} target='_blank' rel="noreferrer">{jobs.title}</a>
                </Col>
            </Row>
        </Container>

    )
}
export default Company