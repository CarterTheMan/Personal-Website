import './Resume.css';
import { useState } from 'react';


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