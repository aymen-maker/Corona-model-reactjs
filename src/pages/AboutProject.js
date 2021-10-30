import React from "react";
import { aboutProjectData } from "../data/aboutProject";
import styled from "styled-components";
import Icon from "../imgs/ProjectImg";

const AboutProject = () => {
  return (
    <Wrapper>
      <Img>
        <Icon />
      </Img>

      <Text>
        <Title>{aboutProjectData.projectTitle}</Title>
        <Description>{aboutProjectData.description}</Description>
      </Text>
    </Wrapper>
  );
};

export default AboutProject;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  margin-left: 10px;
`;

const Img = styled.div``;

const Title = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 17px;
  color: #57ffa1;
`;
const Description = styled.div`
  text-align: justify;
`;
