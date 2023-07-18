import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function PartnersSection() {
  return (
    <>
      <Box mx={3} display="flex" alignItems="center">
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        <Box flex="1" textAlign="center">
          <Heading
            fontFamily={"Montserrat"}
            as="h2"
            fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
          >
           Partnerlerimiz
          </Heading>
        </Box>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={3}
      >
       <>
       
       
       </>
      </Flex>
    </>
  );
}

export default PartnersSection;
