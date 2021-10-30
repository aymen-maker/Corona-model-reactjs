import React from "react";
import Pagination from "./Pagination";
import styled from "styled-components";
import { Radio, Space } from "antd";

const YesOrNo = ({
  noPrev,
  quest,
  onChange = (f) => f,
  decrement = (f) => f,
  increment = (f) => f,
  submitForm = (f) => f,
  value,
  display,
}) => {
  return (
    <Wrapper>
      <h3>{quest}</h3>
      <Radio.Group onChange={(e) => onChange(e.target.value)} value={value}>
        <Space direction="vertical">
          <Radio style={{ color: "white" }} value={0}>
            Yes
          </Radio>
          <Radio style={{ color: "white" }} value={1}>
            No
          </Radio>
        </Space>
      </Radio.Group>
      <Pagination
        noPrev={noPrev}
        increment={increment}
        decrement={decrement}
        submitForm={submitForm}
        display={display}
      />
    </Wrapper>
  );
};

export default YesOrNo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  height: 200px;
  position: relative;

  h3 {
    color: white;
  }
`;
