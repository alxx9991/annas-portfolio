import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const ProjectItem = ({ subtitle, description, image, skills, bg }) => {
  const skillElements = skills.map((skill) => {
    return (
      <div
        key={uuidv4()}
        className="b2 bg-white rounded-full px-4 py-2 lg:px-8 lg:py-4"
      >
        {skill}
      </div>
    );
  });

  const styling = `max-w-[500px] h-full ${bg} rounded-[2rem] flex flex-col justify-between`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={styling}
    >
      <div className="p-12 pb-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="btn mt-4"
        ></motion.p>
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
      </div>

      {image}
    </motion.div>
  );
};

export default ProjectItem;
