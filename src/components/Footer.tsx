// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="" target="_blank">
        Priya Sharma
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>App</span>
      </strong>
    </div>
  );
};

export default Footer;
