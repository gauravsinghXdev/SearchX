import React from 'react';

const ResumeTemplate1 = ({ resumeText }) => {
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '30px' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#333', textTransform: 'uppercase', fontSize: '20px' }}>{title}</h3>
        <p style={{ margin: '0', color: '#555', fontSize: '16px', lineHeight: '1.5em' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '30px', backgroundColor: '#FAFAFA', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {sections}
    </div>
  );
};

export default ResumeTemplate1;
