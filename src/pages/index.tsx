import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";

import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
 <Container maxWidth="lg" >
 <Grid container  spacing={2} sx={{backgroundColor:"black",px:"50px",py:"50px",mt:3}}>
  <Grid item xs={12} md={8}>
  <LeftCard/>
  </Grid>
  <Grid item xs={12} md={4}>
   <RightCard/>
  </Grid>
 
</Grid>
 </Container>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>

  {page}
  </>;
};
export default Home;
