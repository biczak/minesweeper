import { cellStatus, ROWS_BEGINNER, COLUMNS_BEGINNER, MINES_BEGINNER } from 'Constants/constants';

import locateMines from 'Utils/locateMines';
import createBoard from 'Utils/createBoard';
import placeMines from 'Utils/placeMines';
import checkNeighbors from 'Utils/checkNeighbors';

const initialState = () => {
  const mines = locateMines(MINES_BEGINNER, ROWS_BEGINNER);

  const initialGameBoard = createBoard(ROWS_BEGINNER, COLUMNS_BEGINNER, {
    warning: 0,
    status: cellStatus.CELL_INITIAL
  });

  const gameBoardWithMines = placeMines(initialGameBoard, mines);

  const gameBoard = checkNeighbors(gameBoardWithMines, mines);

  return {
    gameBoard: {
      gameBoard,
      rows: ROWS_BEGINNER,
      cols: COLUMNS_BEGINNER,
      mines: MINES_BEGINNER,
      difficulty: 'Beginner',
      date: Date.now()
    }
  };
};

export default initialState;
