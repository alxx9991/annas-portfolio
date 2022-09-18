import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import ProjectLink from "../../../assets/projectLink.svg";
import Link from "next/link";

const ProjectItem = ({ subtitle, description, image, skills, bg, link }) => {
  const skillElements = skills.map((skill) => {
    return (
      <div
        key={uuidv4()}
        className="b2 bg-white rounded-full caption px-4 py-2 lg:px-6 lg:py-2"
      >
        {skill}
      </div>
    );
  });

  const styling = `max-w-[432px] h-full ${bg} rounded-[2rem] flex flex-col justify-between relative`;

  return (
    <Link href={link ? link : "https://google.com.au"}>
      <a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={styling}
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 w-full min-h-min ml-auto flex justify-end p-6">
            <ProjectLink></ProjectLink>
          </div>
          <div className="px-10 pb-4 pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="btn mt-4"
            ></motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="subtitle2"
            >
              {subtitle}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-row gap-4 my-4"
            >
              {skillElements}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="b1"
            >
              {description}
            </motion.p>
          </div>
          {image}
        </motion.div>
      </a>
    </Link>
  );
};

export default ProjectItem;
