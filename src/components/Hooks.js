import React, { useState, useEffect } from 'react'
import Row from '../components/Row'
import Logo from '../components/Logo'
import MovieDetail from '../components/MovieDetail'
import '../App.css'

export default function Hooks(props) {
  const title = useFormInput('Peter Pan')
  const summary = useFormInput('Is a 1953 American animated fantasy adventure film produced by Walt Disney.')
  const rating = useFormInput('4.2')
  const width = useWindowWidth()

  useEffect(() => {
    document.title = title.value
  })

  return <React.Fragment>
    <span>{width}</span>
    <section>
      <Logo />
      <Row label='Title'>
        <input {...title} />
      </Row>
      <Row label='Summary'>
        <textarea {...summary} />
      </Row>
      <Row label='Rating'>
        <input {...rating} />
      </Row>
    </section>
    <MovieDetail 
      title={title.value}
      summary={summary.value}
      rating={rating.value}
    />
  </React.Fragment>
}

function useWindowWidth() {
  const [ width, setWidth ] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  
  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}