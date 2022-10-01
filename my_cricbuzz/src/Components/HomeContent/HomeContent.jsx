import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsComp from "./NewsComp";
import axios from "axios";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NewsImageComp from "./NewsImageComp";

// const options = {

//     url: 'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c231889/i.jpg',
//   params: {p: 'de', d: 'high'},
//     headers: {
//       'X-RapidAPI-Key': '8fee5891e9mshc198b1f3322bf3ep11bec2jsn8e38bf1ae3d8',
//       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };

// const options = {
//     method: 'GET',
//     url: 'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c231889/i.jpg',
//     params: {p: 'de', d: 'high'},
//     headers: {

//       'X-RapidAPI-Key': '4c86d1e4f3mshb146809f6cdc24fp1ce4fejsn01d1fc53b900',
//       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };

const HomeContent = () => {
  const [news, setNews] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getNewsImage();
    getNews();
  }, []);

  const getNewsImage = () => {
    axios
      .get("https://thawing-atoll-50426.herokuapp.com/stories")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNews = () => {
    axios
      .get("https://cricbuzz-cricket.p.rapidapi.com/news/v1/index", {headers: {

              'X-RapidAPI-Key': '4c86d1e4f3mshb146809f6cdc24fp1ce4fejsn01d1fc53b900',
              'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }})
      .then((res) => {
        // console.log(res.data);
        setNews(res.data.storyList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        mt={"0.3rem"}
        border="1px solid"
        display={"flex"}
        justifyContent="space-between"
        gap={"0.3rem"}
      >
        <Box w="196px" p={2} bg="#fff" border="1px solid ">
          <Text as="b" mb={2} fontSize={"lg"} color={"#009270"}>
            LATEST NEWS
          </Text>
          {news &&
            news.map(
              (ele) =>
                ele.story && (
                  <NewsComp
                    key={ele.id}
                    title={ele.story.hline}
                    date={ele.story.pubTime}
                  />
                )
            )}
        </Box>

        <Box w="470px" p={3} border="1px solid " bg="#fff">
          {data &&
            data.map((ele) => (
              <NewsImageComp
                key={ele.scribId}
                image={ele.image.peerUrls.WIDE}
                title={ele.title}
                description={ele.image.longCaption}
                caption={ele.image.caption}
              />
            ))}
        </Box>

        <Box w="342px" p={3} border="1px solid " bg="#fff">
          <Text as="b" mb={2} fontSize={"lg"} color={"#009270"}>
            FEATURED VIDEOS
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default HomeContent;
