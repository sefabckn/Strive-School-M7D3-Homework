import {connect} from 'react-redux'

const mapStateToProps = state =>({
    favs : state.favs.content
})




const Favs =({favs}) =>{





}
export default connect(mapStateToProps)(Favs);