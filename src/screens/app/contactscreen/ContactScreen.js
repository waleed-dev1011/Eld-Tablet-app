import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import Bold from "../../../typography/bold-text";
import { CopySvg } from "../../../assets/icons/user";
import Medium from "../../../typography/medium-text";

const ContactScreen = () => {
  const handleCopy = (text) => {
    Clipboard.setString(text);
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <HomeHeader back title="Contact Us" noti />
      <View style={{ padding: mvs(16) }}>
        <View style={styles.section}>
          <Medium style={styles.label}>Customer Service</Medium>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => handleCopy("(704) 555-0127")}
          >
            <Text style={styles.valueText}>(704) 555-0127</Text>
            <CopySvg />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Medium style={styles.label}>Whatsapp Number</Medium>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => handleCopy("+231655510509")}
          >
            <Text style={styles.valueText}>+23165551 05 09</Text>
            <CopySvg />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Medium style={styles.label}>Website</Medium>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => handleLinkPress("https://WalleyTech.org")}
          >
            <Text style={styles.linkText}>https://WalleyTech.org</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Medium style={styles.label}>Facebook</Medium>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() =>
              handleLinkPress("https://www.facebook.com/WalleyTech")
            }
          >
            <Text style={styles.linkText}>www.facebook.com/WalleyTech</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section: {
    paddingTop: mvs(20),
  },
  label: {
    fontSize: 16,
    // color: "#666",
    marginBottom: 5,
  },
  copyButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  valueText: {
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    fontSize: 16,
    color: "#0066cc",
  },
});

export default ContactScreen;
