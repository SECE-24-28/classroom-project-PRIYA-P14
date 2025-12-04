import React from 'react';
import { TrustedByStyle } from './trusted-by-style';
const TrustedByComponent = () => {
  return (
    <TrustedByStyle>
        <h1>Trusted By</h1>
      <div className="parent">
        </div>
    </TrustedByStyle>
  );
}

export default TrustedByComponent;