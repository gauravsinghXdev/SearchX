

import React from 'react';

const ResumeComponent = ({ resumeText }) => {
  
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#f0f0f0', textAlign: 'left' }}>{title}</h3>
        <p style={{ margin: '0', color: '#d0d0d0', textAlign: 'left' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '20px', lineHeight: '1.5em', background: '#2C2C2C', borderRadius: '8px' }}>
      {sections}
    </div>
  );
};

export default ResumeComponent;