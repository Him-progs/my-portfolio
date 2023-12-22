// pages/projects.js

import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Projects Page</h1>
      {/* Add your project details here */}
    </motion.div>
  );
};

export default ProjectsPage;
