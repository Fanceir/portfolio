import {
    Box,
    Collapse,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import { motion, useAnimation } from "framer-motion";
  import { useEffect } from "react";
  import { useInView } from "react-intersection-observer";
  import { FaChevronRight } from "react-icons/fa";
  
  // 定义活动的接口
  interface Activity {
    image?: string;
    video?: string;
    description: string;
  }
  
  interface CampusActivitiesProps {
    activities: Activity[];
  }
  
  export const CampusActivities: React.FC<CampusActivitiesProps> = ({
    activities,
  }) => {
    return (
      <Flex
        id="campus-activities"
        w={"full"}
        maxW={"container.xl"}
        align={"center"}
        justify={"center"}
        direction={"column"}
        p={8}
        tabIndex={-1}
      >
        <Box w={"full"} maxW={"container.xl"}>
          <Heading as={"h2"} fontSize={"3xl"} px={{ base: 4, md: 8 }} mb={8}>
            Join Activities
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            rowGap={6}
            wrap={"wrap"}
          >
            {activities.map((activity, index) => (
              <SingleActivity
                {...activity}
                key={`${activity.description}-${index}`}
                index={index}
              />
            ))}
          </Stack>
        </Box>
      </Flex>
    );
  };
  
  const SingleActivity = ({
    image,
    video,
    description,
    index = 0,
  }: {
    image?: string;
    video?: string;
    description: string;
    index?: number;
  }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const controls = useAnimation();
    const { isOpen, onToggle } = useDisclosure();
  
    const variants = {
      hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: index * 0.05 },
      },
    };
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <Stack
        as={motion.div}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        direction={"column"}
        justify={"left"}
        pb={8}
        px={{ base: 4, md: 8 }}
        borderRadius={"xl"}
        spacing={4}
        tabIndex={0}
        onClick={onToggle}
        cursor={"pointer"}
        boxShadow={"md"}
        _hover={{ boxShadow: "lg" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
        >
          {/* 左侧部分: 图片或视频 */}
          <Box
            flex="1"
            maxW={{ base: "full", md: "40%" }}
            className="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Collapse in={isOpen} animateOpacity unmountOnExit>
              <Stack spacing={4} direction={"column"}>
                {image && (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <img
                      src={image}
                      alt={description}
                      className="max-w-full max-h-48 object-cover mx-auto"
                    />
                  </div>
                )}
                {video && (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <video controls className="max-w-full max-h-48 mx-auto">
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                )}
              </Stack>
            </Collapse>
          </Box>
  
          <Box
            flex="2"
            maxW={{ base: "full", md: "60%" }}
            className="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={2}>
              <Text fontSize={{ base: "md", md: "xl" }} fontWeight="semibold" mb={2}>
                {description}
              </Text>
              <Flex align={"center"} justify="space-between">
                <Flex
                  as={motion.div}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  p={{ base: 1, md: 2 }}
                >
                  <Icon as={FaChevronRight} boxSize={{ base: 2, md: 4 }} />
                </Flex>
                <Heading as={"h3"} fontSize={{ base: "xl", md: "2xl" }} color="gray.700">
                  {image ? "Activity Image" : "Activity Video"}
                </Heading>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    );
  };
  
  export default CampusActivities;
  