import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }
  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }
  onSubmitForm(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmitForm(e)} className="input-group">
          <input
            onChange={e => this.onInputChange(e)}
            placeholder="Search for city"
            className="form-control"
            value={this.state.term} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

//beacuse of dealing with states by ourselves we dont need to add mapStateToProps method here
export default connect(null, mapDispatchToProps)(SearchBar)
