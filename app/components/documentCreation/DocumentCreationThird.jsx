"use client";

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSearchParams } from 'next/navigation';

const DocumentCreationThird = () => {
    const searchParams = useSearchParams();
    const contentFromQuery = searchParams.get('content');
    const [content, setContent] = useState(contentFromQuery ? decodeURIComponent(contentFromQuery) : "");

    return (
        <div className="bg-[#1C1C1C] text-white">
            <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                style={{ height: '100vh' }}
            />
        </div>
    );
};

export default DocumentCreationThird;
