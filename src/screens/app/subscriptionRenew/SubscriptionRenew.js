import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Image } from "react-native-elements";
import { Close } from "../../../assets/images";
import styles from "./styles";

const SubscriptionRenew = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState("Annual");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    console.log(`Selected plan: ${plan}`);
  };

  const handlePress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    navigation.navigate("RenewScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBackground}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backIcon} onPress={handlePress}>
            <Image source={Close} style={styles.image1} />
          </TouchableOpacity>

          <Text style={styles.header}>
            Optimize Your Fleet with Our Subscription Plans!
          </Text>
        </View>
      </View>
      <View style={styles.plansContainer}>
        <TouchableOpacity
          style={[
            styles.planCard,
            selectedPlan === "Monthly" && styles.selectedPlan,
          ]}
          onPress={() => handlePlanSelect("Monthly")}
        >
          <Text style={[styles.planType, selectedPlan === "Monthly"]}>
            Monthly
          </Text>
          <Text style={[styles.price, selectedPlan === "Monthly"]}>
            $99/Month
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.planCard,
            selectedPlan === "Annual" && styles.selectedPlan,
          ]}
          onPress={() => handlePlanSelect("Annual")}
        >
          <View style={styles.bestValueContainer}>
            <Text style={styles.bestValueText}>Best Value</Text>
          </View>

          <Text style={[styles.planType, selectedPlan === "Annual"]}>
            Annual
          </Text>
          <Text style={[styles.price, selectedPlan === "Annual"]}>
            $999/Year
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.featuresContainer}>
          <Text style={styles.includedText}>Included with:</Text>
          {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
            <View style={styles.featureItem} key={index}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.termsText}>
          By tapping Continue, you will be charged. Your subscription will
          auto-renew for the same price and package length until you cancel via
          App Store settings.
        </Text>

          <TouchableOpacity
             style={styles.saveButton}
             onPress={handleSave}
   
           >
             <Text style={styles.saveButtonText}>Subscribe</Text>
           </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionRenew;
