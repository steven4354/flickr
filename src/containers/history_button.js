import React, {Component} from 'react'
import { connect } from 'react-redux'

class HistoryButton extends Component {

  render(){
    if(!this.props.photos[0]){
      console.log('this is the undefined history', this.props.photos[0]);
      return(
        <div>No search history yet!</div>
      )
    }
    else if (this.props.photos.length == 2) {
      return(
        <div>
          Here are your recent searches:
          <ul>
            <li>{this.props.photos[0].title}</li>
          </ul>
        </div>
      )
    }
    else if (this.props.photos.length == 3) {
      return(
        <div>
          Here are your recent searches:
          <ul>
            <li>{this.props.photos[0].title}</li>
            <li>{this.props.photos[1].title}</li>
          </ul>
        </div>
      )
    }

    return(
      <div>
        Here are your recent searches:
        <ul>
          <li>{this.props.photos[0].title}</li>
          <li>{this.props.photos[1].title}</li>
          <li>{this.props.photos[2].title}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(HistoryButton)
