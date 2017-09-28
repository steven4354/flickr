import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import $ from 'jquery-3.2.1.js'
import './styling.css'
import IDsearch from './components/id_search'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      tag: "",
      newTag: "",
    }
    console.log('tag', this.state.tag, 'newTag', this.state.newTag);
  }

  setTag(){
    this.setState({tag: this.state.newTag}, function () {console.log(this.state.tag)} )
  }

  render(){
    return(
      <div>
        <div>
          <input
            type='text'
            className='bottommargin'
            placeholder='Enter Tag'
            onChange={event => this.setState({newTag: event.target.value})}
            />
          <button type="button" className="btn btn-default bottommargin"
            onClick={() => {
              this.setTag()
              $.ajax({
                url: 'https://api.flickr.com/services/feeds/photos_public.gne',
                dataType: 'jsonp',
                data: { "tags": this.state.newTag, "format": "json" }
              });
            }}
            >
            Search by Tag!
          </button>
        </div>
      </div>
  )}

}

ReactDOM.render(
  <div>
    <App></App>
    <IDsearch />
  </div>
  ,
  document.getElementById('root')
)
