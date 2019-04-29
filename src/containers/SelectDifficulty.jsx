import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newGame as newGameAction } from 'Actions/gameActions';
import Settings from 'Components/Settings';
import Title from 'Components/Title';
import Pane from 'Components/Pane';

class SelectDifficulty extends PureComponent {
  onSelect = (columns, rows, mines, difficulty) => {
    const { newGame, history } = this.props;
    newGame(columns, rows, mines, difficulty);
    console.log(history);
    history.push('/game');
  };

  render() {
    return (
      <Pane className="fullscreen dark-background">
        <Title>Minesweeper</Title>
        <Settings onSelect={this.onSelect} />
      </Pane>
    );
  }
}

SelectDifficulty.propTypes = {
  newGame: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    newGame: bindActionCreators(newGameAction, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SelectDifficulty);
