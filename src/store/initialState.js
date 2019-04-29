import { cellStatus, ROW_BEGINNER, COL_BEGINNER, MINES_BEGINNER } from 'Constants/constants';

import locateMines from 'Utils/locateMines';
import createBoard from 'Utils/createBoard';
import placeMines from 'Utils/placeMines';
import fillWarningNumbers from 'Utils/fill-warning-numbers';

const initialState = () => {
  const mines = locateMines(MINES_BEGINNER, ROW_BEGINNER);

  const initialGrid = createBoard(ROW_BEGINNER, COL_BEGINNER, {
    warning: 0,
    status: cellStatus.CELL_INITIAL
  });

  const gridWithMines = placeMines(initialGrid, mines);

  const gridWithWarningNumbers = fillWarningNumbers(gridWithMines, mines);

  return {
    grid: {
      grid: gridWithWarningNumbers,
      rows: ROW_BEGINNER,
      cols: COL_BEGINNER,
      mines: MINES_BEGINNER,
      level: 'Beginner',
      date: Date.now()
    }
  };
};

export default initialState;
