import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  border: 1px solid #fff;
  padding: 25px 12px 18px;
  background: #fff;
`
const Title = styled.h2`
  color: #2d2d2d;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
    font-family: Helvetica, Arial, sans-serif;
  }
`

const Description = styled.p`
  color: #2d2d2d;
  font-weight: 300;
  font-family:Helvetica, Arial, sans-serif;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const StyledPhoto = styled.img`
  width: 100%;
  height: 40vh;
  max-height: 40vh;
  object-fit: cover;
  border: 1px solid #fff;
`

const StyledLink = styled.a`
font-size:1.5em;
font-family: Helvetica;
font-weight:bold;
text-decoration: none;
width: 100%;
max-height:10vh;
padding:2%;
border-radius:10px;
background-color: #6c63ff;
color: white;
height: 30vh;
max-height: 10vh;

@media (max-width: 500px) {
  font-size: 1rem;
  font-family: Helvetica, Arial, sans-serif;
}

`


const Card = ({
  title,
  description,
  photo,
  linktosite,
  siteName
}) => (
  <StyledContainer>
    <StyledPhoto src={photo} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <StyledLink href={linktosite} target="_blank">{siteName}</StyledLink>
  </StyledContainer>
)
export default Card