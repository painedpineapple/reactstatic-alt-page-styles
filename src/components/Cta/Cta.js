import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'

const Div = styled.div`
  background: ${props => props.gradient},
  url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  padding: 85px 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.minHeight};
`

const Cta = ({ image, link, label, minHeight, gradient, buttonSize }) => (
  <Div bg={image} minHeight={minHeight} gradient={gradient}>
    <div>
      <Button type="primary" size={buttonSize} href={link}>{label}</Button>
    </div>
  </Div>
)

Cta.propTypes = {
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  minHeight: PropTypes.string,
  buttonSize: PropTypes.string,
}

Cta.defaultProps = {
  minHeight: '0',
  buttonSize: 'md',
  gradient: 'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0))',
}

export default Cta
