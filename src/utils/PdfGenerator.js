import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export const generatePDF = async (elementId, fileName) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            logging: false,
            useCORS: true,
        });

        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${fileName}.pdf`);
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};