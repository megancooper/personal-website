import React from 'react';
import styled from 'styled-components';

const Redirect = styled.div`
  display: none;
`;

export default () => {
  window.location.href = `${window.location.origin}/#/home`;
  return <Redirect />;
};
