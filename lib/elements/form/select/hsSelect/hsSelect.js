/*
 * @Author: chfeng
 * @Date:   2018-03-28 21:19:00
 * @Last Modified by: chfeng
 * @Last Modified time: 2018-04-03 21:11:17
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HsSelect.scss'
import uuidv1 from 'uuid/v1'
import EventBus from './../../../../common/EventBus'
import { EVENT_CTRL_SELECT_CLOSE } from './../../../../common/constant'

class HsSelect extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: '', // 渲染对象数组
      curOption: '', // 当前选项
      isOpen: false,
      id: uuidv1() // 唯一标示
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleCtrlOptionsMenu = this.handleCtrlOptionsMenu.bind(this)
    this.handleCloseMenu = this.handleClose.bind(this) 
  }
  
  componentWillMount() {
    this.initData(this.props)
    EventBus.on(EVENT_CTRL_SELECT_CLOSE, (id) => {
      if (id !== this.state.id) {
        this.handleClose()
      }
    })
  }
  
  componentDidMount() {
    // 必须在此生命周期中注册
    // 否则事件中的阻止冒泡不生效
    document.addEventListener('click', this.handleCloseMenu) 
  }

  componentWillReceiveProps(newProps) {
    this.initData(newProps)
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.handleCloseMenu)
    this.setState = (state, callback) => {
      return
    }
    EventBus.removeListener(EVENT_CTRL_SELECT_CLOSE)
  }

  chooseOption(obj) {
    this.setState((state) => {
      return {
        curOption: Object.assign({}, obj)
      }
    })
  }
  
  handleCtrlOptionsMenu(e) {
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    EventBus.emit(EVENT_CTRL_SELECT_CLOSE, this.state.id)
    this.setState((state) => {
      return {
        isOpen: !state.isOpen
      }
    })
  }
  
  handleClick(obj) {
    this.chooseOption(obj)
    let { keyVal, val } = obj 
    this.props.handleSelect({ keyVal, val })
  }
  
  handleClose() {
    this.setState({ isOpen: false })
  }
  
  initData(props) {
    if (props.data.length) {
      this.setState(() => {
        return {
          data: props.data.concat([]),
          curOption: Object.assign({}, props.curOption)
        }
      })

    }
  }

  repeat() {
    return this.state.data.length && this.state.data.map((obj, index) => {
      return (
        this.props.children(index, obj, this.handleClick)
      )
    })
  }

  render() {
    return (
      <div className={`${this.props.className} selecteDiv ${this.state.id}`}>
        <div 
          className={'hs-select-val selecteDiv'}
          onClick={this.handleCtrlOptionsMenu}>
          {this.state.curOption.val}
        </div>
        <div
          className='hs-select-option-container'
          style={this.state.isOpen ? { 'display':'block' } : {}}>
          {this.repeat()}
        </div>
      </div>
    )
  }
}

HsSelect.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default HsSelect
