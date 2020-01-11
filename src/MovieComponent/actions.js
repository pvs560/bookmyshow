import MovieActionTypes from "./actionTypes"
import MovieList from "../JsonData/movielist";
import TheaterData from "../JsonData/TheaterData";

export const setMovieListData = ()=>{
   return (dispatch)=>{
    // fetch(GLOBALCONTEXT.DETAIL_VIEW_CONFIG_SCHEMA_CONFIGSEARCH, {
    //     method: 'get',
    //     headers: urlparameters
    // })
    //     .then(checkHttpStatus)
    //     .then(parseJSON)
    //     .then((response)=>{
      
    //     })
    //     .catch((err)=>{
    //         console.log("error message::",err);
    //     })
      let MapData = new Map();
      TheaterData.map((data)=>{
          MapData.set(data.id,data.theaterlist);
      })

       dispatch({
         type:MovieActionTypes.SET_MOVIE_LIST_DATA,
         payload:{
            movielist:MovieList.movielist,
            theaterlist:MapData
         } 
       })
   }
}

export const setCurrentBookingMovie = (id) =>{
    return (dispatch,getState)=>{
        let curState = getState();
        let movieobj = curState.movielist.find(data => data.imdbID === id);

        dispatch({
            type:MovieActionTypes.SET_CURRENT_BOOKING_MOVIE,
            payload:{
             curSelectedMovieObj:movieobj
            }
        })
    }
}

export const setBookingStatus = (id) =>{
    return (dispatch)=>{
        dispatch({
            type:MovieActionTypes.SET_BOOKING_STATUS,
            status:"Booked Successfully"
        })
    }
}