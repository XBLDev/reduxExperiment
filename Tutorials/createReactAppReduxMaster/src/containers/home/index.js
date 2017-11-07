import React from 'react'
// import PropTypes from 'prop-types';


import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  incrementTimer,
  stopTimer
} from '../../modules/counter'

class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentWillMount()
  {
    this.props.incrementTimer();
  }  
  
  render() {
    return (
    <div>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>
        <p>Timer: {this.props.timer}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrement</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
        </p>

        <p>
          <button onClick={this.props.incrementTimer} >Increment Timer</button>
        </p>  

        {/* <p>
          <button onClick={props.startTimerFunc} >Start TimerFunc</button>
        </p>   */}

        <p>
          <button onClick={this.props.stopTimer} >Stop Timer</button>
        </p>  

        <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p>
    </div>
    
    )      
  
  }    
  

}

// const Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Count: {props.count}</p>
//     <p>Timer: {props.timer}</p>

//     <p>
//       <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
//     </p>

//     <p>
//       <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
//     </p>

//     <p>
//       <button onClick={props.incrementTimer} >Increment Timer</button>
//     </p>  

//     {/* <p>
//       <button onClick={props.startTimerFunc} >Start TimerFunc</button>
//     </p>   */}

//     <p>
//       <button onClick={props.stopTimer} >Stop Timer</button>
//     </p>  

//     <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
//   </div>
// )

const mapStateToProps = state => ({
  count: state.counter.count,
  timer: state.counter.timer,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  incrementTimer,
  stopTimer,  
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
