import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Portfolio.css'; // Ensure glassmorphism styles are defined here

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'TechNova Solutions',
    duration: 'Jan 2023 - Present',
    description: [
      'Developed responsive web interfaces using React and Bootstrap.',
      'Collaborated with backend developers to integrate APIs.',
      'Improved UI performance by optimizing React components.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'CodeCraft Labs',
    duration: 'Jul 2022 - Dec 2022',
    description: [
      'Built RESTful APIs using Node.js and Express.',
      'Integrated MongoDB for backend data storage.',
      'Assisted in deploying full-stack applications to Firebase.'
    ]
  },
  {
    role: 'Web Developer Freelancer',
    company: 'Freelance',
    duration: 'Jan 2022 - Jun 2022',
    description: [
      'Created custom websites for small businesses.',
      'Implemented responsive design with Tailwind CSS.',
      'Used GitHub for version control and project collaboration.'
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const Experience = () => {
  return (
    <div className="py-5 sbg text-light">
      <h2 className="text-center mb-4">Professional Experience (dummy)</h2>
      <Row className="g-4">
        {experiences.map((exp, index) => (
          <Col md={6} key={index}>
            <motion.div
              className="glass-card-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index}
            >
              <Card className="glass-card text-light shadow">
                <Card.Body>
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {exp.company} | <small>{exp.duration}</small>
                  </Card.Subtitle>
                  <ul className="mt-3">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
