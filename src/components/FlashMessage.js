import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomizedSnackbars(props) {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type: 'CLOSE_MESSAGE'})
  };
  const vertical = 'top'
  const horizontal = 'center'
  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{vertical, horizontal}} open={true} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default CustomizedSnackbars