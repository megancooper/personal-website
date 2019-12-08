import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from '../../assets/icons.json';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

const Icon = ({ icon,...props }) => (
  <svg
    height='22'
    viewBox='0 0 1024 1024'
    width='22'
    {...props}>
    <path d={getPath(icon)}></path>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
