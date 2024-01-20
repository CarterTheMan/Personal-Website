import './Resume.css';
import { pdfjs } from 'react-pdf';
import ReactPDF from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';


export default function MyApp() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div className='resume-div'>
            <iframe src={process.env.PUBLIC_URL + '/resume.pdf'} className='resume-image' />
        </div>
    );
}