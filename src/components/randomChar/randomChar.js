import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import GotService from './../../services/gotService.js';
import Spinner from '../spinner/spinner.js';
import ErrorMessage from '../errorMessage/errorMessge.js';
import './randomChar.css';

export default class RandomChar extends Component {

    componentDidMount() {
        this.updateChar();
        this.timerID = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.setState = () => {};
    }

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({error: true});
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    render() {
        const {char, loading, error} = this.state;
        
        let content = loading ? <Spinner /> : <View char={char} />
        if (error) {
            content = <ErrorMessage />;
        }

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
