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

`
const Image = styled.img`

`

const ChannelName = styled.span`

`

const ChannelCounter = styled.span`

`

const Description = styled.p`

`


const Subscribe = styled.button`


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
                <button> <ThumbUpOutlindeIcon />    </button>
                <button>                            </button>
            </Buttons> 
        </Details>  
        <Hr /> 
        <channel> 
            <channelInfo>   </channelInfo>
            <channelInfo>SUSBCRIBE</channelInfo>
        </channel>
        </Content>
        <Recommmendation>recommndation</Recommmendation>
    </Container>;
};

export default Video;