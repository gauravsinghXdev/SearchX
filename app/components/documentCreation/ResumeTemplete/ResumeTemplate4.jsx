import React from 'react';

const ResumeTemplate4 = ({ resumeText }) => {
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '30px', borderBottom: '1px dashed #FF5733', paddingBottom: '15px' }}>
        <h3 style={{ color: '#FF5733', fontSize: '20px' }}>{title}</h3>
        <p style={{ color: '#333', fontSize: '16px' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#F9F9F9', borderRadius: '10px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Georgia, serif' }}>
      {sections}
    </div>
  );
};

export default ResumeTemplate4;
