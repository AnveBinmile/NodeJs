// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
const fs = require("fs");
const{PDFDocument, StandardFonts, rgb} = require('pdf-lib');
async function createPDFDocument() {
  const pdfDoc = await PDFDocument.create();
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText("Creating PDFs in via pdf-lib library", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: helvetica,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('./pdfFiles/target.pdf',pdfBytes);
}

createPDFDocument();