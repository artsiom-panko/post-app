import React from 'react';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({likedCount, postsCount}) => {
    return (
        <Header colored>
            <h1>Panko Artsiom</h1>
            <h2>{postsCount} записей, из них понравилось {likedCount}</h2>
        </Header>
    )
}

export default AppHeader;