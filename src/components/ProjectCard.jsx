
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';


const ProjectCard = ({ id,title, description, techStack, codeLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="h-100 shadow-sm rounded project-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0,20)}</Card.Text>
          <Card.Text><strong>Tech Stack:</strong> {techStack}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
           <Link to={`/projects/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
          <Button variant="dark" href={codeLink} target="_blank">GitHub</Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
