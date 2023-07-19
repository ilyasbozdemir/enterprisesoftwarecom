import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FaRocket,
  FaSearch,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
function WhyChooseUs() {
  const Feature = (props) => {
    return (
      <>
        <Center py={3}>
          <Flex
            direction={{ base: "column", lg: "column" }}
            w={{ base: "full", lg: "250px" }}
            h={{ base: "300px", lg: "350px" }}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            rounded={"lg"}
            overflow={"hidden"}
          >
            <Stack
              textAlign={"center"}
              p={6}
              color={useColorModeValue("gray.800", "white")}
              align={"center"}
            >
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  w={16}
                  h={16}
                  mb={4}
                  rounded="full"
                  color={`${props.color}.600`}
                  bg={`${props.color}.100`}
                  _dark={{
                    color: `${props.color}.200`,
                    bg: `${props.color}.800`,
                  }}
                >
                  <Icon as={props.icon} boxSize={10} aria-hidden="true" />
                </Flex>
              </Stack>

              <Center>
                <Heading fontFamily={"Montserrat"} as="h2" fontSize={"20px"}>
                  {props.title}
                </Heading>
              </Center>
            </Stack>

            <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
              {props.content}
            </Box>
          </Flex>
        </Center>
      </>
    );
  };

  const features = [
    {
      color: "teal", 
      title: "Yüksek Hız",
      icon: FaRocket, 
      content:
        "Projelerinizi hızlı bir şekilde tamamlarız. İleri düzeyde verimlilikle çalışarak zamanınızı tasarruf ederiz.",
    },
    {
      color: "blue",
      title: "SEO Uyumlu Çözümler",
      icon: FaSearch,
      content:
        "SEO odaklı yaklaşımlarla web sitelerinizi ve uygulamalarınızı optimize eder, arama motorlarında yüksek sıralamalara ulaşmanıza yardımcı oluruz.",
    },
    {
      color: "purple",
      title: "Kısa Sürede Teslimat",
      icon: FaClock,
      content:
        "Projelerinizi zamanında ve beklenen sürede teslim ederiz. Sorunsuz bir şekilde ilerleyerek iş süreçlerinizi hızlandırırız.",
    },
    {
      color: "yellow",
      title: "Garanti ve Para İadesi",
      icon: FaShieldAlt,
      content:
        "Müşteri memnuniyeti için garanti sağlarız ve memnun kalmamanız durumunda para iadesi sunarız.",
    },
    {
      color: "orange",
      title: "Müşteri Odaklılık",
      icon: FaUsers,
      content:
        "İhtiyaçlarınızı anlamak ve beklentilerinizi karşılamak için esnek ve müşteri odaklı bir yaklaşım benimseriz.",
    },
    {
      color: "pink",
      title: "Yenilikçi Teknoloji",
      icon: FaLightbulb,
      content:
        "Güncel teknolojilerle projelerinizi destekleriz, en yeni çözümleri sunarak rekabet avantajı sağlamanızı sağlarız.",
    },
  ];

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={{ md: 5, lg: 10 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
        borderRadius={"15px"}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={"center"}
          justifyContent={"center"}
        >
          <Box maxW={"450px"}>
            <Text
              as="h2"
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Neden bizi seçmelisiniz?
            </Text>
            <Text
              as="p"
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Minimum 6 aylık destek, haftalık güncellemeler ve size özel
              hizmetlerimizle buradayız. Başarıya giden yolda yanınızdayız.
            </Text>
            <Center>
              <Box display={{ base: "none", lg: "initial" }}>
                <Link href={"/tr/about-appizsoft"}>
                  <Button
                    variant="solid"
                    w={{
                      base: "full",
                      sm: "auto",
                    }}
                    colorScheme="teal"
                    size="lg"
                  >
                    Daha Fazlasını Gör
                  </Button>
                </Link>
              </Box>
            </Center>
          </Box>

          <Wrap alignItems="start" w={{ base: "full", lg: "900px" }}>
            {features.map((child) => (
              <div key={child.icon}>
                <WrapItem mx={4}>
                  <Feature
                    color={child.color}
                    title={child.title}
                    icon={child.icon}
                    content={child.content}
                  />
                </WrapItem>
              </div>
            ))}
          </Wrap>
        </Flex>
        <Center>
          <Box display={{ base: "initial", lg: "none" }} mt={10}>
            <Link href={"/tr/about-appizsoft"}>
              <Button
                variant="solid"
                w={{
                  base: "full",
                  sm: "auto",
                }}
                colorScheme="teal"
                size="lg"
              >
                Daha Fazlasını Gör
              </Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </Flex>
  );
}

export default WhyChooseUs;
