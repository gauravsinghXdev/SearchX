import React from 'react';

const ResumeTemplate2 = ({ resumeText }) => {
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '20px', padding: '10px', borderLeft: '5px solid #007BFF' }}>
        <h3 style={{ color: '#007BFF', fontSize: '22px', marginBottom: '10px' }}>{title}</h3>
        <p style={{ color: '#444', fontSize: '16px' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', maxWidth: '700px', margin: '20px auto', fontFamily: 'Verdana, sans-serif' }}>
      {sections}
    </div>
  );
};

export default ResumeTemplate2;
