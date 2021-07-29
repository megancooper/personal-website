import React from 'react';

interface Props {
  children: React.ReactNode;
  href?: string;
  customStyle?: any;
}

const Card = ({children, href, customStyle}: Props) => (
  <a className="card" href={href} target="_blank" style={customStyle} rel="noreferrer">
    {children}
  </a>
);

Card.defaultProps = {
  customStyle: {},
  href: '#',
};

export default Card;
