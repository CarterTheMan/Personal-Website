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
            {/* <iframe src={'/resume.pdf'} className='resume-image' /> */}
            <object data="./resume.pdf" type="application/pdf" className='resume-image' width="100%" height="100%" />
        </div>
    );
}