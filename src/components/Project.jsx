
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projectData from './projectData';

const Project = () => {
  return (
    <div className="py-5 backg" >
      <h2 className="text-center mb-4">Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectData.map((project, index) => (
          <Col key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
