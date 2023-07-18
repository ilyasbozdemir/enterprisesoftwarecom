import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  keyframes,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import StartProjectButton from "../../components/StartProjectButton";
import ScrollToIdButton from "../../components/ScrollToIdButton ";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 50% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const RainbowText = ({ text }) => (
  <>
    <Text
      as="span"
      bgGradient="linear(to left, #61A5C2, #5298AD, #61A5C2, #5874B7, #61A5C2, #5298AD)"
      //bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
      bgClip="text"
      color="transparent"
      animation={`${rainbowAnimation} 4s ease-out infinite`}
      bgSize="400% 100%"
      animationIterationCount="infinite"
      w="fit-content"
    >
      {text}
    </Text>
  </>
);

export default function CallToActionWithIllustration({ lang, targetId }) {
  const router = useRouter();

  return (
    <Box
      w="100vw" // Genişliği ekran genişliğine eşit
      h="100vh" // Yüksekliği ekran yüksekliğine eşit
      display="flex" // İçeriği yatay ve dikey olarak ortalamak için flex kullanıyoruz
      justifyContent="center" // Yatayda ortala
      alignItems="center" // Dikeyde ortala
    >
      <Container maxW={"5xl"} as="article">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
        >
          <Heading
            as={"h1"}
            fontWeight={600}
            fontSize={{ base: "30px", md: "50px" }}
            textTransform={"uppercase"}
            fontFamily={"Montserrat"}
            data-aos="fade-up"
          >
            Markanızı öne çıkarmak için yaratıcılığı
            <RainbowText text={" Teknolojiyle "} /> birleştiriyoruz.
          </Heading>
          <Text
            maxW={"3xl"}
            data-aos="fade-up"
            fontSize={{ base: "19px", md: "25px" }}
            fontFamily={"'Nunito Sans', sans-serif"}
          >
            Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak
            hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve
            araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet
            avantajı elde etmelerini sağlıyoruz.
          </Text>
          <Stack spacing={6} direction={"column"}>
            <StartProjectButton />

            <Center>
              <ScrollToIdButton targetId={targetId} />
            </Center>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
