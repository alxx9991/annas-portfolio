import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const ProjectItem = ({ name, subtitle, description, image, skills }) => {
  const skillElements = skills.map((skill) => {
    return (
      <div
        key={uuidv4()}
        className="b2 bg-grey rounded-full px-6 py-2 lg:px-10 lg:py-4"
      >
        {skill}
      </div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="max-w-[500px]"
    >
      {image}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="btn mt-4"
      >
        {name}
      </motion.p>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="subtitle2"
      >
        {subtitle}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-4 my-4"
      >
        {skillElements}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="b1"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default ProjectItem;
