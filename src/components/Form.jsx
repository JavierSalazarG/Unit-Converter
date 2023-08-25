import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import measurementChoices from "../data/choices.js";
import { Calc } from "./Calc.jsx";

//styles
const StyleForm = styled.form`
  margin-bottom: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Procces = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: normal;
    width: 90%;
    height: 70px;
  }
`;
const QuantityInput = styled.input`
  width: 80px;
  background-color: transparent;
  color: #fff;
  outline: none;
  width: 40%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 18px;

  @media (max-width: 550px) {
    width: 90%;
  }
`;

const OptionsSelect = styled.select`
  color: #fff;
  outline: none;
  width: 40%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  font-size: 18px;
  @media (max-width: 550px) {
    width: 90%;
  }
`;

const OptionSelect = styled.option`
  background-color: #2e0039;
`;

const ResultAndSave = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputSave = styled.input`
  background-color: #fff;
  border: none;
  padding: 10px;
  width: 70px;
  border-radius: 20px;
  font-weight: 700;
  color: #2e0039;
  box-shadow: 0px 2px 3px black;
  cursor: pointer;
  font-size: 18px;

  transition: 0.3s ease;

  &:hover {
    background-color: #e2d1e6;
    color: #17011c;
  }
`;

const ResultLabel = styled.span`
  color: #fff;

  font-weight: 600;
  font-size: 18px;
`;
//--------------

const Form = ({ currentArray, getInformation }) => {
  const [opcion, setOpcion] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  //Mandando datos a la funcion Calc para hacer los calculos
  useEffect(() => {
    const selectedChoice = measurementChoices.find(
      (choice) => choice.nombre === opcion
    );

    if (selectedChoice) {
      const medida = selectedChoice.medida;
      const formula = selectedChoice.formula;
      const newResult = Calc(amount, medida, formula);
      setResult(newResult);
    }
  }, [opcion, amount]);

  //-------

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  //pasar datos de Form a padre por props ----
  const PassData = (e) => {
    e.preventDefault();
    if (result !== "" || opcion !== "") {
      const id = generateUUID();
      const arrayData = { opcion, result, id };
      getInformation([...currentArray, arrayData]);
    } else {
      console.log("Error al pasar datos desde Save local en Form.jsx");
    }
    //---------------
  };

  return (
    <StyleForm>
      <Procces>
        <OptionsSelect
          value={opcion}
          onChange={(e) => setOpcion(e.target.value)}
        >
          <OptionSelect value="">select one</OptionSelect>
          {measurementChoices.map((option) => (
            <OptionSelect key={option.id} value={option.nombre}>
              {option.nombre}
            </OptionSelect>
          ))}
        </OptionsSelect>
        <QuantityInput
          type="number"
          id="quantity"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Procces>
      <ResultAndSave>
        <InputSave type="submit" value="save" onClick={PassData} />
        <ResultLabel>{result}</ResultLabel>
      </ResultAndSave>
    </StyleForm>
  );
};

export default Form;
