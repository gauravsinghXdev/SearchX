// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

// const DocumentEditor = ({ initialContent }) => {
//   const [content, setContent] = useState(initialContent);


  

//   return (
//     <div>
//       <ReactQuill
//         value={content}
//         onChange={setContent}
//         theme="snow"
//         style={{ height: '400px', marginBottom: '20px', color: 'black' }}
//         />
//     </div>
//   );
// };


// export default DocumentEditor;

import React, { useState, useEffect } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css'; // Import Draft.js styles

const DocumentEditor = ({ initialContent }) => {
  // Initial editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Update editor state when initialContent changes
  useEffect(() => {
    if (initialContent) {
      // Check if initialContent is a valid string
      const contentState = ContentState.createFromText(initialContent || '');
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [initialContent]); // This will trigger when `initialContent` prop changes

  return (
    <div>
      {/* Draft.js Editor */}
      <div style={{ border: '1px solid #ccc', minHeight: '400px', padding: '10px',color:"black" }}>
        <Editor 
          editorState={editorState}
          onChange={setEditorState} 
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
