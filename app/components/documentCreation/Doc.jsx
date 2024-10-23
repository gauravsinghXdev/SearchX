"use client"

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const Doc = ({ initialContent }) => {
    const [content, setContent] = useState(initialContent);
    return (
        <div>
            <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                style={{ height: '400px' }}
            />
        </div>
    );
};
export default Doc;