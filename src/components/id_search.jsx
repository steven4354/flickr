import React, {Component} from 'react'
import $ from 'jquery-3.2.1.js'

class IDsearch extends Component{
  constructor(props){
    super(props)

    this.state ={
      userid: "",
      newUserid: ""
    }
  }

  setID(){
    this.setState({userid: this.state.newUserid}, function () {console.log(this.state.userid)} )
  }

  render(){
    return(
      <div>
        <input
          type='text'
          placeholder='Enter user ID'
          onChange={
            event => {
              this.setState({newUserid: event.target.value})
              console.log(event.target.value);
            }
          }
          />
        <button type="button" className="btn btn-default"
          onClick={() => {
            $.ajax({
              url: 'https://api.flickr.com/services/feeds/photos_public.gne',
              dataType: 'jsonp',
              data: { "tag": "", "id": this.state.newUserid, "format": "json" }
            });
          }}
          >
          Search by Id!
        </button>
        <span className="field-tip">
            Hover for user id search tips!
            <span className="tip-content">Use public ids to search (ex. 144513296@N08) instead of personal ids (ex. parkerfitzgerald)</span>
        </span>
      </div>
    )
  }
}

export default IDsearch
