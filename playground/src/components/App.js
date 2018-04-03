import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  HsOption,
  HsSelect
} from 'ireactui'
import '../assets/stylesheets/base.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resource: [{ val: '123', keyVal: 'a' },
        { val: '456', keyVal: 'b' },
        { val: '789', keyVal: 'c'  }],
      curObj: {
        val: '789',
        keyVal: 'c'
      },
      resourcet: [
        { val: '1234', keyVal: 'd' },
        { val: '4567', keyVal: 'e' },
        { val: '6789', keyVal: 'f' },
      ],
      curObjT: {
        val: '1234',
        keyVal: 'd'       
      }
    }
    this.onHandleSelect = this.onHandleSelect.bind(this)
    this.onHandleSelectT = this.onHandleSelectT.bind(this)
  }

  onHandleSelect(obj) { 
    this.setState(() => {
      return { curObj: Object.assign({}, obj) }
    })
  }
  
  onHandleSelectT(obj) {
    this.setState(() => {
      return { curObjT: Object.assign({}, obj) }
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <br />
        <Button
          className='test'
          style={{ width: '100px' }}
        > test</Button>
        <br />
        <br />
        <HsSelect 
          className={'hs-select-wrapper'}
          curOption={this.state.curObj}
          data={this.state.resource}
          handleSelect={this.onHandleSelect}
        >
          {(index, value, onSelect) => <HsOption 
            className={'hs-select-option selecteDiv'}
            key={index}
            obj={value}
            onSelect={onSelect}>
            this is item {index} in the list
          </HsOption>}  
        </HsSelect>
        <br />
        <br />

        <HsSelect
          className={'hs-select-wrapper'}
          curOption={this.state.curObjT}
          data={this.state.resourcet}
          handleSelect={this.onHandleSelectT}
        >
          {(index, value, onSelect) => <HsOption
            className={'hs-select-option selecteDiv'}
            key={index}
            obj={value}
            onSelect={onSelect}>
            this is item {index} in the list
          </HsOption>}
        </HsSelect>
      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string,
}

export default App;
