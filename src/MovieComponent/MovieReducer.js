import {createReducer} from "./Utils";
import MovieActionTypes from "./actionTypes"


const initialState = {
    "movielist": null,
    "theaterlist":null,
    "curSelectedMovieObj":null,
    "bookingStatus":null
}

let MovieReducer = createReducer(initialState,{
    [MovieActionTypes.SET_MOVIE_LIST_DATA]:(state,payload)=>{
        return Object.assign({},state,
            {'movielist':payload.movielist,
             'theaterlist':payload.theaterlist});
    },
    [MovieActionTypes.SET_CURRENT_BOOKING_MOVIE]:(state,payload)=>{
        return Object.assign({},state,{
          "curSelectedMovieObj":payload.curSelectedMovieObj
        })
    },
    [MovieActionTypes.SET_BOOKING_STATUS]:(state,payload)=>{
        return Object.assign({},state,{
        "bookingStatus":payload.status
        })
    }
});

export default MovieReducer;