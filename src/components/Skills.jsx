

import {
  Row,
  Col,
  Card,
  ProgressBar,
  Badge,
  Accordion
} from 'react-bootstrap';
import { FaTools, FaCertificate, FaCode, FaComments, FaLanguage } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <div className="py-5 sbg">
      <h2 className="text-center mb-4">Skills & Certifications</h2>

      <Accordion defaultActiveKey="0" alwaysOpen className="accordion-glass">
        <Accordion.Item eventKey="0">
          <Accordion.Header><FaCode className="me-2" />Technical Skills</Accordion.Header>
          <Accordion.Body>
            <Row className="g-4">
              <Col>
                <motion.div
                  className="card-wrapper"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  custom={0}
                >
                  <Card className="glass-card text-light shadow-sm">
                    <Card.Body>
                      <ul>
                        {['Frontend Development', 'React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs'].map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><FaComments className="me-2" />Soft Skills</Accordion.Header>
          <Accordion.Body>
            <Row className="g-4">
              <Col>
                <motion.div className="card-wrapper" initial="hidden" whileInView="visible" variants={fadeInUp} custom={1}>
                  <Card className=" glass-card bg-dark text-light shadow-sm">
                    <Card.Body>
                      <ul>
                        {['Critical Thinking', 'Problem-Solving', 'Teamwork', 'Communication', 'Time Management', 'Adaptability'].map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header ><FaCertificate className="me-2" />Certifications</Accordion.Header>
          <Accordion.Body >
            <Row className="g-4">
              <Col>
                <motion.div className="card-wrapper" initial="hidden" whileInView="visible" variants={fadeInUp} custom={2}>
                  <Card className="glass-card bg-dark text-light shadow-sm">
                    <Card.Body>
                      <ul>
                        {['React JS Frontend Development', 'Full Stack Web Development', 'JavaScript Algorithms and Data Structures', 'Responsive Web Design', 'HTML, CSS, and JS for Web Developers', 'Introduction to Node.js', 'Introduction to MongoDB', 'Introduction to Express.js'].map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header ><FaTools className="me-2" />Tools</Accordion.Header>
          <Accordion.Body>
            <Row className="g-4">
              <Col>
                <motion.div className="card-wrapper" initial="hidden" whileInView="visible" variants={fadeInUp} custom={3}>
                  <Card className="glass-card bg-dark text-light shadow-sm">
                    <Card.Body className=" d-flex flex-wrap gap-2">
                      {['VS Code', 'Postman', 'GitHub', 'Firebase', 'Bootstrap', 'React Bootstrap', 'Tailwind CSS', 'Framer Motion', 'React Router', 'React Toastify', 'React Swiper', 'React Icons', 'React Hook Form', 'Axios'].map((tool, index) => (
                        <Badge className='glass-card' key={index}>{tool}</Badge>
                      ))}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><FaLanguage className="me-2" />Languages</Accordion.Header>
          <Accordion.Body>
            <Row className="g-4">
              <Col>
                <motion.div className="card-wrapper" initial="hidden" whileInView="visible" variants={fadeInUp} custom={4}>
                  <Card className="glass-card  bg-dark text-light shadow-sm">
                    <Card.Body>
                      {[{ lang: 'English', level: 70 }, { lang: 'Urdu', level: 80 }, { lang: 'Punjabi', level: 100 }, { lang: 'Chinese', level: 20 }, { lang: 'Arabic', level: 20 }].map(({ lang, level }, index) => (
                        <div key={index} className="mb-3">
                          <strong>{lang}</strong>
                          <ProgressBar now={level} label={`${level}%`} variant="info" />
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Skills;
