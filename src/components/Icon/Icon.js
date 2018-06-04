// Reference: https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
import * as React from 'react'
import iconPaths from 'components/Icon/Icon.selection.js' // the file exported from IcoMoon
import PropTypes from 'prop-types'

function getPath (iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName)

  if (icon) {
    return icon.icon.paths.join(' ')
  }

  console.warn(`icon ${iconName} does not exist.`)
  return ''
}

const Icon = props => (
  <svg viewBox="0 0 1024 1024" preserveAspectRatio="none">
    <path d={getPath(props.icon)} />
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Icon
