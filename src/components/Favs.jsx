import {connect} from 'react-redux'
import {FaTrash}  from 'react-bootstrap'

const mapStateToProps = state =>({
    favs : state.favs.content
})




const Favs =({favs}) =>{
return(
    console.log('hello')
)
    



}
export default connect(mapStateToProps)(Favs);