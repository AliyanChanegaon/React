import BasicPortals from "./Components/BasicPortals";
import Details from "./Components/Details";
import Form from "./Components/Form";
import Layout from "./Components/Layout";
import FlexExample from "./Components/FlexExample";
import StackExample from "./Components/StackExample"
import { Container } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GridExample from "./Components/GridExample";
import DefaultThemeExample from "./Components/DefaultThemeExample";
import CustomizedThemeExample from "./Components/CustomizedThemeExample";

export default function App() {
  return (
    <Container>
      <Navbar />
      {/* <Form /> */}
      {/* <Details />  */}
      <Layout />
      {/*  <BasicPortals />*/}
       {/* <StackExample /> */}
      {/* <FlexExample /> */}
      {/* <GridExample /> */}
      {/* <DefaultThemeExample /> */}
      {/*<CustomizedThemeExample />*/}
    </Container>
  );
}

// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
