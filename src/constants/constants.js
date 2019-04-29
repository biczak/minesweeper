import createConstants from 'Utils/createConstants';

const actionTypes = createConstants(
  'EDIT_SETTINGS',
  'LEFT_CLICK_CELL',
  'RIGHT_CLICK_CELL',
  'RIGHT_CLICK_MINE',
  'NEW_GAME',
  'PLACE_MINES',
  'SET_MINE_QUANTITY'
);

const cellStatus = createConstants(
  'CELL_INITIAL',
  'CELL_PRESSED',
  'CELL_MINE',
  'CELL_FLAG',
  'CELL_MINE_FLAG',
  'CELL_QUESTION_MARK',
  'CELL_MINE_CELL_QUESTION_MARK'
);

const COLUMNS_BEGINNER = 8;
const ROWS_BEGINNER = 8;
const MINES_BEGINNER = 10;

const COLUMNS_INTERMEDIATE = 16;
const ROWS_INTERMEDIATE = 16;
const MINES_INTERMEDIATE = 40;

const COLUMNS_EXPERT = 16;
const ROWS_EXPERT = 16;
const MINES_EXPERT = 50;

export {
  actionTypes,
  cellStatus,
  COLUMNS_BEGINNER,
  ROWS_BEGINNER,
  MINES_BEGINNER,
  COLUMNS_INTERMEDIATE,
  ROWS_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COLUMNS_EXPERT,
  ROWS_EXPERT,
  MINES_EXPERT
};
