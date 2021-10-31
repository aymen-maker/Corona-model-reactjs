import React, { useState } from "react";
import Img from "../imgs/HomeImg";
import styled from "styled-components";
import { homeData } from "../data/home";
import YesOrNo from "../components/YesOrNo";
import Input from "../components/Input";
import axios from "axios";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import PropagateLoader from "react-spinners/PropagateLoader";
import Success from "../imgs/SuccessImg";
import Warning from "../imgs/Warning";

const Home2 = () => {
  const [state, setState] = useState(0);
  console.log(state);

  const [FormData, setFormData] = useState({
    pulse: 0,
    sys: 0,
    temperature: 0,
    smoker: 0,
    rr: 0,
    wheezes: 0,
    dia: 0,
    labored_respiration: 0,
    high_risk_exposure_occupation: 0,
    days_since_symptom_onset: 0,
    loss_of_smell: 0,
    muscle_sore: 0,
    fatigue: 0,
    diarrhea: 0,
  });

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 70, color: "red" }} spin />
  );

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const submit = () => {
    increment();
    const url = "https://corona-model-djnago.herokuapp.com/test-restult/";
    axios
      .post(url, FormData)
      .then((res) => {
        const result = res.data.result[0];
        switch (result) {
          case 0:
            setState(16);
          case 1:
            setState(17);
        }
      })
      .catch((e) => {
        message.error("Something went wrong. Please try again later.");
        setState(0);
        console.log(e);
      });
  };

  switch (state) {
    case 0:
      return (
        <Container>
          <Img />
          <Text>
            {homeData.paragraphe}
            <Button onClick={increment}>{homeData.button}</Button>
          </Text>
        </Container>
      );

    case 1:
      return (
        <Input
          noPrev={true}
          value={FormData.pulse}
          increment={increment}
          decrement={decrement}
          type="int"
          quest={homeData.quest1}
          onChange={(e) => {
            console.log(FormData);
            setFormData({ ...FormData, pulse: e });
          }}
        />
      );
    case 2:
      return (
        <Input
          value={FormData.sys}
          increment={increment}
          decrement={decrement}
          type="int"
          quest={homeData.quest2}
          onChange={(e) => {
            console.log(FormData);
            setFormData({ ...FormData, sys: e });
          }}
        />
      );

    case 3:
      return (
        <Input
          value={FormData.temperature}
          increment={increment}
          decrement={decrement}
          type="int"
          quest={homeData.quest3}
          onChange={(e) => {
            console.log(FormData);
            setFormData({ ...FormData, temperature: e });
          }}
        />
      );
    case 4:
      return (
        <YesOrNo
          quest={homeData.quest4}
          increment={increment}
          decrement={decrement}
          onChange={(e) => {
            console.log(FormData);
            setFormData({ ...FormData, smoker: e });
          }}
          value={FormData.smoker}
        />
      );

    case 5:
      return (
        <Input
          value={FormData.rr}
          increment={increment}
          decrement={decrement}
          type="slider"
          quest={homeData.quest5}
          onChange={(e) => setFormData({ ...FormData, rr: e })}
        />
      );
    case 6:
      return (
        <YesOrNo
          quest={homeData.quest6}
          value={FormData.wheezes}
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, wheezes: e })}
        />
      );
    case 7:
      return (
        <Input
          min={70}
          max={200}
          quest={homeData.quest7}
          value={FormData.dia}
          type="controled-int"
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, dia: e })}
        />
      );
    case 8:
      return (
        <YesOrNo
          quest={homeData.quest8}
          value={FormData.labored_respiration}
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, labored_respiration: e })}
        />
      );
    case 9:
      return (
        <YesOrNo
          quest={homeData.quest9}
          value={FormData.high_risk_exposure_occupation}
          increment={increment}
          decrement={decrement}
          onChange={(e) =>
            setFormData({ ...FormData, high_risk_exposure_occupation: e })
          }
        />
      );
    case 10:
      return (
        <Input
          min={1}
          max={20}
          value={FormData.days_since_symptom_onset}
          increment={increment}
          decrement={decrement}
          type="controled-int"
          quest={homeData.quest10}
          onChange={(e) =>
            setFormData({ ...FormData, days_since_symptom_onset: e })
          }
        />
      );
    case 11:
      return (
        <YesOrNo
          quest={homeData.quest11}
          value={FormData.loss_of_smell}
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, loss_of_smell: e })}
        />
      );
    case 12:
      return (
        <YesOrNo
          quest={homeData.quest12}
          value={FormData.muscle_sore}
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, muscle_sore: e })}
        />
      );
    case 13:
      return (
        <YesOrNo
          quest={homeData.quest13}
          value={FormData.fatigue}
          increment={increment}
          decrement={decrement}
          onChange={(e) => setFormData({ ...FormData, fatigue: e })}
        />
      );
    case 14:
      return (
        <YesOrNo
          quest={homeData.quest14}
          value={FormData.diarrhea}
          increment={increment}
          decrement={decrement}
          submitForm={submit}
          onChange={(e) => setFormData({ ...FormData, diarrhea: e })}
          display={true}
        />
      );

    case 15:
      return <PropagateLoader color="#57ffa1" />;
    case 16:
      return (
        <Feedback>
          <div className="alert alert-dismissible alert-success">
            <button
              onClick={() => setState(0)}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            />
            {homeData.negativeTestMessage}
          </div>
          <Success />
        </Feedback>
      );

    case 17:
      return (
        <Feedback>
          <div className="alert alert-dismissible alert-warning">
            <button
              onClick={() => setState(0)}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            />
            <h4 className="alert-heading">Warning!</h4>
            <p className="mb-0">{homeData.positiveTestMessage}</p>
          </div>
          <Warning />
        </Feedback>
      );

    default:
      return <p>result</p>;
  }
};

export default Home2;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5px;
  margin-left: 20px;
`;
const Button = styled.div`
  padding: 5px 50px;
  color: black;
  background-color: #57ffa1;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 5px;
`;

const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
