import React from "react";
import { useQuery } from "@apollo/client";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import { MyButton } from "../../../components/molicules";
import { HomeHeader } from "../../../components/molicules/home-header";
import Bold from "../../../typography/bold-text";
import { GET_LICENCES } from "../../../services/query/invoiceQuery";
import RNFS from "react-native-fs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import base64js from "base64-js";
import styles from "./style";
import Regular from "../../../typography/regular-text";
import { colors } from "../../../config/colors";
import SemiBold from "../../../typography/semi-bold-text";
import Medium from "../../../typography/medium-text";

const InvoiceScreen = ({ route }) => {
  const { invoiceNumber } = route.params;

  const { data, loading, error } = useQuery(GET_LICENCES, {
    variables: { invoiceNumber }, // Ensure you're passing the correct variables
  });

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>
          Error fetching invoices: {error.message}
        </Text>
      </View>
    );
  }

  const invoice = data?.getLicenses?.find(
    (license) => license.invoices.some((inv) => inv.invoiceNumber === invoiceNumber)
  );
  
  const specificInvoice = invoice?.invoices.find(
    (inv) => inv.invoiceNumber === invoiceNumber
  );
  
  if (!invoice || !specificInvoice) {
    return (
      <View style={styles.center}>
        <Text>No invoice found for number: {invoiceNumber}</Text>
      </View>
    );
  }
 
  const client = invoice.client;
  const formattedDate = specificInvoice ? new Date(specificInvoice.issuedOn).toLocaleDateString() : "No date available";

  const generateAndSavePDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      const { height } = page.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      page.drawText(`Invoice: ${specificInvoice.invoiceNumber}`, {
        x: 50,
        y: height - 50,
        font,
        size: 30,
      });

      page.drawText(`Client: ${client?.firstName} ${client?.lastName}`, {
        x: 50,
        y: height - 100,
        font,
        size: 20,
      });
      page.drawText(`Transaction Date: ${formattedDate}`, {
        x: 50,
        y: height - 150,
        font,
        size: 20,
      });
      page.drawText(`License Number: ${invoice.licenseNumber}`, {
        x: 50,
        y: height - 200,
        font,
        size: 20,
      });
      page.drawText(`Amount: $${specificInvoice?.amount}`, {
        x: 50,
        y: height - 250,
        font,
        size: 20,
      });
      page.drawText(`Payment Method: ${specificInvoice?.paymentMethod?.type}`, {
        x: 50,
        y: height - 300,
        font,
        size: 20,
      });
      page.drawText(`Organization: ${client?.organizationName}`, {
        x: 50,
        y: height - 350,
        font,
        size: 20,
      });
      page.drawText(`Purchase Email: ${client?.email}`, {
        x: 50,
        y: height - 400,
        font,
        size: 20,
      });
      page.drawText(`From: ${invoice?.subscriptionStart}`, {
        x: 50,
        y: height - 450,
        font,
        size: 20,
      });
      page.drawText(`to: ${invoice?.subscriptionEnd}`, {
        x: 50,
        y: height - 500,
        font,
        size: 20,
      });

      page.drawText(
        `Description: 1 ${
          invoice?.plan === "ANNUAL" ? "year" : "MONTH"
        } license purchase - Device type ${invoice?.device?.type}`,
        { x: 50, y: height - 550, font, size: 20 }
      );
      page.drawText(
        `Period: From ${invoice?.subscriptionStart} to ${invoice?.subscriptionEnd}`,
        { x: 50, y: height - 600, font, size: 20 }
      );
      page.drawText(`Price: $${specificInvoice?.amount}`, {
        x: 50,
        y: height - 650,
        font,
        size: 20,
      });

      const pdfBytes = await pdfDoc.save();
      const pdfBase64 = base64js.fromByteArray(pdfBytes);

      const downloadPath =
        Platform.OS === "ios"
          ? `${RNFS.DocumentDirectoryPath}`
          : `${RNFS.DownloadDirectoryPath}`;

      const fileName = `invoice_${specificInvoice.invoiceNumber}_${Date.now()}.pdf`;
      const filePath = `${downloadPath}/${fileName}`;

      await RNFS.writeFile(filePath, pdfBase64, "base64");

      Alert.alert(
        "Success",
        `Invoice downloaded successfully!\nLocation: ${filePath}`,
        [{ text: "OK" }]
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
      Alert.alert("Error", "Failed to download invoice. Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <HomeHeader back title="Invoice Screen" noti />
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/images/drawer/logo.png")}
            style={styles.logo}
          />
          <View style={styles.invoiceInfo}>
            <Text style={styles.invoiceNumber}>{specificInvoice.invoiceNumber}</Text>
            <SemiBold style={styles.date}>Transaction Date: {formattedDate}</SemiBold>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View>
            <Bold style={styles.label}>Payment From</Bold>
            <Medium style={styles.value}>{`${client?.firstName} ${client?.lastName}`}</Medium>
          </View>
          <View>  
            <Bold style={styles.label}>Organization Name</Bold>
            <Medium style={styles.value}>{client?.organizationName}</Medium>
          </View>
          <View>
            <Bold style={styles.label}>Purchase Email</Bold>
            <Bold style={styles.value}>{client?.email}</Bold>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View>
            <Bold style={styles.label}>License Number</Bold>
            <Bold style={styles.value}>{invoice?.licenseNumber}</Bold>
          </View>
          <View>
            <Bold style={styles.label}>Billing Plan</Bold>
            <Medium style={styles.value}>{invoice?.plan}</Medium>
          </View>
          <View>
            <Bold style={styles.label}>Payment Method</Bold>
            <Medium style={styles.value}>{specificInvoice?.paymentMethod?.type}</Medium>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Bold>Description</Bold>
            <Bold>Price</Bold>
          </View>
          <View style={styles.tableRow}>
            <View>
              <Text>
                {`1 ${invoice?.plan === "ANNUAL" ? "year" : "month"} license purchase - Device type ${invoice?.device?.type}`}
           

              </Text>
              <Regular style={styles.periodText}>
                From {invoice?.subscriptionStart} to {invoice?.subscriptionEnd}
              </Regular>
            </View>
            <Text style={styles.priceText}>${specificInvoice?.amount}</Text>
          </View>
        </View>

        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Bold style={styles.totalLabel}>Subtotal:</Bold>
            <Bold style={styles.totalValue}>${specificInvoice?.amount}</Bold>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax: (0%)</Text>
            <Text style={styles.totalValue}>$0</Text>
          </View>
        </View>

        <View style={styles.totalRow1}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>${specificInvoice?.amount}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            WallyTech Nigeria Limited Company, Ground Floor Shehu Shagari Way,
            Maitama
          </Text>
          <Text style={styles.footerText}>VAT: IE9740425P</Text>
        </View>
        <MyButton title="Download Invoice PDF" onPress={generateAndSavePDF} />
      </View>
      <Bold style={styles.pageNumber}>Page 1 of 1</Bold>
    </View>
  );
};

export default InvoiceScreen;
