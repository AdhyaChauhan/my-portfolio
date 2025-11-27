
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

function ProjectsSection() {

  const [projects, setProjects] = useState([]);
  
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    const fetchProjects = async () => {
      try {
        console.log("Fetching from GitHub..."); 
        
        const response = await fetch('https://api.github.com/users/AdhyaChauhan/repos');
        
        const data = await response.json();
        
        setProjects(data);
        
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProjects();

  }, []); 

  return (
    <section>
      {/* This container div ensures the content is CENTERED */}
      <div className="container">
        
        <h2>My Projects</h2>

        {/* Conditional Rendering: Show "Loading..." OR the List */}
        {loading ? (
          <p>Loading projects from GitHub...</p>
        ) : (
          <div className={styles.projectsGrid}>
            
            {/* The .map() Loop */}
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} // Unique ID for React
                
                // GitHub uses 'name', not 'title'
                title={project.name} 
                
                // If description is missing (null), use backup text
                description={project.description || "No description provided on GitHub."} 
                
                // GitHub API doesn't give images, so we use a placeholder
                imageUrl="https://via.placeholder.com/300x180?text=Project"
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectsSection;