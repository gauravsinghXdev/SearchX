import React from 'react';

const ResumeTemplate5 = ({ resumeText }) => {
  const sections = resumeText.split('\n\n').map((section, index) => {
    const [title, ...content] = section.split('\n');
    return (
      <div key={index} style={{ marginBottom: '30px', padding: '10px', backgroundColor: '#333', borderRadius: '8px', color: '#fff' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#FFD700' }}>{title}</h3>
        <p style={{ margin: '0', color: '#ccc', lineHeight: '1.5em' }}>{content.join('\n')}</p>
      </div>
    );
  });

  return (
    <div style={{ padding: '30px', backgroundColor: '#222', borderRadius: '12px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Courier New, monospace' }}>
      {sections}
    </div>
  );
};

export default ResumeTemplate5;
