import React from 'react';
import styles from './ProjectCard.module.css'; // 1. Import the styles

// 2. We are "destructuring" the props object.
// Instead of (props), we use ({ title, description, imageUrl })
// This pulls the data out by name.
function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="container">
      {/* 3. Use the props to fill in dynamic data */}
      <img 
        src={imageUrl} 
        alt={title} 
        className={styles.cardImage} 
      />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;