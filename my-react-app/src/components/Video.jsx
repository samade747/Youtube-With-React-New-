import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 24px;

`;

const VideoWrapper = styled.div`


`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 20px;
    color: ${({theme}) => theme.text}

`

const Content = styled.div`
    flex: 5;
`;

const Recommmendation = styled.div`
    flex: 2;
`;

const Channel = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

`
const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text}
`



const ChannelName = styled.span`
    font-weight: 500;
`

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 14px;

`


const Subscribe = styled.button`
    color: white;
    font-weight: 500;
    color: white;
    border: none;
    background-color: #cc1a00;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;


`


const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.div`
    color: ${({theme}) => theme.textSoft}


`
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme}) => theme.text}
`
const Button = styled.div`
    
`

const Hr = styled.hr`
   margin: 15px 0px;
   border: 0.5px solid ${({theme}) => theme.soft}
`



 
// 4419

const Video = () => {

    return <Container>
        <Content>
            <VideoWrapper>
                <iframe>
                    width="100%"
                    height="720"
                    src="https://www.youtube.com/embed/9bZkp7q19f0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                </iframe>
            </VideoWrapper>           
        <title>Test Video</title>
        <Details>
            <Info>65898,744 views • 3 days ago</Info>
            <Buttons>
                <button>
                 <ThumbUpOutlindeIcon /> 123
                 </button>
                <button>
                <ThumbDownOffAltOutlinedIcon /> Dislike
                </button>

                <button>
                <ReplyOutlinedIcon /> Share
                </button>

                <button>
                <ReplyOutlinedIcon /> Save
                </button>



            </Buttons> 
        </Details>  
        <Hr /> 
        <channel> 
            <channelInfo>
                <Image src="../img/avatar.png" />
             <ChannelName>samd</ChannelName>   
             <ChannelCounter>200K subscribers</ChannelCounter> 
             <Description>loreeum</Description>
            </channelInfo>
            <channelInfo>SUSBCRIBE</channelInfo>
            // 5142
        </channel>
        </Content>
        <Recommmendation>recommndation</Recommmendation>
    </Container>;
};

export default Video; 