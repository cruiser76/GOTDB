import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage/errorMessge.js';
import CharacterPage from '../pages/characterPage/characterPage.js';
import BookPage from '../pages/bookPage/bookPage.js';
import HousePage from '../pages/housePage/housePage.js';
import GotService from './../../services/gotService.js';
import BooksItem from '../pages/booksItem/booksItem.js';
import CharacterItem from '../pages/characterItem/characterItem.js';

import './app.css';

class App extends Component {

    state = {
        isRandomCharShow: true,
        error: false
    }

    got = new GotService();

    componentDidCatch() {
        this.setState({error: true})
    }

    handleToggleBtn = () => {
        this.setState(({isRandomCharShow}) => {
            return {isRandomCharShow: !isRandomCharShow}
        });
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const randomChar = this.state.isRandomCharShow ? <RandomChar interval={15000} /> : ''

        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row className='mb-5'>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomChar}
                                <Button
                                    color='info'
                                    onClick={this.handleToggleBtn}
                                >
                                    Toggle random character
                                    </Button>
                            </Col>
    
                        </Row>
                        <Route 
                            exact
                            path='/' component={() => <h1 style={{color: 'cyan'}}>Welcome to GOT DB</h1>}
                        />
                        <Route
                            exact
                            path='/characters'
                            component={CharacterPage}
                        />
                        <Route 
                            path='/characters/:id'
                            render={({match, location, history}) => {
                                // console.log(match, location, history);
                                const {id} = match.params;
                                return <CharacterItem 
                                    characterID={id} 
                                />}
                            }
                        />
                        <Route
                            exact
                            path='/houses'
                            component={HousePage}
                        />
                        <Route
                            exact
                            path='/books'
                            component={BookPage}
                        />
                        <Route 
                            path='/books/:id'
                            render={({match, location, history}) => {
                                // console.log(match, location, history);
                                const {id} = match.params;
                                return <BooksItem 
                                    bookID={id} 
                                />}
                            }
                        />
                    </Container>
                </div>
            </Router>
        );
    }

};

export default App;
