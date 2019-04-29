import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Square from 'Components/Square';

import {
  leftClickCell as leftClickCellAction,
  rightClickCell as rightClickCellAction,
  newGame as newGameAction
} from 'Actions/gameActions';

import {
  cellStatus,
  COLUMNS_INTERMEDIATE,
  ROWS_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COLUMNS_EXPERT,
  ROWS_EXPERT,
  MINES_EXPERT
} from 'Constants/constants';

class Minesweeper extends PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log(`NEXT: ${nextProps}`);
    this.checkIfIamWinner(nextProps.gameBoard);
  }

  handleRightClick = (column, row) => {
    const { gameBoard, rightClickCell } = this.props;

    const isPressed = gameBoard[column][row].status === cellStatus.CELL_PRESSED;
    const isInitial = gameBoard[column][row].status === cellStatus.CELL_INITIAL;
    const isMine = gameBoard[column][row].status === cellStatus.CELL_MINE;
    const isFlag = gameBoard[column][row].status === cellStatus.CELL_FLAG;
    const isFlagMine = gameBoard[column][row].status === cellStatus.CELL_MINE_FLAG;
    const isQuestionMark = gameBoard[column][row].status === cellStatus.CELL_QUESTION_MARK;
    const isQuestionMarkMine = gameBoard[column][row].status === cellStatus.CELL_MINE_CELL_QUESTION_MARK;

    if (!isPressed) {
      if (isInitial) {
        rightClickCell(column, row, cellStatus.CELL_FLAG);
      }
      if (isMine) {
        rightClickCell(column, row, cellStatus.CELL_MINE_FLAG);
      }
      if (isFlag) {
        rightClickCell(column, row, cellStatus.CELL_QUESTION_MARK);
      }
      if (isFlagMine) {
        rightClickCell(column, row, cellStatus.CELL_MINE_CELL_QUESTION_MARK);
      }
      if (isQuestionMark) {
        rightClickCell(column, row, cellStatus.CELL_INITIAL);
      }
      if (isQuestionMarkMine) {
        rightClickCell(column, row, cellStatus.CELL_MINE);
      }
    }
  };

  handleLeftClick = (column, row) => {
    const { columns, rows, mines, difficulty, gameBoard, leftClickCell, newGame } = this.props;
    console.log(gameBoard[column][row]);
    const isInitial = gameBoard[column][row].status === cellStatus.CELL_INITIAL;
    const isMine = gameBoard[column][row].status === cellStatus.CELL_MINE;

    if (isInitial) {
      leftClickCell(column, row, cellStatus.CELL_PRESSED);
    }

    if (isMine) {
      alert('Game over');
      newGame(columns, rows, mines, difficulty);
    }
  };

  checkIfIamWinner = gameBoard => {
    const { rows, columns, difficulty, newGame, history } = this.props;

    const TOTAL_CELL = rows * columns;
    const arrayPressed = [];
    const arrayFlagMine = [];

    for (let column in gameBoard) {
      for (let key in gameBoard[column]) {
        if (gameBoard[column][key].status === cellStatus.CELL_PRESSED) {
          arrayPressed.push(gameBoard[column][key].status);
        }
        if (gameBoard[column][key].status === cellStatus.CELL_MINE_FLAG) {
          arrayFlagMine.push(gameBoard[column][key].status);
        }
      }
    }

    const isWinner = arrayPressed.length + arrayFlagMine.length === TOTAL_CELL;

    if (isWinner) {
      alert('You win');
      switch (difficulty) {
        case 'Beginner':
          newGame(COLUMN_INTERMEDIATE, ROW_INTERMEDIATE, MINES_INTERMEDIATE, 'Intermediate');
          break;
        case 'Intermediate':
          newGame(COLUMN_EXPERT, ROW_EXPERT, MINES_EXPERT, 'Expert');
          break;
        case 'Expert':
          history.push('/');
          break;
        default:
          history.push('/');
      }
    }
  };

  render() {
    const { rows, columns, gameBoard } = this.props;

    return (
      <Square
        gameBoard={gameBoard}
        rows={rows}
        columns={columns}
        leftClickHandler={this.handleLeftClick}
        rightClickHandler={this.handleRightClick}
      />
    );
  }
}

Minesweeper.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  mines: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  gameBoard: PropTypes.instanceOf(Array).isRequired,
  leftClickCell: PropTypes.func.isRequired,
  rightClickCell: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  leftClickCell: bindActionCreators(leftClickCellAction, dispatch),
  rightClickCell: bindActionCreators(rightClickCellAction, dispatch),
  newGame: bindActionCreators(newGameAction, dispatch)
});

const mapStateToProps = state => ({
  rows: state.gameBoard.rows,
  columns: state.gameBoard.columns,
  mines: state.gameBoard.mines,
  difficulty: state.gameBoard.difficulty,
  gameBoard: state.gameBoard.gameBoard
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Minesweeper));
