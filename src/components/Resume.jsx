import './Resume.css';

import html2pdf from 'html2pdf.js';

const Resume = () => {
     const handlePrint = () => {
        const resumeContent = document.querySelector('.contain');
        const printWindow = window.open('', '', 'height=800,width=800');
        printWindow.document.write('<html><head><title>Print Resume</title>');
        printWindow.document.write('<link rel="stylesheet" href="Resume.css" />');
        printWindow.document.write('</head><body>');
        printWindow.document.write(resumeContent.outerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };

    const downloadPDF = () => {
        const resumeElement = document.querySelector('.contain');
        const opt = {
            margin: 0.5,
            filename: 'Muhammad_Yasin_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(resumeElement).save();
    }

    return (
        <div className='backg'>
            <h1>Resume</h1>
            <div className='contain'>
                <h2>Muhammad Yasin</h2>
                <h3>React Developer</h3>
                <ul className='ull contact'>
                    <li>yasin.akram105@gmail.com</li>
                    <li>+923074595529</li>
                    <li>Lahore, Pakistan</li>
                </ul>
                <p>I'm a React developer with a passion for creating dynamic and responsive web applications. I have experience in building user interfaces, managing state, and integrating APIs. I'm always eager to learn new technologies and improve my skills.</p>
                <h3 className='pro'>Projects</h3>
                <ul className='ull projects'>
                    <li>Project 1: E-commerce website using React and Node.js</li>
                    <li>Project 2: An API to manage data in Database</li>
                    <li>Project 3: Personal Portfolio and Resume using React</li>
                    <li>Project 4: Tick-Tac-Toe game with help of AI </li>
                </ul>
                <h3 className='pro'>Skills</h3>
                <p className='p1'>Technical Skills</p>
                <ul className='ull '>
                    <li>Frontend Development</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>REST APIs</li>
                </ul>
                <p className='p1'>Soft Skills</p>
                <ul className='ull'>
                    <li>Critical thinking</li>
                    <li>Problem-solving</li>
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Time management</li>
                    <li>Adaptability</li>
                </ul>
                <h3 className='pro'>Certification</h3>
                <ul className='ull'>
                    <li>React Developer from PNY Training Institute</li>
                </ul>
                <h3 className='pro'>Education</h3>
                <p className='p2'>Bachelor's degree in Computer Science from Government College University, Faisalabad (2017-2021)<br />
                    CGPA: 3.7/4.0
                </p>
                <h3 className='pro'>Find me Online</h3>
                <ul className='ull social'>
                    <li><a href='https://www.linkedin.com/in/muhammad-yasin-abb40b203' target='_blank'>LinkedIn</a></li>
                    <li><a href='https://github.com/Yasin105' target='_blank'>GitHub</a></li>
                </ul>

            </div>
             <div className=" mt-2 mb-3 d-flex justify-content-center">
                <button className='btn btn-info me-2' onClick={handlePrint}>Print Resume</button>
                <button className='btn btn-info' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>


    )
}

export default Resume