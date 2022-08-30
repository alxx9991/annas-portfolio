import Row from "../../layout/Row";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import iwl from "../../../assets/iwl.png";
import alexPortfolio from "../../../assets/alex-portfolio.png";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projectInfo = [
    {
      image: <Image src={iwl}></Image>,
      name: "Interval Weight Loss",
      subtitle: "Dashboard Redesign",
      skills: ["UX/UI", "Health", "Web App"],
      description:
        "Australia’s only scentifically developed weight-loss and wellbeing program proven to deliver sustainable, lasting results.",
    },
    {
      image: <Image src={alexPortfolio}></Image>,
      name: "Alex Lin",
      subtitle: "Portfolio Website",
      skills: ["UX/UI", "Branding"],
      description:
        "Portfolio web design and branding for a frontend software developer.",
    },
  ];

  const projects = projectInfo.map((project) => {
    return <ProjectItem key={uuidv4()} {...project}></ProjectItem>;
  });

  return (
    <div className="full-width-section mt-48" id="projects">
      <Row>
        <h2 className="text-center text-text-dark-grey mb-16">
          Recent Projects
        </h2>
      </Row>
      <Row className="flex flex-col items-center xl:items-start xl:flex-row gap-32 xl:gap-16 justify-center mb-24">
        {projects}
      </Row>
    </div>
  );
};

export default Projects;
