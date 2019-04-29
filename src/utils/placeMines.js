import { cellStatus } from 'Constants/constants';

const placeMines = (gameBoard, mines) => {
  const newGame = Object.assign({}, gameBoard);

  mines.forEach(mine => {
    const [col, row] = mine;
    newGame[col][row].status = cellStatus.CELL_MINE;
  });

  return newGame;
};

export default placeMines;
