import { actionTypes } from 'Constants/constants';

const leftClickCell = (column, row, value) => ({
  type: actionTypes.LEFT_CLICK_CELL,
  column,
  row,
  value
});

const rightClickCell = (column, row, value) => ({
  type: actionTypes.RIGHT_CLICK_CELL,
  column,
  row,
  value
});

const newGame = (columns, rows, mines, difficulty) => ({
  type: actionTypes.NEW_GAME,
  columns,
  rows,
  mines,
  difficulty
});

export { newGame, leftClickCell, rightClickCell };
