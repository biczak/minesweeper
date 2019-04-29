import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

import { cellStatus } from 'Constants/constants';

const StyledCell = styled.div`
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid black;
  background: ${props =>
    props.isPressed
      ? 'linear-gradient(135deg, #FFF7EC 0%, #9E9389 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #BDBDBD 100%)'};
  cursor: ${props => (props.isPressed ? 'default' : 'pointer')};
  color: black;
`;

const Cell = ({ row, column, gameBoard, leftClickHandler, rightClickHandler }) => {
  const isPressed = gameBoard[row][column].status === cellStatus.CELL_PRESSED;

  const isWarning = gameBoard[row][column].status === cellStatus.CELL_PRESSED && gameBoard[row][column].warning > 0;

  const isFlag =
    gameBoard[row][column].status === cellStatus.CELL_FLAG ||
    gameBoard[row][column].status === cellStatus.CELL_MINE_FLAG;

  const isQuestion =
    gameBoard[row][column].status === cellStatus.CELL_QUESTION_MARK ||
    gameBoard[row][column].status === cellStatus.CELL_MINE_CELL_QUESTION_MARK;

  return (
    <StyledCell
      isPressed={isPressed}
      onClick={() => leftClickHandler(row, column)}
      onContextMenu={() => rightClickHandler(row, column)}
    >
      {isWarning ? gameBoard[row][column].warning : ''}
      {isFlag ? ReactEmoji.emojify(':triangular_flag_on_post:') : ''}
      {isQuestion ? ReactEmoji.emojify(':question:') : ''}
    </StyledCell>
  );
};

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  gameBoard: PropTypes.instanceOf(Array).isRequired,
  leftClickHandler: PropTypes.func.isRequired,
  rightClickHandler: PropTypes.func.isRequired
};

export default Cell;
