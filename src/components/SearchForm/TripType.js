import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { FormControl, RadioGroup } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { trip } from '../../shared/app-constants';
import { Subtitle1White } from '../Common/Typographies';

const TripType = props => {
  const { classes, selectedRadio, onChangeRadio } = props;
  let isOneWay = selectedRadio === 'one-way';
  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedRadio} onChange={onChangeRadio} row>
        <FormControlLabel
          value="round-trip"
          label={<Subtitle1White>{trip.roundTrip}</Subtitle1White>}
          control={<Radio checked={!isOneWay} classes={{ root: classes.root, checked: classes.checked }} />}
        />
        <FormControlLabel
          value="one-way"
          label={<Subtitle1White>{trip.oneWay}</Subtitle1White>}
          control={<Radio checked={isOneWay} classes={{ root: classes.root, checked: classes.checked }} />}
        />
      </RadioGroup>
    </FormControl>
  );
};

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    '&$checked': {
      color: theme.palette.common.white
    }
  },
  checked: {}
});

export default withStyles(styles)(TripType);
