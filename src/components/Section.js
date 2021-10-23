import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

// values can also be fetched by receiving props object
function Section({ title, description, backgroundImage, leftButtonText, rightButtonText}) { 
    return (
        <Wrap bgImage={backgroundImage}>

            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>

            <Buttons>

                <Fade bottom>
                    <ButtonGroup>

                        <LeftButton>
                            { leftButtonText }
                        </LeftButton>

                        { rightButtonText &&
                            <RightButton>
                                { rightButtonText }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg"/>
            
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column; // switches col styles to vers
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};

`

const ItemText = styled.div`
    paddint-top: 15vh;
    text-align: center;
    margin-top: 80px;
`

const ButtonGroup = styled.div`
    display flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    } 
`

const LeftButton = styled.div`
    
    color: white;
    background-color: rgb(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`