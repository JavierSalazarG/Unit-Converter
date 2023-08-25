import styled from "@emotion/styled";

//style

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 550px) {
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const SavedH2 = styled.h2`
  color: #ababab;
`;

const SpanDatas = styled.span`
  width: calc(50% - 10px);
  margin: 5px;
  background-color: #ececec;
  box-shadow: 0px 2px 3px #7c7c7c;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 550px) {
    width: 90%;
  }
`;

const DatasInfo = styled.p`
  color: #ababab;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  color: #ababab;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

//------

const SevedItems = ({ dataItems, deleteData }) => {
  return (
    <>
      <SavedH2>Saved</SavedH2>

      <ContainerDiv>
        {dataItems.map((dataItem) => (
          <SpanDatas key={dataItem.id}>
            <DatasInfo>{dataItem.opcion}</DatasInfo>
            <DatasInfo>{dataItem.result}</DatasInfo>
            <ButtonDelete onClick={() => deleteData(deleteData(dataItem.id))}>
              X
            </ButtonDelete>
          </SpanDatas>
        ))}
      </ContainerDiv>
    </>
  );
};

export default SevedItems;
