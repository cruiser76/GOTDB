import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreator from '../../reducer/actions.js';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = (props) => {
    const onLinkClick = () => {
        props.setItem(null);
    };

    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">
                    Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link
                        to="/characters/"
                        onClick={onLinkClick}
                    >Characters</Link>
                </li>
                <li>
                    <Link
                        to="/houses/"
                        onClick={onLinkClick}
                    >Houses</Link>
                </li>
                <li>
                    <Link
                        to="/books/"
                        onClick={onLinkClick}
                    >Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

const mapDispatchToProps = (dispatch) => {
    const {setItem} = bindActionCreators(ActionCreator, dispatch);
    return {
        setItem: (item) => setItem(item),
    };
}

export default connect(() => ({}), mapDispatchToProps)(Header);
