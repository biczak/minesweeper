import { cellStatus } from '../constants';

const placeMines = (grid, mines) => {
  const newGrid = Object.assign({}, grid);

  mines.forEach(mine => {
    const [col, row] = mine;
    newGrid[col][row].status = cellStatus.CELL_MINE;
  });

  return newGrid;
};

export default placeMines;
