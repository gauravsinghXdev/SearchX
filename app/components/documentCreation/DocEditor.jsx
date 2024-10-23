import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const DocumentEditor = ({ initialContent }) => {
    const [content, setContent] = useState(initialContent); // Initialize content state with initialContent prop

    return (
        <div>
            <ReactQuill
                value={content} // Set the editor's value to content state
                onChange={setContent} // Update content state when the editor changes
                theme="snow" // Use the snow theme for the editor
                style={{ height: '400px' }} // Set the height of the editor
            />
        </div>
    );
};

export default DocumentEditor;