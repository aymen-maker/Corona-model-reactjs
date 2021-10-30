import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdDescription } from "react-icons/md";

const Profile = ({ img, description, student, linkedinUrl, githubUrl }) => {
  return (
    <Wrapper>
      <Img img={img} />

      <Sec1>
        <Sec3>
          <Value className="secValue">
            <a href={githubUrl}>
              <FaGithub className="icon" size={18} />
            </a>

            <a href={linkedinUrl}>
              <FaLinkedin className="icon" size={18} />
            </a>
          </Value>
        </Sec3>
        <Attribute>
          <IoPersonCircle className="icon secValue" size={18} />| Student:
        </Attribute>
        <Value className="secValue">{student}</Value>
      </Sec1>
      <Sec2>
        <Attribute>
          <MdDescription className="icon" size={18} />| Description:
        </Attribute>
        <Value className="secValue">{description}</Value>
      </Sec2>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.div`
  padding-top: 10px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
`;
const Img = styled.div`
  height: 150px;
  width: 150px;
  background-color: white;
  background-image: ${({ img }) => `url(${img})`};
  border-radius: 100%;
  background-size: contain;
`;

const Sec1 = styled.div`
  width: 100%;
  margin-bottom: 5px;
  margin-top: 15px;
  display: flex;
  padding-top: 10px;
  position: relative;
  .secValue {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
const Sec2 = styled.div`
  width: 100%;
  margin-bottom: 5px;
  text-align: justify;
`;
const Sec3 = styled.div`
  border-top: solid 3px #57ffa1;

  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  .secValue {
    background-color: #57ffa1;
    padding: 2px 8px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .icon {
    margin: 0 5px;
    color: #0a1318;
    &:hover {
      color: white;
    }
  }
`;

const Attribute = styled.div`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  color: #57ffa1;
  margin-right: 5px;
  line-height: 2px;

  .icon {
    margin-right: 5px;
  }
`;
const Value = styled.div``;
