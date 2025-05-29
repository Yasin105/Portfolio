
import './Portfolio.css'
import background from '../assets/Background.png'


const Portfolio = () => {
  return (
    <div className='container-fluid bg py-5'>
      <div className='row align-items-center'>
        {/* Text Section */}
        <div className='col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start px-4'>
          <h1 className='title'>Welcome.</h1>
          <h1 className='title'>I'm Yasin.</h1>
          <h1 className='title'>A Frontend Developer.</h1>
          <p className='title'>
            I am a Frontend Developer with a passion for creating beautiful and
            functional web applications. I have experience in HTML, CSS,
            JavaScript, and React.js. I am always eager to learn new
            technologies and improve my skills.
          </p>
          <p className='title'>
            I am currently looking for new opportunities to work on exciting
            projects and collaborate with talented teams. If you are interested
            in working with me, please feel free to reach out!
          </p>
          <p className='title'>Thank you for visiting my portfolio!</p>
          <p className='title'>You can check my work in Projects.</p>
        </div>
        <div className='col-12 col-md-6 text-center'>
          <img
            src={background}
            alt='Portfolio visual'
            className='img-fluid'
            style={{ maxHeight: '500px', width: '100%', objectFit: 'cover ' }}
          />
        </div>
      </div> 
    </div>
    
  );
};

export default Portfolio;
