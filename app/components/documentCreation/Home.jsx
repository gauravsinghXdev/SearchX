import { useState } from 'react';
import DocumentEditor from '../documentCreation/DocumentEditor';
import Link from 'next/link';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [editorContent, setEditorContent] = useState('');

    const handleGenerateDocument = async () => {
        try {
            const response = await fetch('http://192.168.1.46:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: inputText }),
            });

            if (response.ok) {
                const data = await response.json();
                setEditorContent(data.content);
            } else {
                console.error('Error fetching document:', response.statusText);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Document Generator</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your prompt..."
                rows={5}
                cols={50}
                style={{ marginBottom: '20px' }}
            />
            <button onClick={handleGenerateDocument}>Generate Document</button>
            {editorContent && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Document Editor</h2>
                    <DocumentEditor initialContent={editorContent} /> 
                </div>
            )}
            <Link href="/presentationPage">Go to Presentation Page</Link>
        </div>
    );
}
