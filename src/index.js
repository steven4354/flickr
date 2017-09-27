import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from '/app/node_modules/jquery'


class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      tag: "chipmunks",
      newTag: ""
    }
    console.log('tag', this.state.tag, 'newTag', this.state.newTag);
  }

  setTag(){
    this.setState({tag: this.state.newTag}, function () {console.log(this.state.tag)} )
  }

  render(){
    return(
      <div>
        <input
          type='text'
          placeholder='Enter Tag'
          onChange={event => this.setState({newTag: event.target.value})}
          />
        <button type="button" className="btn btn-default"
          onClick={() => {
            this.setTag()
            $.ajax({
              url: 'https://api.flickr.com/services/feeds/photos_public.gne',
              dataType: 'jsonp',
              data: { "tags": this.state.newTag, "format": "json" }
            });
          }}
          >
          Search!
        </button>
      </div>
  )}

}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
