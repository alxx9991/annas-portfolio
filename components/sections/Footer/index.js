import Email from "../../../assets/email.svg";
import Dribbble from "../../../assets/dribbble.svg";
import LinkedIn from "../../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div
      className="full-width-section flex flex-col bg-[black] text-white items-center mt-48 pt-12 mx-[-3rem] md:m-0"
      id="contact"
    >
      <h2>Collab or chat?</h2>
      <h2 className="font-normal">Let{"'"}s connect</h2>
      <div className="flex flex-row gap-12 my-16 items-end">
        <Dribbble></Dribbble>
        <LinkedIn></LinkedIn>

        <Email></Email>
      </div>
      <p className="btn mb-8 text-text-dark-grey">
        Design © Anna He, 2022. Built by Alex Lin.
      </p>
    </div>
  );
};

export default Footer;
