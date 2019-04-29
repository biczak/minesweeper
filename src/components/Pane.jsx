import styled from 'styled-components';

const Pane = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};

  &.fullscreen {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &.dark-background {
    background: rgb(0, 45, 114);
  }
`;

export default Pane;
