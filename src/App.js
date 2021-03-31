import React,{useEffect,useState,createRef} from "react"
import './App.css';
import {useCostom} from "./customhook"
import {Button,Grid,Checkbox,FormControlLabel,Radio,TextField,Hidden,Box, Typography, ButtonGroup, Breadcrumbs,Avatar, Menu, MenuItem, Select, Paper, CircularProgress, LinearProgress} from "@material-ui/core"
import {AcUnit,AccountBalance,Facebook} from "@material-ui/icons"

function App() {


  return (

   <Box> 

        <ButtonGroup>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>


        <ButtonGroup color="secondary">
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>


        <ButtonGroup color="primary">
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" color="primary">
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>



      <Avatar>s</Avatar>
           <Avatar src={process.env.PUBLIC_URL+"./2109.jpg"}></Avatar>

            <Select value={10}>

              <MenuItem  value={10}>khalid</MenuItem>
              <MenuItem  value={20}>hamza</MenuItem>
              <MenuItem  value={30}>sanan</MenuItem>
            </Select>
           
           <Breadcrumbs>
           
           <Typography>home</Typography>
           <Typography>servers</Typography>
           <Typography>products</Typography>
           </Breadcrumbs>
            


            <Paper elevation={9} style={{width:"400px",height:"400px"}}>

            </Paper>




            <AcUnit/>
            <AccountBalance/>
            <Facebook/>

   </Box>



   
    
  );
}

export default App;
