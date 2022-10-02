import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Schedule.module.css";
import ScheduleComp from "./ScheduleComp/ScheduleComp";

const Schedule = () => {
  const [matchData,setMatchData] =useState([])


  useEffect(() => {
    axios
      .get(
        `https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international`,
        {
          headers: {
      'X-RapidAPI-Key': '8fee5891e9mshc198b1f3322bf3ep11bec2jsn8e38bf1ae3d8',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
},
        }
      )
      .then((res) => {
        // console.log(res.data.matchScheduleMap);
        setMatchData(res.data.matchScheduleMap)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Box
        mt={"0.3rem"}
        // border="1px solid blue"
        bg="#fff"
        // display={"flex"}
        // justifyContent="space-between"
        gap={"0.3rem"}
      >
          <Tabs >
            <TabList>
              <Tab>Current Matches</Tab>
              <Tab>Current & Future Series</Tab>
              <Tab>Matches By Day</Tab>
              <Tab>Teams</Tab>
              <Tab>Series Archive</Tab>
            </TabList>
        <Divider/>

            <TabPanels width={"100%"} >
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
              <TabPanel h={"700px"} >
                <Box>Under Construction</Box>
              </TabPanel>
              <TabPanel padding={"0px 10px"} minH={"700px"}>
                <Box fontSize="24px" fontWeight={"bold"} padding={"15px 0px 10px 10px"}>Cricket Schedule</Box>
                <Box margin={"0px 0px 10px"} display="flex" gap="1.5rem" padding={"10px"}>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}}  borderRadius={"18px"} padding={"0.5rem 1.2rem"}>International</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>Domestic & others</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>T20 Leagues</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>Women</Button>
                  </Box>
                  <Box>
                    <Button size="xs" _hover={{bg:"#009270",color:"#fff"}} borderRadius={"18px"} padding={"0.5rem 1.2rem"}>All Matches</Button>
                  </Box>

                </Box>

                {/* Match schedule container */}
                <Box>
                  {
                    matchData && matchData.map((ele)=>(
                      ele.scheduleAdWrapper && 

                      <ScheduleComp 
                      key={ele.id}
                        date={ele.scheduleAdWrapper.date}
                        seriesNameArr={ele.scheduleAdWrapper.matchScheduleList}

                      />
                    ))
                  }
                </Box>
              </TabPanel>
            
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
           
              <TabPanel h={"700px"}>
                <Box>Under Construction</Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        
      </Box>
    </>
  );
};

export default Schedule;
