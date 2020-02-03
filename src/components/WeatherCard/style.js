/** @jsx jsx */
import { jsx } from '@emotion/core'

export const Container = props => (
  <div
    css={{
      'background': 'linear-gradient(#e66465, #9198e5)',
      'width': '200px',
      'height': '240px',
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      'align-items': 'center',
      'border-radius': '16px' 
    }}
    {...props} // <- props contains the `className` prop
  >{props.children}</div> 
)

export const Country = props => (
  <div
    css={{
      'font-family': 'sans-serif',
      'font-size': '1.1rem' 
    }}
    {...props} // <- props contains the `className` prop
  >Aus</div> 
)

export const City = props => (
  <div
    css={{
      fontFamily: 'sans-serif',
      fontSize: '1.6em'
    }}
    {...props} // <- props contains the `className` prop
  >Sydney</div> 
)

export const Location = props => (
  render(
    <div>
      <City></City>
      <Country />
    </div>
  )
)


export const Temp = props => (
    <h1
      css={{
        margin: 0,
        fontSize: 16,
        lineHeight: '1.5',
        fontFamily: 'Sans-Serif',
        color: 'red'
      }}
      {...props} // <- props contains the `className` prop
    >Température en °C</h1> 
  )

  export const Condition = props => (
    <p
      css={{
        margin: 0,
        fontSize: 16,
        lineHeight: '1.5',
        fontFamily: 'Sans-Serif',
        color: 'red'
      }}
      {...props} // <- props contains the `className` prop
    >Condition en °C</p> 
  )

  export const Icon = props => (
    <img
      css={{
        width: "100px",
        height: "100px"
      }}
      {...props} // <- props contains the `className` prop
    /> 
  )
 
 