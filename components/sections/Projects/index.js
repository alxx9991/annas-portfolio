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
        "Redesigning the interface for Australia’s only scentifically developed weight-loss program.",
      bg: "bg-[#D7E7E7]",
    },
    {
      image: <Image src={alexPortfolio}></Image>,
      name: "Alex Lin",
      subtitle: "Portfolio Website",
      skills: ["UX/UI", "Branding"],
      description:
        "Website design and branding for a frontend software developer.",
      bg: "bg-[#BAC1D3]",
    },
  ];

  const projects = projectInfo.map((project) => {
    return <ProjectItem key={uuidv4()} {...project}></ProjectItem>;
  });

  const highlight =
    "text-dark-grey relative inline-block after:block after:h-[30%] after:w-[106%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-3%] after:inset-y-[75%] after:rounded-full after:-z-10";

  return (
    <div className="full-width-section mt-48" id="projects">
      <Row>
        <h2 className="text-center text-text-dark-grey mb-16">
          <span className={highlight}>Recent Projects</span>
        </h2>
      </Row>
      <Row className="flex flex-col items-center xl:items-start xl:flex-row gap-32 xl:gap-16 justify-center mb-24">
        {projects}
      </Row>
    </div>
  );
};

export default Projects;
