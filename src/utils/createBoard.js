const createNewBoard = (ROW_NUMBER, COLS_NUMBER, defaultValue) =>
  Array.from(Array(ROW_NUMBER), () =>
    Array.from(Array(COLS_NUMBER), () =>
      Object(defaultValue) === defaultValue ? Object.assign({}, defaultValue) : defaultValue
    )
  );

export default createNewBoard;
