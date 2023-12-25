import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer p-10 bg-violet-300">
      <nav>
        <h1 className="text-4xl text-center font-bold">To DO</h1>
        <p>Copyright © 2023 - All right reserved by the authors</p>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link className="link link-hover" to={'/about'}>About us</Link>
        <Link to={'/contacts'} className="link link-hover">Contact</Link>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link to={'https://github.com/rafi00000'}>
            <FaGithub className="text-2xl"></FaGithub>
          </Link>
          <Link to={'https://www.linkedin.com/in/rafiul-islam-609a91290'}>
            <FaLinkedin className="text-2xl"></FaLinkedin>
          </Link>
          <Link to={'https://www.facebook.com/rafi.7256'}>
            <FaFacebook className="text-2xl"></FaFacebook>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
