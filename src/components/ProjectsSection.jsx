
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

function ProjectsSection() {
  // 1. STATE: The "Memory"
  // 'projects' will store the list of repos we   from GitHub.
  const [projects, setProjects] = useState([]);
  
  // 'loading' tracks if we are still waiting for the data.
  const [loading, setLoading] = useState(true);

  // 2. EFFECT: The "Trigger"
  // useEffect runs code AFTER the component renders.
  useEffect(() => {
    
    // We define the function to get data
    const fetchProjects = async () => {
      try {
        console.log("Fetching from GitHub..."); // Check your console to see this!
        
        // This is the API Call to your real account
        const response = await fetch('https://api.github.com/users/AdhyaChauhan/repos');
        
        // Convert the raw response into JSON data we can use
        const data = await response.json();
        
        // Save the data into our state memory
        setProjects(data);
        
        // Turn off the loading message
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Run the function we just defined
    fetchProjects();

  }, []); // The empty [] means "Only run this ONE time when the page loads"

  // 3. RENDER: The "UI"
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