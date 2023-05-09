import React from 'react';
import { saveAs } from 'file-saver';

const FileDownloader = () => {
    const handleDownload = () => {
        // Your file URL goes here
        const fileUrl = 'https://example.com/file.pdf';

        // Fetch the file and save it using FileSaver.js
        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => saveAs(blob, 'file.pdf'))
            .catch(error => console.error(error));
    };

    return (
        <button onClick={handleDownload}>Download File</button>
    );
};

export default FileDownloader;
