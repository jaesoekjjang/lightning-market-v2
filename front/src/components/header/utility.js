import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkTagStyle } from '../../pages/main';
import { POPUP } from '../../reducer/loginPopup';

const StyledUtility = styled.ul`
    list-style: none;
    padding: 0;
`;

const UtilityList = styled.li`
    float:left;
    margin-left: 30px;
    position: relative;
`
const Button = styled.button`
    border:none;
    font-size:1rem;
`

const Utility = () => {
    const dispatch = useDispatch();

    const onClickLogin = () => {
        dispatch({
            type: POPUP,
        });
    }
    return <React.Fragment>
        <StyledUtility>
            <LinkTagStyle />
            <UtilityList className="utilityAfter">
                <Link to='/sell/register'>판매하기</Link>
            </UtilityList>
            <UtilityList className="utilityAfter">
                <Link to='/myshop/product'>내상점</Link>
            </UtilityList>
            <UtilityList><Button>벼락톡</Button></UtilityList>
            <UtilityList><Button onClick={onClickLogin}>로그인</Button></UtilityList>
        </StyledUtility>
    </React.Fragment >
}

export default Utility;