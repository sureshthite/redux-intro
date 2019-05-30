import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {changeState} from '../store/action/action';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            userName:''
        }
    }

    _changeData(){
        console.log('event called');
    }

    _changeState() {
        // console.log("shah");
        // changeState();
        this.props.changeStateToReducer(this.state.userName);
        this.setState({
            userName:''
        })
    }

    _changeUserInput(event) {
        // console.log(event.target.value);
        this.setState({
            userName:event.target.value
        })
   }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                {/* <button onClick={this._changeData.bind(this)}>Change</button> */}
                <button onClick={this._changeState.bind(this)}>Change State</button>
                <input type='text' value={this.state.userName} onChange={this._changeUserInput.bind(this)} />
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        userName: state.rootReducer.userName
    })
}

function mapDispatchToProps(dispatch) {
    return({
        changeStateToReducer: (updatedUserName) => {
            dispatch(changeState(updatedUserName))
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

