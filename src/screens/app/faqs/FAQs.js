import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import Regular from "../../../typography/regular-text";
import Bold from "../../../typography/bold-text";
import { mvs } from "../../../config/metrices";

const FAQItem = React.memo(({ faq, index, expandedIndexes, toggleExpand }) => {
  const isExpanded = expandedIndexes.has(index);
  return (
    <View style={[styles.faqContainer, isExpanded && styles.expandedContainer]}>
      <TouchableOpacity
        style={styles.faqHeader}
        onPress={() => toggleExpand(index)}
      >
        <Regular style={styles.question}>{faq.question}</Regular>
        <Regular
          style={[styles.icon, isExpanded ? styles.upIcon : styles.downIcon]}
        >
          {isExpanded ? "-" : "+"}
        </Regular>
      </TouchableOpacity>
      {isExpanded && <Bold style={styles.answer}>{faq.answer}</Bold>}
    </View>
  );
});

const FAQs = ({ navigation }) => {
  const [expandedIndexes, setExpandedIndexes] = useState(new Set());

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'To create an account, click on the "Sign Up" button on the login screen, fill in your details, and follow the instructions.',
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by navigating to the catalog, selecting items, and adding them to your cart. Once ready, proceed to checkout.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "We support various payment methods, including credit cards, debit cards, and popular digital wallets.",
    },
    {
      question: "How do I track my order?",
      answer:
        'You can track your order by going to the "Orders" section in the app. Each order will have a tracking status and details.',
    },
    {
      question: "Can I change or cancel an order?",
      answer:
        'Yes, you can change or cancel an order before it is processed. Visit the "Orders" section to manage your order.',
    },
    {
      question: "How can I contact customer support?",
      answer:
        'You can contact customer support via the "Help & Support" section in the app. Reach out to us via email or chat.',
    },
  ];

  const toggleExpand = useCallback((index) => {
    setExpandedIndexes((prevIndexes) => {
      const newExpandedIndexes = new Set(prevIndexes);
      if (newExpandedIndexes.has(index)) {
        newExpandedIndexes.delete(index);
      } else {
        newExpandedIndexes.add(index);
      }
      return newExpandedIndexes;
    });
  }, []);

  const renderFAQItem = ({ item, index }) => (
    <FAQItem
      faq={item}
      index={index}
      expandedIndexes={expandedIndexes}
      toggleExpand={toggleExpand}
    />
  );

  return (
    <View style={styles.container}>
      <HomeHeader back title="FAQs" noti />
      <FlatList
        data={faqs}
        renderItem={renderFAQItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: mvs(16),
  },
  faqContainer: {
    marginBottom: mvs(15),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey + 40,
    paddingBottom: mvs(10),
    padding: mvs(3),
  },
  expandedContainer: {
    backgroundColor: colors.grey + 30,
    borderRadius: mvs(8),
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: mvs(20),

  },
  upIcon: {
    color: colors.black,
  },
  downIcon: {
    color: colors.black,
  },
  answer: {

    fontSize: mvs(15),
 
  },
  question: {
    fontSize: mvs(16),
    color: colors.black,
  
  },
});

export default FAQs;
