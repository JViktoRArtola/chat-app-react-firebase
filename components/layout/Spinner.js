import React from 'react';
import styled, {keyframes} from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const Loader = styled.div`
  border: 0.7em solid rgba(0, 0, 0, 0.1);
  border-top: 0.6em solid #767676;
  border-radius: 50%;
  width: 10.28571429rem;
  height: 10.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`
const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: #1a1a1d;
}
`
const Spinner = () => {
    return (
        <Container>
            <Loader/>
        </Container>
    );
};

export default Spinner;
