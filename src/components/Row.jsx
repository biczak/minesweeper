import React from 'react';
import PropTypes from 'prop-types';
import Cell from 'Components/Cell';

const Row = ({ columns, row, gameBoard, leftClickHandler, rightClickHandler }) => (
  <div>
    {new Array(columns).fill(0).map((cur, column) => (
      <Cell
        key={`${row}-${column}`}
        gameBoard={gameBoard}
        row={row}
        column={column}
        leftClickHandler={leftClickHandler}
        rightClickHandler={rightClickHandler}
      />
    ))}
  </div>
);

Row.propTypes = {
  columns: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  gameBoard: PropTypes.instanceOf(Array).isRequired,
  leftClickHandler: PropTypes.func.isRequired,
  rightClickHandler: PropTypes.func.isRequired
};

export default Row;
