import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

const GameOptions = ({ onSelect }) => (
  <div>
    <Button onClick={onSelect} type="button">
      Start
    </Button>
  </div>
);

GameOptions.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default GameOptions;
