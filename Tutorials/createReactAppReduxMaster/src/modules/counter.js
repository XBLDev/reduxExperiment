export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const INCREMENT_TIMER = 'counter/INCREMENT_TIMER'
export const TIMER_START = 'counter/TIMER_START'
export const STOP_TIMER = 'counter/TIMER_STOP'

// export const TIMER_TICK = 'counter/TIMER_TICK'

const initialState = {
  // timerFunction: null,
  count: 0,
  timer: 0,
  isIncrementing: false,
  isDecrementing: false,
  // timerIncrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }
    
    // case TIMER_START:
    //   console.log('TIMER_START ACTION CALLED!');
    //   return {
    //     ...state,
    //     timerFunction: currentTimer,        
    //     // timer: state.timer + 1,
    //   }
    case STOP_TIMER:
      console.log('STOP_TIMER ACTION CALLED');
      clearInterval(timerFunc);
      return state
      

    case INCREMENT_TIMER:
      console.log('INCREMENT_TIMER ACTION CALLED!');
      var currentTimer = -1;
      if(state.timer + 1 < 5)
      {
        currentTimer = state.timer + 1;
      }
      else
      {
        currentTimer = 0;
      }
      return {
        ...state,
        timer: currentTimer,        
        // timer: state.timer + 1,
      }

    // case TIMER_TICK:
    //   return {
    //     ...state,
    //     timer: state.timer + 1,
    //   }      


    default:
      return state
  }
}


var timerFunc = null;
// const start = () => (dispatch) => {
//   clearInterval(timer);
//   timer = setInterval(() => dispatch(tick()), 1000);
//   dispatch({ type: TIMER_START });
//   dispatch(tick())
// }
// const tick = () => { type: TIMER_TICK };

// setInterval(function() {
//   dispatch => {
//   console.log('increment timer')
//   dispatch({
//     type : INCREMENT_TIMER
//   })
// }
// }, 
// 1000 )


// setTimeout(() => {
//   dispatch({
//     type: INCREMENT
//   })
// }, 3000)

export const stopTimer = () => {
  return dispatch => 
  {
    dispatch({
      type: STOP_TIMER
    })
    // timerFunc = setInterval(() => {
    //   dispatch({
    //     type: INCREMENT_TIMER
    //   })
    // }, 1000)

    // return timerFunc;
    // return setInterval(() => {
    //   dispatch({
    //     type: INCREMENT_TIMER
    //   })
    // }, 3000)
  }
}

export const incrementTimer = () => {
  return dispatch => 
  {
    timerFunc = setInterval(() => {
      dispatch({
        type: INCREMENT_TIMER
      })
    }, 1000)

    return timerFunc;
    // return setInterval(() => {
    //   dispatch({
    //     type: INCREMENT_TIMER
    //   })
    // }, 3000)
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
