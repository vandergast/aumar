import React from 'react'
import styles from './App.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'DAN'
    }
  }
  render () {
    return (
      <div className={styles.app}>
        <h1>HELLO</h1>
      </div>
    )
  }
}

export default App
