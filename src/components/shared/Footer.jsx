import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div  className="foot">
      <p>&copy; {currentYear} Olua Ginika. All rights reserved.</p>
    <div className='social-icons'>
      <a href="https://github.com/ginikaolua"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ginika-olua-a13a60203/"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/ginikaolua/"><FaInstagram /></a>
        
    </div>
      </div>
      
    </footer>
  );
};

export default Footer;
