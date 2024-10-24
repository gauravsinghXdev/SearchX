import React from 'react';

const ResumeTemplate3 = ({ resumeText }) => {
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '25px' }}>
        <h3 style={{ fontSize: '24px', color: '#222', margin: '5px 0' }}>{title}</h3>
        <p style={{ color: '#666', lineHeight: '1.6em' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '40px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '750px', margin: 'auto', fontFamily: 'Helvetica, sans-serif' }}>
      {sections}
    </div>
  );
};

export default ResumeTemplate3;
