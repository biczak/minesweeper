import React from 'react';
import { Link } from 'react-router-dom';
import Pane from 'Components/Pane';
import Title from 'Components/Title';
import Button from 'Components/Button';

const App = props => {
  const clickHandler = () => {
    const { history } = props;
    history.push('/difficulty');
  };

  return (
    <Pane className="dark-background fullscreen">
      <Title className="light-text">MineSweeper</Title>
      <Link to="/difficulty">
        <Button onClick={clickHandler} className="button--menu">
          New Game
        </Button>
      </Link>
      <Button onClick={clickHandler} className="button--menu">
        Settings
      </Button>
    </Pane>
  );
};

export default App;
