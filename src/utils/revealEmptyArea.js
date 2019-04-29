import { cellStatus } from 'Constants/constants';

const revealEmptyArea = (gameBoard, column, row, value) => {
  const newGameBoard = Object.assign({}, gameBoard);

  // TOP
  if (
    typeof newGameBoard[column - 1] !== 'undefined' &&
    typeof newGameBoard[column - 1][row - 1] !== 'undefined' &&
    newGameBoard[column - 1][row - 1].status !== value &&
    newGameBoard[column - 1][row - 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column - 1][row - 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column - 1][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column - 1][row - 1].status = value;
    if (newGameBoard[column - 1][row - 1].warning === 0) {
      revealEmptyArea(newGameBoard, column - 1, row - 1, value);
    }
  }

  if (
    typeof newGameBoard[column][row - 1] !== 'undefined' &&
    newGameBoard[column][row - 1].status !== value &&
    newGameBoard[column][row - 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column][row - 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column][row - 1].status = value;
    if (newGameBoard[column][row - 1].warning === 0) {
      revealEmptyArea(newGameBoard, column, row - 1, value);
    }
  }

  if (
    typeof newGameBoard[column + 1] !== 'undefined' &&
    typeof newGameBoard[column + 1][row - 1] !== 'undefined' &&
    newGameBoard[column + 1][row - 1].status !== value &&
    newGameBoard[column + 1][row - 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column + 1][row - 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column + 1][row - 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column + 1][row - 1].status = value;
    if (newGameBoard[column + 1][row - 1].warning === 0) {
      revealEmptyArea(newGameBoard, column + 1, row - 1, value);
    }
  }
  // MIDDLE
  if (
    typeof newGameBoard[column - 1] !== 'undefined' &&
    typeof newGameBoard[column - 1][row] !== 'undefined' &&
    newGameBoard[column - 1][row].status !== value &&
    newGameBoard[column - 1][row].status !== cellStatus.CELL_MINE &&
    newGameBoard[column - 1][row].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column - 1][row].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column - 1][row].status = value;
    if (newGameBoard[column - 1][row].warning === 0) {
      revealEmptyArea(newGameBoard, column - 1, row, value);
    }
  }

  if (
    typeof newGameBoard[column + 1] !== 'undefined' &&
    typeof newGameBoard[column + 1][row] !== 'undefined' &&
    newGameBoard[column + 1][row].status !== value &&
    newGameBoard[column + 1][row].status !== cellStatus.CELL_MINE &&
    newGameBoard[column + 1][row].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column + 1][row].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column + 1][row].status = value;
    if (newGameBoard[column + 1][row].warning === 0) {
      revealEmptyArea(newGameBoard, column + 1, row, value);
    }
  }
  // BOTTOM
  if (
    typeof newGameBoard[column - 1] !== 'undefined' &&
    typeof newGameBoard[column - 1][row + 1] !== 'undefined' &&
    newGameBoard[column - 1][row + 1].status !== value &&
    newGameBoard[column - 1][row + 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column - 1][row + 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column - 1][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column - 1][row + 1].status = value;
    if (newGameBoard[column - 1][row + 1].warning === 0) {
      revealEmptyArea(newGameBoard, column - 1, row + 1, value);
    }
  }

  if (
    typeof newGameBoard[column][row + 1] !== 'undefined' &&
    newGameBoard[column][row + 1].status !== value &&
    newGameBoard[column][row + 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column][row + 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column][row + 1].status = value;
    if (newGameBoard[column][row + 1].warning === 0) {
      revealEmptyArea(newGameBoard, column, row + 1, value);
    }
  }

  if (
    typeof newGameBoard[column + 1] !== 'undefined' &&
    typeof newGameBoard[column + 1][row + 1] !== 'undefined' &&
    newGameBoard[column + 1][row + 1].status !== value &&
    newGameBoard[column + 1][row + 1].status !== cellStatus.CELL_MINE &&
    newGameBoard[column + 1][row + 1].status !== cellStatus.CELL_FLAG &&
    newGameBoard[column + 1][row + 1].status !== cellStatus.CELL_MINE_FLAG
  ) {
    newGameBoard[column + 1][row + 1].status = value;
    if (newGameBoard[column + 1][row + 1].warning === 0) {
      revealEmptyArea(newGameBoard, column + 1, row + 1, value);
    }
  }
  return newGameBoard;
};

export default revealEmptyArea;
