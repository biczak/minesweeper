import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from 'Components/Row';

const SquareContainer = styled.div`
  display: inherit;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
`;

const Square = ({ rows, columns, gameBoard, leftClickHandler, rightClickHandler }) => (
  <SquareContainer>
    {new Array(rows).fill(0).map((_cur, row) => (
      <Row
        key={`row-${row}`}
        gameBoard={gameBoard}
        columns={columns}
        row={row}
        leftClickHandler={leftClickHandler}
        rightClickHandler={rightClickHandler}
      />
    ))}
  </SquareContainer>
);

Square.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  gameBoard: PropTypes.instanceOf(Array).isRequired,
  leftClickHandler: PropTypes.func.isRequired,
  rightClickHandler: PropTypes.func.isRequired
};

export default Square;
