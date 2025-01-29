import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Header2, RidesButton, TextField } from "../../../components/molicules";
import { DropdownComponent } from "../../../components/molicules/DropDowncomponent";
import FaqButton from "../../../components/molicules/FaqButton";
import styles from "./styles";
import { CopySvg } from "../../../assets/icons/user";

const HelpCenter = () => {
  const [active, setActive] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const data = [
    {
      text: "Customer Service",
      title: "13243564483",
    },
    {
      text: "Whatsapp Number",
      title: "13243564483",
    },
    {
      text: "Website",
      title: "www.google.com",
    },
    {
      text: "Facebook",
      title: "www.facebook.com",
    },
  ];

  const data2 = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      DropdownText:
        "Lectus proin nibh nisl condimentum id. Nisl pretium fusce id velit ut. Nulla facilisi nullam vehicul",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      DropdownText:
        "Lectus proin nibh nisl condimentum id. Nisl pretium fusce id velit ut. Nulla facilisi nullam vehicul",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      DropdownText:
        "Lectus proin nibh nisl condimentum id. Nisl pretium fusce id velit ut. Nulla facilisi nullam vehicul",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      DropdownText:
        "Lectus proin nibh nisl condimentum id. Nisl pretium fusce id velit ut. Nulla facilisi nullam vehicul",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      DropdownText:
        "Lectus proin nibh nisl condimentum id. Nisl pretium fusce id velit ut. Nulla facilisi nullam vehicul",
    },
  ];

  return (
    <ScrollView style={styles.cont}>
      <View style={styles.header}>
        <Header2 title="Help Center" />
      </View>
      <FaqButton title1="FAQ" title2="Contact Us" {...{ active, setActive }} />
      {active === 1 ? (
        <View style={styles.contactUs}>
          {data?.map((item, index) => (
            <View key={index} style={styles.contactItem}>
              <Text style={styles.text2}>{item?.text}</Text>
              <TextField
                copy={
                  item?.text != "Website" &&
                  item?.text != "Facebook" && <CopySvg />
                }
                itemm={item}
                touchable3={true}
                help={true}
              />
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.faqContainer}>
          {data2?.map((item, index) => (
            <DropdownComponent
              key={index}
              title={item.title}
              isActive={expandedIndex === index}
              onPress={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <Text>{item.DropdownText}</Text>
            </DropdownComponent>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default HelpCenter;
