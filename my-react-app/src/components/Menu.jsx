import React, { useState } from "react";
import styled from "styled-components";
import logoimg from "../img/logoimg.jpg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";



const Container = styled.div`
flex:2;
background-color: ${(theme) => theme.bgLighter};
height: 100%;
color: ${(theme) => theme.text};
font-size: 14px;
position: sticky;
top: 0;

` ;

const Wrapper = styled.div`
    padding: 10px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 30px;    
`;

const Img = styled.img`
    width: 99px;
    height: 50px;
`;

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5px;
cursor: pointer;
padding: 11.5px 0px;
`;

const Hr = styled.div`
    margin: 15px 0px;
    border: 0.5px solid ${(theme) => theme.soft};
`;

const Login = styled.div``
const Button = styled.button`
    padding: 5px 15px;
    background-color: transpernt;
    border: 1px solid #3ea6ff;
    color: black;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`



const Menu = ({ darkMode, setDarkMode }) => {
    return(
    <Container>
    <Wrapper>
    <Link to="/"  style={{ textDecoration: "none", color: "inherit"}}>        
        <Logo>
           <Img src={logoimg} width={80} alt="logo" />                
        </Logo>
    </Link>
        <Item>
        <div>    
        <HomeIcon />
         Home
        </div>
        <div><ExploreIcon /> Explore</div>                
        <div><SubscriptionsIcon /> Subscription</div>        
        <Hr />
        <div><LibraryAddIcon /> Library</div>                   
        <div><HistoryIcon />History</div>
        <Hr />
        <Login>
        Sign in to like video, comments and subscribe.
        <Hr />        
        <Button><AccountCircleIcon /> SIGN IN</Button>
        <Hr />
        </Login>
        <Title>Youtube Best Videos</Title>
        <Hr />
        
        <div><LibraryMusicIcon /> Music</div>

        <div><SportsTennisIcon /> Sports</div>

        <div><SportsEsportsIcon /> Gaming</div>

        <div><NewspaperIcon /> Newspaper</div>

        <div><LiveTvIcon /> Live</div>

        <div><SettingsIcon /> Settings</div>

        <div><FlagIcon /> Report</div>

        <div><HelpIcon /> Help</div>

        <div onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon />
        {darkMode ? "Light" : "Dark"} Mode
        </div>
        </Item>
    </Wrapper>
    </Container>
    
    )
}

export default Menu