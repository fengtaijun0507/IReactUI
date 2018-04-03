/*
 * @Author: chfeng
 * @Date:   2018-03-28 21:19:00
 * @Last Modified by: chfeng
 * @Last Modified time: 2018-04-03 10:05:42
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HsOption extends Component {
  constructor(props) { 
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onSelect(this.props.obj)
  }

  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.handleClick}
      >{ this.props.obj.val }</div>
    )
  }
}

HsOption.propTypes = {
  className: PropTypes.string.isRequired,
  obj: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default HsOption
