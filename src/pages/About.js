import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
import { useStaticQuery, graphql } from "gatsby"
import { TitleComponent, StyledText } from "../components/shared/TextWrapper"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stacks
        }
      }
    }
  `)
  return (
    <>
    <TitleComponent>About</TitleComponent>
      <StyledText>About Me</StyledText>
      <TextWrapper>
        <Text>
        I have been working in IT as a web programmer at for over three years. I enjoy learning new platforms such as Microsoft PowerApps and Salesforce.
        I am currently deploying a Salesforce Project using Apex Triggers and Lightning Web Components
        </Text>
      </TextWrapper>
      <SkillWrapper>
        <h4>Current Dev Stack</h4>
        <Items>
          {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))}
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
