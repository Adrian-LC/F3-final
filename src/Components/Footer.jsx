import '../assets/styles/components/Footer.css';

const Footer = () => {

  return (
    <footer className="footer-container">
      <p>
        &copy;  Front-3
        <span> {new Date().getFullYear()} </span>
      </p>
    </footer>
  );
};

export default Footer;
