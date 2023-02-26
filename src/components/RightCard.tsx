import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
const CardWrapper = styled(Box)(() => (props) => ({
    width: "100%",
backgroundColor:"#FDC448",
position:"relative",
borderRadius:"0 10px 10px 10px",
display:"flex",
flexDirection:"column",
alignItems:"center"
  }));
  const TopRec = styled(Box)(() => (props) => ({
    width:"20%",
       height: 20,
   backgroundColor:"#FDC448",
   position:"absolute",
   top:"-13px",
   left:0,
   borderRadius:"10px 10px 0 0",
   div:{
       height: 28,
       width:35,
       position:"absolute",
       backgroundColor:"#FDC448",
       top:"5px",
   right:"-11px",
   transform:"rotate(45deg)",
   borderRadius:"10px 0 0 0",
   
   }
     }));
const RightCard = () => {
  return (
    <CardWrapper >
        <Box className="top" >
            <Typography variant="h2" textAlign={"center"}>the</Typography>
            <Typography variant="h3">future</Typography>
        </Box>
        <Box className="image" sx={{position:"relative",width:250,height:220}}>
            <Image
            alt="pray"
            src="/pray.png"
            fill
            />
        </Box>
        <Box className="subtitle" sx={{width:"50%",display:"flex",justifyContent:"center"}}>
            <Typography variant="subtitle2" sx={{textAlign:"center",}}>
                free your mind for something more 
                <Typography variant="subtitle2">important</Typography>
            </Typography>
        </Box>
      <TopRec>
    <div></div>
 </TopRec>
    </CardWrapper>
  )
}

export default RightCard