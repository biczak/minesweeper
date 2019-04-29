import React from 'react';
import styled from 'styled-components';
import ReactEmoji from 'react-emoji';
import { cellStatus } from 'Constants/constants.js';

const StyledCell = styled.div`
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid black;
  background: ${props =>
    props.isPressed
      ? 'linear-gradient(135deg, rgb(255, 247, 236) 0%, rgb(158, 147, 137) 100%)'
      : 'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(189, 189, 189) 100%)'};
  cursor: ${props => (props.isPressed ? 'default' : 'pointer')};
  color: black;
`;

const Cell = ({ row, col, grid, handleLeftClick, handleRightClick }) => {
  const isPressed = grid[row][col].status === cellStatus.CELL_PRESSED;
  const isWarning = grid[row][col].status === cellStatus.CELL_PRESSED && grid[row][col].warning > 0;

  const isFlag = grid[row][col].status === cellStatus.CELL_FLAG || grid[row][col].status === cellStatus.CELL_MINE_FLAG;

  const isQuestion =
    grid[row][col].status === cellStatus.CELL_QUESTION_MARK ||
    grid[row][col].status === cellStatus.CELL_MINE_CELL_QUESTION_MARK;

  return (
    <StyledCell
      isPressed={isPressed}
      onClick={() => handleLeftClick(this, row, col)}
      onContextMenu={() => handleRightClick(this, row, col)}
    >
      {isWarning ? grid[row][col].warning : ''}
      {isFlag ? ReactEmoji.emojify(':triangular_flag_on_post:') : ''}
      {isQuestion ? ReactEmoji.emojify(':question:') : ''}
    </StyledCell>
  );
};
