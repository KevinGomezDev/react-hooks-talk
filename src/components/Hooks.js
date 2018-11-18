import React, { useState, useEffect } from 'react'
import Row from '../components/Row'
import Logo from '../components/Logo'
import MovieDetail from '../components/MovieDetail'
import '../App.css'

export default function Hooks(props) {
  const [ title, setTitle ] = useState('Peter Pan')
  const [ summary, setSummary ] = useState('Is a 1953 American animated fantasy adventure film produced by Walt Disney.')
  const [ rating, setRating ] = useState('4.2')

  function handleTitleChange (e) {
    setTitle(e.target.value)
  }

  function handleSummaryChange (e) {
    setSummary(e.target.value)
  }

  function handleRatingChange (e) {
    setRating(e.target.value)
  }

  useEffect(() => {
    document.title = title
  })

  return <React.Fragment>
    <section>
      <Logo />
      <Row label='Title'>
        <input 
        name='title' 
        value={title} 
        onChange={handleTitleChange} />
      </Row>
      <Row label='Summary'>
        <textarea 
        name='summary' 
        value={summary} 
        onChange={handleSummaryChange} />
      </Row>
      <Row label='Rating'>
        <input 
        name='rating' 
        value={rating} 
        onChange={handleRatingChange} />
      </Row>
    </section>
    <MovieDetail 
      title={title}
      summary={summary}
      rating={rating}
    />
  </React.Fragment>
}