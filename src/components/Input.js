import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

import { Slider, InputNumber, Row, Col } from "antd";
const Input = ({
  max,
  min,
  noPrev,
  quest,
  type,
  onChange = (f) => f,
  decrement = (f) => f,
  increment = (f) => f,
  submitForm = (f) => f,
  value,
}) => {
  switch (type) {
    case "int":
      return (
        <Wrapper>
          <h3>{quest}</h3>
          <InputNumber min={0} value={value} onChange={onChange} />
          <Pagination
            noPrev={noPrev}
            increment={increment}
            decrement={decrement}
            submitForm={submitForm}
          />
        </Wrapper>
      );

    case "slider":
      return (
        <Wrapper>
          <h3>{quest}</h3>

          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={20}
                onChange={(e) => onChange(e)}
                value={value}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={min}
                max={max}
                value={0}
                onChange={(e) => onChange(e)}
              />
            </Col>
          </Row>
          <Pagination
            noPrev={noPrev}
            increment={increment}
            decrement={decrement}
            submitForm={submitForm}
          />
        </Wrapper>
      );

    case "controled-int":
      return (
        <Wrapper>
          <h3>{quest}</h3>
          <InputNumber
            min={1}
            max={20}
            value={value}
            onChange={(e) => onChange(e)}
          />
          <Pagination
            noPrev={noPrev}
            increment={increment}
            decrement={decrement}
            submitForm={submitForm}
          />
        </Wrapper>
      );
    default:
      return null;
  }
};

export default Input;
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
