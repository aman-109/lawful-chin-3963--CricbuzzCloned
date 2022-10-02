import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./ScheduleComp.module.css";

const time=(value)=>{
  return  new Date(Number(value)).toLocaleString(
        "en-US",
        { hour: "numeric", minute: "numeric", hour12: true }
      );
}

const ScheduleComp = ({ date, seriesNameArr }) => {
  

  return (
    <>
      <Box  mb="2">
        <Box className={styles.dateBox}>{date}</Box>
        {seriesNameArr &&
          seriesNameArr.map((ele) => {
            return (
              <Box className={styles.matchBox}>
                <Box
                  className={styles.matchBoxChild}
                  fontSize="md"
                  fontWeight="bold"
                >
                  {ele.seriesName}
                </Box>
                <Box className={styles.matchBoxChild}>
                  <Text fontSize="14px">{`${ele.matchInfo[0].team1.teamSName} vs ${ele.matchInfo[0].team2.teamSName}, ${ele.matchInfo[0].matchDesc}`}</Text>
                  <Text
                    fontSize="10px"
                    color="gray"
                  >{`${ele.matchInfo[0].venueInfo.ground}, ${ele.matchInfo[0].venueInfo.city}`}</Text>
                </Box>
                <Box className={styles.matchBoxChild}>
                  <Text fontSize="14px">
                  {time(ele.matchInfo[0].startDate)}
                </Text>
                <Text fontSize="10px" color="gray">
                  {time(ele.matchInfo[0].startDate)}
                </Text>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
};

export default ScheduleComp;
