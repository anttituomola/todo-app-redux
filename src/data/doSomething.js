const timeout = () => {
    return (dispatch, getState) => {
      setTimeout(() => {
        dispatch({
          type: 'BLAH'
        })
      }, 5000)
    }
  }

  export default timeout;