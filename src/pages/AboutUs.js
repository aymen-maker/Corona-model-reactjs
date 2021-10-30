import React from "react";
import styled from "styled-components";
import { aboutUsData } from "../data/aboutUs";
import Profile from "../components/Profile";

const AboutUs = () => {
  return (
    <Wrapper>
      {aboutUsData.profiles.map(
        ({ student, description, githubUrl, linkedinUrl, img }) => (
          <Profile
            img={img}
            student={student}
            description={description}
            githubUrl={githubUrl}
            linkedinUrl={linkedinUrl}
          />
        )
      )}
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
