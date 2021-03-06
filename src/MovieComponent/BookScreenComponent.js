import React from "react";
import {SeatSelectionComponent} from "./SeatSelectionComponent";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActions from "./actions";
import {pushHistory} from "./Utils";
import PropTypes from "prop-types";

class BookScreenComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalShow:false,
            popupbody:<div><input type="checkbox" name="A1" value="A1"/>A1 
            <input type="checkbox" name="A2" value="A2"/>A2
            <input type="checkbox" name="A3" value="A3"/>A3
            <input type="checkbox" name="A4" value="A4"/>A4</div>,
            statusbody:"booked successfully",
            showmessage:false
        }
    }

    handleSeatSelection = (selectedseats) =>{
        console.log("seatselected::",selectedseats);
    }

    handleSeatSelPopUp = (event)=>{
        console.log("button clicked");
        let ispopup = (this.state.modalShow)?false:true;
        if(event !== undefined && event.target.id === this.props.curSelectedMovie.imdbID){
            this.setState({modalShow:ispopup,showmessage:true});
        }
        else {
        this.setState({modalShow:ispopup});
        }
    }

    handlemessagepopUp = (event)=>{
        console.log("showmessage clicked");
        let ispopup = (this.state.showmessage)?false:true;
        this.setState({showmessage:ispopup});
        pushHistory("/");
        
    }

    constructShowTime = (showlist) =>{
    return showlist.map((data,index) => <span className="movie-padding" key={index}><button name={`time+${index}`} onClick={this.handleSeatSelPopUp}>{data}</button></span>); 
    }

    constructTheaterData = (listdata)=>{

     return listdata.map((data)=>{
         return <div>
         <label className="movie-padding">{data.name}</label>
         {this.constructShowTime(data.showtimes)}
     </div>
     })

    }

    render(){
        let theaterDomList = this.constructTheaterData(this.props.theaterlist.get(this.props.curSelectedMovie.imdbID));
        return (<div>
    <header><h1>{this.props.curSelectedMovie.Title}</h1></header>
            <section>
            {theaterDomList}
            </section>
            <SeatSelectionComponent show={this.state.modalShow} onHide={this.handleSeatSelPopUp} headername= {`Select Seats for ${this.props.curSelectedMovie.Title} Movie`} handleSeatSelection={this.handleSeatSelection} movieId={this.props.curSelectedMovie.imdbID} popupbody={this.state.popupbody} footer="Book"/>
            <SeatSelectionComponent show={this.state.showmessage} onHide={this.handlemessagepopUp} headername={this.props.curSelectedMovie.Title} handleSeatSelection={this.handleSeatSelection} movieId={this.props.curSelectedMovie.imdbID} popupbody={this.state.statusbody} footer="Ok"/>
        </div>)
    }
}

const mapStateToProps = (state)=>({
    curSelectedMovie: state.curSelectedMovieObj,
    theaterlist:state.theaterlist
})

const mapDispatchToProps = (dispatch)=>({
movieActions: bindActionCreators(MovieActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(BookScreenComponent);

BookScreenComponent.propTypes = {
    curSelectedMovie:PropTypes.object.isRequired,
    theaterlist:PropTypes.array.isRequired 
}