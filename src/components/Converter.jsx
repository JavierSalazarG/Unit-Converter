import styled from "@emotion/styled";
import Form from "./Form";
import { useState, useEffect } from "react";
import SevedItems from "../helpers/SevedItems";

//styles
const Box = styled.div`
  margin-top: 100px !important;
  margin: 0 auto;
  height: 200px;
  width: 90%;
  max-width: 1200px;

  box-shadow: 0px 2px 3px gray;
  background-color: #2e0039;
  border-radius: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
const Title = styled.h2`
  color: #fff;
`;
//-------------------

const Converter = () => {
  const [datas, setDatas] = useState([]);

  //pasar datos de Form a padre por props ----
  const getInformation = (data) => {
    setDatas(data);
  };

  //-----

  // Guardar en LocalStorage, el primer useEffect comprueba si hay datos en el localStorage, si hay lo lee

  useEffect(() => {
    const chooseLS = () => {
      const dataLS = JSON.parse(localStorage.getItem("datas")) ?? [];
      setDatas(dataLS);
    };

    chooseLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);

  //borrar datos

  const deleteData = (id) => {
    const datasUpdate = datas.filter((data) => data.id !== id);
    setDatas(datasUpdate);
  };
  //----

  return (
    <Box>
      <Title>Convert</Title>
      <Form currentArray={datas} getInformation={getInformation} />
      <SevedItems dataItems={datas} deleteData={deleteData} />
    </Box>
  );
};

export default Converter;
