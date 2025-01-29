// // InvoicePDFGenerator.js
// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
// import base64js from 'base64-js';
// import RNFS from 'react-native-fs';
// import { Platform } from 'react-native';

// const generateAndSavePDF = async () => {
//     try {

//       const pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage([600, 400]);
//       const { height } = page.getSize();
//       const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  

//       page.drawText(`Invoice: ${invoice.invoiceNumber}`, { x: 50, y: height - 50, font, size: 30 });
//       page.drawText(`Client: ${client?.firstName} ${client?.lastName}`, { x: 50, y: height - 100, font, size: 20 });
//       page.drawText(`Transaction Date: ${formattedDate}`, { x: 50, y: height - 150, font, size: 20 });
//       page.drawText(`License Number: ${invoice.license.licenseNumber}`, { x: 50, y: height - 200, font, size: 20 });
//       page.drawText(`Amount: $${invoice.amount}`, { x: 50, y: height - 250, font, size: 20 });
  

//       page.drawText(`Payment Method: ${invoice?.paymentMethod?.type}`, { x: 50, y: height - 300, font, size: 20 });
//       page.drawText(`Organization: ${client?.organizationName}`, { x: 50, y: height - 350, font, size: 20 });
//       page.drawText(`Purchase Email: ${client?.email}`, { x: 50, y: height - 400, font, size: 20 });
//       page.drawText(`Subscription Start: ${invoice.license.subscriptionStart}`, { x: 50, y: height - 450, font, size: 20 });
//       page.drawText(`Subscription End: ${invoice.license.subscriptionEnd}`, { x: 50, y: height - 500, font, size: 20 });
  
//       page.drawText(`Description: 1 ${invoice?.license?.plan === 'ANNUAL' ? 'year' : 'MONTH'} license purchase - Device type ${invoice?.license?.device?.type}`, { x: 50, y: height - 550, font, size: 20 });
//       page.drawText(`Period: From ${invoice.license.subscriptionStart} to ${invoice.license.subscriptionEnd}`, { x: 50, y: height - 600, font, size: 20 });
//       page.drawText(`Price: $${invoice.amount}`, { x: 50, y: height - 650, font, size: 20 });
//       const pdfBytes = await pdfDoc.save();
//       const pdfBase64 = base64js.fromByteArray(pdfBytes);
//       const downloadPath = Platform.OS === 'ios' 
//         ? `${RNFS.DocumentDirectoryPath}`
//         : `${RNFS.DownloadDirectoryPath}`;
  
//       const fileName = `invoice_${invoice.invoiceNumber}_${Date.now()}.pdf`;
//       const filePath = `${downloadPath}/${fileName}`;
  
//       await RNFS.writeFile(filePath, pdfBase64, 'base64');
//       Alert.alert(
//         'Success',
//         `Invoice downloaded successfully!\nLocation: ${filePath}`,
//         [{ text: 'OK' }]
//       );
  
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       Alert.alert(
//         'Error',
//         'Failed to download invoice. Please try again.',
//         [{ text: 'OK' }]
//       );
//     }
//   };

//   export default generateAndSavePDF 