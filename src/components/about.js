import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {changeState} from '../store/action/action';

class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:''
        }
    }

    render() {
        return (
            <div>
                <h1>Hello About {this.props.userName}</h1>
                <Link to='/'>Go to Home</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(About);


// export default About;
