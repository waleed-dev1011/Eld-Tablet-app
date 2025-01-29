import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    content: {
      padding: mvs(16),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: mvs(30),
    },
    logo: {
      width: mvs(60),
      height: mvs(60),
    },
    invoiceInfo: {
      alignItems: 'flex-end',
    },
    invoiceNumber: {
      fontSize: mvs(18),
      fontWeight: 'bold',
    },
    date: {
      color: '#666',
      marginTop: mvs(5),
    },
    infoGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: mvs(20),
    },
    infoColumn: {
    //   flex: 1,
    //   marginRight: mvs(10),
    },
    label: {
      color: '#666',
    //   marginBottom: mvs(5),
      fontSize: mvs(12),
    },
    value: {
      fontSize: mvs(14),
textAlign:"center"
    },
    table: {
      marginTop: mvs(10),
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 8,
    },
    tableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: mvs(10),
      backgroundColor: '#f8f9fa',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },

    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: mvs(15),
    },
  
    periodText: {
      color: '#666',
    //   fontSize: mvs(12),
    },
    priceText: {
      fontWeight: 'bold',
    },
    totalSection: {
      marginTop: mvs(10),
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: mvs(20),
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: mvs(10),
    },
    totalLabel: {
    //   color: '#666',
    },
    totalValue: {
      fontWeight: 'bold',
    },
    footer: {
      marginTop: mvs(30),
      paddingTop: mvs(20),
      marginBottom: mvs(10),
    },
    totalRow1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: mvs(10),
      borderTopWidth: 1,
    },
    footerText: {
      color: '#666',
      fontSize: mvs(12),
      marginBottom: mvs(5),
    },
   
    pageNumber: {
      position: 'absolute',
      bottom: mvs(10),
      right: mvs(20),
      fontSize: mvs(12),
      color: '#666',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default styles;