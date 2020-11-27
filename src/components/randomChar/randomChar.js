import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../reducer/data/actions.js';

import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner.js';
import './randomChar.css';

class RandomChar extends Component {

    componentDidMount() {
        this.updateChar();
        this.timerID = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState = () => {};
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.props.loadRandomChar(id)
    }

    render() {
        const {randomChar} = this.props;
        
        let content = !randomChar ? <Spinner /> : <View char={randomChar} />
       
        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <Fragment>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </Fragment>
    )
}

RandomChar.defaultProps = {
    interval: 15000
};

RandomChar.propTypes = {
    interval: PropTypes.number.isRequired
};

const mapStateToProps = ({data: {randomChar}}) => {
    return {
        randomChar
    }
};

const mapDispatchToProps = (dispatch) => {
    const {loadRandomChar} = bindActionCreators(ActionCreator, dispatch);
    return {
        loadRandomChar: (id) => loadRandomChar(id),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomChar);
