import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${(theme) => theme.bgLighter};
    height: 56px;

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    justify-content: flex-end;


`

const Search = styled.div`
`

const Input = styled.div`
`
const Button = styled.div`
padding: 5px 15px;
    background-color: transpernt;
    border: 1px solid #3ea6ff;
    color: black;
    border-radius: 3px;
    cursor: pointer
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search></Search>
                <Button><AccountCircleIcon /> SIGN IN</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar