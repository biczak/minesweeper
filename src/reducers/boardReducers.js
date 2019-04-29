import isEmpty from 'lodash.isempty';
import cloneDeep from 'lodash.clonedeep';

import { actionTypes, cellStatus } from 'Constants/constants';

import locateMines from 'Utils/locateMines';
import createBoard from 'Utils/createBoard';
import placeMines from 'Utils/placeMines';
import checkNeighbors from 'Utils/checkNeighbors';
import revealEmptyArea from 'Utils/revealEmptyArea';

const gameBoard = (state = [], action) => {
  if (isEmpty(state)) return state;

  let previousState = cloneDeep(state.gameBoard);

  switch (action.type) {
    case actionTypes.LEFT_CLICK_CELL: {
      previousState[action.column][action.row].status = action.value;
      previousState = revealEmptyArea(previousState, action.column, action.row, action.value);
      return Object.assign({}, state, {
        gameBoard: previousState
      });
    }

    case actionTypes.RIGHT_CLICK_CELL: {
      previousState[action.column][action.row].status = action.value;
      return Object.assign({}, state, {
        gameBoard: previousState
      });
    }

    case actionTypes.NEW_GAME: {
      const mines = locateMines(action.mines, action.rows);

      const initialBoard = createBoard(action.rows, action.columns, {
        warning: 0,
        status: cellStatus.CELL_INITIAL
      });

      const gameBoardWithMines = placeMines(initialBoard, mines);

      const gameBoardWithWarningNumbers = checkNeighbors(gameBoardWithMines, mines);
      console.log(JSON.stringify(gameBoardWithWarningNumbers));
      const finalGameBoard = [];

      Object.entries(gameBoardWithWarningNumbers).forEach(entry => finalGameBoard.push(entry[1]));

      return Object.assign(
        {},
        {
          gameBoard: finalGameBoard,
          columns: action.columns,
          rows: action.rows,
          mines: action.mines,
          difficulty: action.difficulty,
          date: Date.now()
        }
      );
    }

    default: {
      return state;
    }
  }
};

export default gameBoard;
