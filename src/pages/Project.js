import React from "react"
import styled from "styled-components"
import Card from "../components/shared/Card"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, StyledText } from "../components/shared/TextWrapper"

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Project = () => {
  return (
    <StyledRoot>
      <TitleComponent>Project</TitleComponent>
      <StyledText>Some of my work</StyledText>
      <StyledContainer>
        <Card
          photo={require("../images/therapy.svg")}
          title="Online Payment Page"
          description="I created an online page, so that clients can pay for provided services at Ohel"
          linktosite = "https://www.ohelfamily.org/pay"
          siteName = 'View Project Page'
        />
        <Card
          photo={require("../images/thinking.png")}
          title="Online Workbook"
          description="Ohel presented an online workbook for schools during Covid as an activity."
          linktosite = "https://www.ohelfamily.org/workbook"
          siteName = 'View Project Page'
        />
      </StyledContainer>
    </StyledRoot>
  )
}
export default Project
