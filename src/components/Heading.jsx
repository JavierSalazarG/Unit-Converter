import styled from "@emotion/styled";

const Box = styled.div`
  height: 50px;
  max-width: 1250px;
  padding-left: 10%;
  box-shadow: 0px 2px 3px gray;
  margin: 0 auto;
`;
const Head = styled.h1`
  color: #2e0039;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Heading = () => {
  return (
    <Box>
      <Head>Unit Converter</Head>
    </Box>
  );
};

export default Heading;
