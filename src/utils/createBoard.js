const createNewBoard = (ROW_NUMBER, COLUMNSNUMBER, defaultValue) =>
  Array.from(Array(ROW_NUMBER), () =>
    Array.from(Array(COLUMNSNUMBER), () =>
      Object(defaultValue) === defaultValue ? Object.assign({}, defaultValue) : defaultValue
    )
  );

export default createNewBoard;
