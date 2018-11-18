import React, { Component } from 'react'
import Row from '../components/Row'
import Logo from '../components/Logo'
import MovieDetail from '../components/MovieDetail'
import '../App.css'

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Peter Pan',
      summary: 'Is a 1953 American animated fantasy adventure film produced by Walt Disney.',
      rating: '4.5',
      width: window.innerWidth,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSummaryChange = this.handleSummaryChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
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

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    document.title = this.state.title
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    document.title = this.state.title
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const { title, summary, rating } = this.state
    return <React.Fragment>
      <span>{this.state.width}</span>
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
    </React.Fragment>
  }
}

export default Classes