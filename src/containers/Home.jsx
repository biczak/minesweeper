import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pane from 'Components/Pane';
import Title from 'Components/Title';
import Minesweeper from 'Containers/Minesweeper';

class Home extends PureComponent {
  onSelect() {
    const { history } = this.props;
    history.push('/config');
  }

  render() {
    return (
      <Pane className="fullscreen dark-background">
        <Title>Minesweeper</Title>
        <Minesweeper />
      </Pane>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
