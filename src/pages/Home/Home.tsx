import { Flex, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Loader } from "../loading/Loader";
import FunFact from "./components/FunFact";
import MusicButton from "./components/MusicButton";
import CampusActivities from "./components/CampusActivities";

// Lazy Import
const Navbar = lazy(() => import("../common/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("../common/Footer"));
const Contact = lazy(() => import("./components/Contact"));

export const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Flex
        scrollBehavior={"smooth"}
        bg={useColorModeValue("brand.50", "brand.950")}
        direction={"column"}
        align={"center"}
      >
        <Navbar />
        <Hero />
        <FunFact />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <CampusActivities
          activities={[
            { video: "/assets/video.mp4", description: "组织的招新赛活动" },
            {
              image: "/assets/bytedanceactivity.jpg",
              description: "字节跳动青训营活动",
            },
            {
              image: "/assets/acm.jpg",
              description: "参加的比赛",
            },
          ]}
        />
        <Footer />
      </Flex>
      <MusicButton />
    </Suspense>
  );
};
