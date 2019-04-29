import { cellStatus } from 'Constants/constants';

const checkNeighbors = (gameBoard, mines) => {
  const newGame = Object.assign({}, gameBoard);

  mines.forEach(mine => {
    const [col, row] = mine;

    // TOP
    if (
      typeof newGame[col - 1] !== 'undefined' &&
      typeof newGame[col - 1][row - 1] !== 'undefined' &&
      newGame[col - 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      newGame[col - 1][row - 1].warning += 1;
    }
    if (typeof newGame[col][row - 1] !== 'undefined' && newGame[col][row - 1].status !== cellStatus.CELL_MINE) {
      newGame[col][row - 1].warning += 1;
    }
    if (
      typeof newGame[col + 1] !== 'undefined' &&
      typeof newGame[col + 1][row - 1] !== 'undefined' &&
      newGame[col + 1][row - 1].status !== cellStatus.CELL_MINE
    ) {
      newGame[col + 1][row - 1].warning += 1;
    }

    // MIDDLE
    if (
      typeof newGame[col - 1] !== 'undefined' &&
      typeof newGame[col - 1][row] !== 'undefined' &&
      newGame[col - 1][row].status !== cellStatus.CELL_MINE
    ) {
      newGame[col - 1][row].warning += 1;
    }
    if (
      typeof newGame[col + 1] !== 'undefined' &&
      typeof newGame[col + 1][row] !== 'undefined' &&
      newGame[col + 1][row].status !== cellStatus.CELL_MINE
    ) {
      newGame[col + 1][row].warning += 1;
    }

    // BOTTOM
    if (
      typeof newGame[col - 1] !== 'undefined' &&
      typeof newGame[col - 1][row + 1] !== 'undefined' &&
      newGame[col - 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      newGame[col - 1][row + 1].warning += 1;
    }
    if (typeof newGame[col][row + 1] !== 'undefined' && newGame[col][row + 1].status !== cellStatus.CELL_MINE) {
      newGame[col][row + 1].warning += 1;
    }
    if (
      typeof newGame[col + 1] !== 'undefined' &&
      typeof newGame[col + 1][row + 1] !== 'undefined' &&
      newGame[col + 1][row + 1].status !== cellStatus.CELL_MINE
    ) {
      newGame[col + 1][row + 1].warning += 1;
    }
  });

  return newGame;
};

export default checkNeighbors;
