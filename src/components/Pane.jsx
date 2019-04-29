import styled from 'styled-components';

const Pane = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};

  &#app-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Pane;
