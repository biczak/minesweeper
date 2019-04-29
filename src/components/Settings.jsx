import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  COLUMNS_BEGINNER,
  ROWS_BEGINNER,
  MINES_BEGINNER,
  COLUMNS_INTERMEDIATE,
  ROWS_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COLUMNS_EXPERT,
  ROWS_EXPERT,
  MINES_EXPERT
} from 'Constants/constants';

import Button from 'Components/Button';

const Settings = ({ onSelect }) => (
  <div className="options-level">
    <Button onClick={() => onSelect(COLUMNS_BEGINNER, ROWS_BEGINNER, MINES_BEGINNER, 'Beginner')} type="button">
      Beginner
    </Button>
    <Button
      onClick={() => onSelect(COLUMNS_INTERMEDIATE, ROWS_INTERMEDIATE, MINES_INTERMEDIATE, 'Intermediate')}
      type="button"
    >
      Intermediate
    </Button>
    <Button onClick={() => onSelect(COLUMNS_EXPERT, ROWS_EXPERT, MINES_EXPERT, 'Expert')} type="button">
      Expert
    </Button>
  </div>
);

Settings.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default Settings;
