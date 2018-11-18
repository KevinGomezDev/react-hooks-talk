import React, { Component } from 'react'

import Row from '../components/Row'
import Logo from '../components/Logo'
import MovieDetail from '../components/MovieDetail'
import '../App.css'

class Classes extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Peter Pan',
      summary: 'Is a 1953 American animated fantasy adventure film produced by Walt Disney.',
      rating: '4.5'
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSummaryChange = this.handleSummaryChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleSummaryChange(e) {
    this.setState({ summary: e.target.value })
  }

  handleRatingChange(e) {
    this.setState({ rating: e.target.value })
  }

  componentWillMount () {
    document.title = this.state.title
  }

  componentDidUpdate () {
    document.title = this.state.title
  }

  render() {
    const { title, summary, rating } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <section>
          <Logo />
            <Row label='Title'>
              <input 
              name='title' 
              value={title} 
              onChange={this.handleTitleChange} />
            </Row>
            <Row label='Summary'>
              <textarea 
              name='summary' 
              value={summary} 
              onChange={this.handleSummaryChange} />
            </Row>
            <Row label='Rating'>
              <input 
              name='rating' 
              value={rating} 
              onChange={this.handleRatingChange} />
            </Row>
          </section>
          <MovieDetail {...this.state} />
        </header>
      </div>
    );
  }
}

export default Classes