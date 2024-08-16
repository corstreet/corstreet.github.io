import './Home.scss';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Resume from '../resume_2024.pdf'

function Home() {
  return (
    <div className="container">
      <Navbar home={true} />
      <div className="info">
        <h1 className='info__h1'>Corwin Street</h1>
        <div className="info__description">
          Software Engineer \ Full Stack Developer \ UI/React Engineer \ UX Designer \ Project Manager
        </div>
        <div className="info__description">
          Apple | KB Home | Walmart Labs | Refersion 
        </div>
      </div>
      <div className="body-nav">
        <Link to="/work" className="body-nav__link">WORK</Link>
        <a href={Resume} className="body-nav__link">ABOUT</a>
        <a className="body-nav__link" href='mailto: corstreet@gmail.com'>CONTACT</a>
      </div>
    </div>
  );
}

export default Home;
