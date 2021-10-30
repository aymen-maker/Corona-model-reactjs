import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = () => {
  const [state, setState] = useState({
    pulse: null,
    sys: null,
    temperature: null,
    smoker: null,
    rr: null,
    wheezes: null,
    dia: null,
    labored_respiration: null,
    high_risk_exposure_occupation: null,
    days_since_symptom_onset: null,
    loss_of_smell: null,
    muscle_sore: null,
    fatigue: null,
    diarrhea: null,
  });

  const apply = () => {
    axios
      .post("http://localhost:8000/test-restult/", state)
      .then((res) => console.log(res.data));
  };

  return (
    <Container>
      <Input type="text" name="sys" placeholder="Tension " />
      <Input type="text" name="pulse" placeholder="Impulsion" />
      <Input type="text" name="temperature" placeholder="Température" />
      <Input
        type="text"
        name="smoker"
        placeholder="êtes-vous fumeur ? (0 ou 1)"
      />
      <Input
        type="text"
        name="rr"
        placeholder="Fréquence respiratoire ( entre 12 et 16 pour l'adulte normale )"
      />
      <Input
        type="text"
        name="wheezes"
        placeholder="Resiration sifflante (0 ou 1)"
      />
      <Input
        type="text"
        name="dia"
        placeholder="êtes-vous diabétique? (0 ou 1 )"
      />
      <Input
        type="text"
        name="labored_respiration"
        placeholder="Avez-vous un Probléme de respiration? (0 ou 1)"
      />
      <Input
        type="text"
        name="high_risk_exposure_occupation"
        placeholder="Profession à haute risque (0 ou 1)"
      />
      <Input
        type="text"
        name="days_since_symptom_onset"
        placeholder="Jours depuis l'apparition des symptômes ?"
      />
      <Input
        type="text"
        name="loss_of_smell"
        placeholder="Perte d'odeur  (0 ou 1)"
      />
      <Input
        type="text"
        name="muscle_sore"
        placeholder="Courbatures ? (0 ou 1)"
      />
      <Input type="text" name="fatigue" placeholder="Fatigue (0 ou 1)" />
      <Input type="text" name="diarrhea" placeholder="Diarrhée (0 ou 1)" />
      <Input type="submit" value="Soumettre" />
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const Input = styled.input`
  margin: 3px 0;
`;
