import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Image from "next/image";

const CardWrapper = styled(Box)(() => (props) => ({
  width: "100%",
  height: "100%" ,
  backgroundColor: "#00CBA0",
  position: "relative",
  borderRadius: "10px 0 10px 10px",
  display:"flex",
  justifyContent:"center",
  alignItems:"end"
}));
const TopRec = styled(Box)(() => (props) => ({
  width: "20%",
  height: 20,
  backgroundColor: "#00CBA0",
  position: "absolute",
  top: "-13px",
  right: 0,
  borderRadius: "10px 10px 0 0",
  div: {
    height: 28,
    width: 35,
    position: "absolute",
    backgroundColor: "#00CBA0",
    top: "5px",
    left: "-11px",
    transform: "rotate(-45deg)",
    borderRadius: "0 10px 0 0",
  },
}));

const LeftCard = () => {
  return (
    <CardWrapper>
      <Box sx={{width:30,height:30,transform:"rotate(45deg)",position:"absolute",top:10,left:10}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M120 76a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 44a44 44 0 1 0-44-44a44 44 0 0 0 44 44ZM76 136a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm104 0a44 44 0 1 0 44 44a44 44 0 0 0-44-44Z"/></svg>
      </Box>
      <Box
        className="image"
        sx={{ position: "relative", width: 540, height: "300px" }}
      >
        <Image alt="left" src="/left.png" fill />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          position: "absolute",
          bottom: 0,
          width: "100%",
          px:3,
          pb:1

        }}
      >
        <Box sx={{ width: 100 }}>
          <Typography variant="subtitle2">
            Because your business needs
            <Typography variant="subtitle2">a lot more</Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            background: "transparent",
            borderRadius: 20,
            height: 40,
            width: 200,
            display:"flex",
            alignItems:"center",
justifyContent:"space-between",
p:2
          }}
        >
            <Typography variant="subtitle2">get expert advise</Typography>
          <Box textAlign={"center"} alignItems="center" display={"flex"}  justifyContent="center" sx={{width:30,height:30,borderRadius:"50%",backgroundColor:"black",color:"white"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <TopRec>
        <div></div>
      </TopRec>
    </CardWrapper>
  );
};

export default LeftCard;
