import { v4 as uuidv4 } from "uuid";

const ProjectItem = ({ name, subtitle, description, image, skills }) => {
  const skillElements = skills.map((skill) => {
    return (
      <div
        key={uuidv4}
        className="b2 bg-grey rounded-full px-6 py-2 lg:px-10 lg:py-4"
      >
        {skill}
      </div>
    );
  });

  return (
    <div className="max-w-[500px]">
      {image}
      <p className="btn mt-4">{name}</p>
      <h3 className="subtitle2">{subtitle}</h3>
      <div className="flex flex-row gap-4 my-4">{skillElements}</div>
      <p className="b1">{description}</p>
    </div>
  );
};

export default ProjectItem;
