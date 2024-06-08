import React from 'react';
import ContentLoader from 'react-content-loader';

const ServicesLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Placeholder image */}
    <rect x="0" y="0" rx="13" ry="13" width="100%" height="200" /> 
    {/* Placeholder text */}
    <rect x="0" y="170" rx="12" ry="12" width="100%" height="30" /> 
  </ContentLoader>
);

export default ServicesLoader;
