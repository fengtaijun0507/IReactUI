/*
 * @Author: chfeng
 * @Date:   2018-03-19 15:21:42
 * @Last Modified by:   chfeng
 * @Last Modified time: 2018-03-19 15:23:10
 */
import styled from 'styled-components'

const Button = styled.button `
  background: #1FB6FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #009EEB;
  }
`

export default Button
