import React, { useState } from "react";
import {
  Box,
  Text,
  Image as ChakraImage,
  Heading,
  Flex,
  Divider,
  Center,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { technologies } from "../../constants/technologies";
import { useRouter } from "next/router";
import Link from "next/link";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import dynamic from "next/dynamic";

const lang = `tr`;

const TechnologyComponent = ({ id }) => {
  const Component = lazy(() => import(`./${id}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

//

function OurTechnologies() {
  const router = useRouter();

  return (
    <>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Teknolojiler
          </Heading>
        </Flex>
      </Center>

      <Center>
        <Box my={5} w={"85%"} userSelect={"none"}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={useBreakpointValue({
              base: 4,
              md: 6,
              lg: 7,
              xl: 8,
              "2xl": 9,
              "3xl": 10,
              "4xl": 11,
              "5xl": 12,
            })}
            autoplay={{ delay: 500 }}
          >
            {technologies.map((image, index) => (
              <SwiperSlide key={index}>
                <Link href={`${lang}/technologies#${image.id}`} passHref>
                  <Flex direction={"column"}>
                    <ChakraImage
                      id={image.id}
                      src={image.imageUrl}
                      alt={`${image.title}`}
                      width={50}
                      height={50}
                      filter={"saturate(.2)"}
                      _hover={{
                        filter: "none",
                      }}
                    />
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Center>
    </>
  );
}

export default OurTechnologies;
