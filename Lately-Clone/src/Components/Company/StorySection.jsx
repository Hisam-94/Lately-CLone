import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const StorySection = () => {
  return (
    <Box textAlign={"start"} p="0em 15em" color={'#174c43'}>
      <Heading mb={"0.5em"}>Yeppers!</Heading>
      <Text mb={"1em"} fontSize="lg">
        Once upon a time, there was a rock ‘n roll dj, broadcasting to 20
        million listeners a day for Sirius/XM. And she learned how to turn
        listeners into fans (a.k.a. customers into evangelists) by tapping into
        old-school trigger points and tying them together with new ideas.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        That was our CEO, Kate, back in the day.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Then Kate started a marketing agency and used the same methodology with
        words and an overwhelming amount of (ugh) spreadsheets for then-client,
        Walmart.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        Well, not just Walmart. It was a partnership between Walmart, United Way
        Worldwide, National Disability Institute, and tens of thousands of
        local, small business and nonprofit affiliates. In other words, every
        size business across for-profit, nonprofit and government.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        With Kate’s system, they achieved a 130%, three year, year-over-year
        ROI.
      </Text>
      <Text mb={"1em"} fontSize="lg">
        In fact, Kate found similar success with all of her clients, regardless
        of industry or company size. So, along with one heckuva team, she
        created Lately to automate the whole kit and caboodle with AI
      </Text>
    </Box>
  );
};

export default StorySection;
