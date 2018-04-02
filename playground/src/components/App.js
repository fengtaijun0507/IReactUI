import React from 'react'
import PropTypes from 'prop-types'
import {
  Button
} from 'ireactui'
import '../assets/stylesheets/base.scss'

const App = ({
  name
}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button 
        className='test'
        style={{ width:'100px' }}
      > test</Button>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
