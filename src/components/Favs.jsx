import {connect} from 'react-redux'

import { Button, Row, Col} from 'react-bootstrap'
import { removeFromFavAction } from "../actions";
const mapStateToProps = state =>({
    favs : state.favs.content
})


const mapDispatchToProps = dispatch =>({
    removeFromFav : (indexToRemove) =>{
        dispatch(removeFromFavAction(indexToRemove))
    }
})

const Favs =({favs, removeFromFav}) =>{
    return(
        <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {favs.map((company) => (
          <li key={company._id} className="my-4">
            <Button variant="danger" onClick={() => removeFromFav(company)}>
                <i class="cis-trash"></i>
            </Button>
            <span className="mx-2"><strong>{company.company_name}</strong></span>
            <span>{company.title}</span>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
    )

}
export default connect(mapStateToProps, mapDispatchToProps)(Favs);