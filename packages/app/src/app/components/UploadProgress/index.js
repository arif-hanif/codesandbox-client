import React from 'react';

import {
  Container,
  DeployAnimationContainer,
  StyledLocalLogo,
  StyledCube,
  StyledLogo,
  DeployText,
  Result,
} from './elements';

function Progress({ message, result }) {
  return (
    <Container>
      {result ? (
        <Result>{result}</Result>
      ) : (
        <div>
          <DeployAnimationContainer deploying>
            <StyledLocalLogo />
            {[0, 1, 2, 3].map(i => (
              <StyledCube key={i} i={i} size={20} />
            ))}
            <StyledLogo width={70} height={70} />
          </DeployAnimationContainer>
          <DeployText>{message}</DeployText>
        </div>
      )}
    </Container>
  );
}

export default Progress;
