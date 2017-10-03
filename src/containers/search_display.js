import React, {Component} from 'react'
import { connect } from 'react-redux'

class SearchDisplay extends Component {

  render(){
    if(!this.props.photos[0]){
      console.log('this is the undefined searchdisplay', this.props.photos);
      return(
        <div>Enter a tag to get started!</div>
      )
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[0].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[1].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[2].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[3].media.m}></img></div>
        </div>
        <div className="row">
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[4].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[5].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[6].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[7].media.m}></img></div>
        </div>
        <div className="row">
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[8].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[9].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[10].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[11].media.m}></img></div>
        </div>
        <div className="row">
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[12].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[13].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[14].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[15].media.m}></img></div>
        </div>
        <div className="row">
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[16].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[17].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[18].media.m}></img></div>
          <div className="col-md-3"><img className="img-fluid img-thumbnail" src={this.props.photos[0].items[19].media.m}></img></div>
        </div>
      </div>
  )}
}

function mapStateToProps(state){
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(SearchDisplay)
