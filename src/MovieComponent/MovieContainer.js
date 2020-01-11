import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieComponent from './MovieComponent';
import * as MovieActions from "./actions";

const mapStateToProps = (state)=>({
    movielist: state.movielist
})

const mapDispatchToProps = (dispatch)=>({
movieActions: bindActionCreators(MovieActions, dispatch)
})

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);

export default MovieContainer;