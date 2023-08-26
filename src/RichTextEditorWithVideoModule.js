import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Helmet } from 'react-helmet';
import 'react-quill/dist/quill.snow.css';

const RichTextEditorWithVideoModule = () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},
                {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ]
    }

    return <>
        <Helmet>
            <meta http-equiv="Content-Security-Policy" content="frame-src 'self' data: https" />
        </Helmet>
        <ReactQuill className="reactQuill" modules={modules} theme="snow" value={value} onChange={setValue} />
    </>;
};

export default RichTextEditorWithVideoModule;
