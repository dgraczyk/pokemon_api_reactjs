import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingIndicator() {
  return (
    <CircularProgress style={{margin: "100px"}} size={100} color="secondary" />
  );
}

export default LoadingIndicator
