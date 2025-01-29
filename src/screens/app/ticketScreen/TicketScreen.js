import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HomeHeader } from "../../../components/molicules/home-header";
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import Bold from "../../../typography/bold-text";
import Regular from "../../../typography/regular-text";

const TicketCard = ({
  status,
  ticketNumber,
  subject,
  description,
  date,
  navigation,
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return {
          backgroundColor: "#e8f5e9",
          color: "#2e7d32",
        };
      case "in progress":
        return {
          backgroundColor: "#fff3e0",
          color: "#e65100",
        };
      case "pending":
        return {
          backgroundColor: "#e3f2fd",
          color: "#1976d2",
        };
      default:
        return {
          backgroundColor: "#f5f5f5",
          color: "#757575",
        };
    }
  };

  const statusStyles = getStatusColor(status);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("TicketDetailView", {
          ticketNumber,
          status,
          subject,
          description,
          date,
        })
      }
    >
      <View style={styles.statusDateContainer}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusStyles.backgroundColor },
          ]}
        >
          <Regular style={[styles.statusText, { color: statusStyles.color }]}>
            {status}
          </Regular>
        </View>
        <Regular style={styles.date}>{date}</Regular>
      </View>
      <Bold style={styles.ticketNumber}>{ticketNumber}</Bold>
      <Text style={styles.subject}>{subject}</Text>
      <Regular
        style={styles.description}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {description}
      </Regular>
    </TouchableOpacity>
  );
};

const TicketList = ({ navigation }) => {
  const tickets = [
    {
      status: "Resolved",
      ticketNumber: "#122546",
      subject: "Device Issue",
      description:
        "Show here the description of ticket. Show here the description of ticket.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis at ante malesuada auctor. Proin vitae turpis vel odio facilisis bibendum a sed erat. Aenean non interdum lorem.    ",
      date: "12/03/2024 11:05 am",
    },
    {
      status: "In Progress",
      ticketNumber: "#122547",
      subject: "Map issue",
      description:
        "Show here the description of ticket. Show here the description of ticket.Duis vulputate eros in massa efficitur, a eleifend turpis posuere. Sed consequat vel nisl at efficitur. Integer posuere feugiat lorem et scelerisque. ",
      date: "12/02/2024 11:05 am",
    },
    {
      status: "Pending",
      ticketNumber: "#122548",
      subject: "Subscription issue",
      description:
        "Show here the description of ticket. Show here the description of ticket.Vivamus auctor dolor eu purus hendrerit, ac scelerisque ipsum dictum. Fusce vehicula urna et velit efficitur, non feugiat erat tincidunt.",
      date: "12/01/2024 11:05 am",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <HomeHeader back title={"My Tickets"} noti />
      <View style={{ padding: 16 }}>
        {tickets.map((ticket, index) => (
          <TicketCard key={index} {...ticket} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: mvs(8),
    padding: mvs(16),
    marginBottom: mvs(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: mvs(8),
    paddingVertical: mvs(4),
    borderRadius: mvs(4),
    marginBottom: mvs(8),
  },
  statusText: {
    fontSize: mvs(14),
  },
  ticketNumber: {
    fontSize: mvs(14),
    color: "#424242",
    marginBottom: mvs(8),
  },
  subject: {
    fontSize: mvs(16),
    fontWeight: "bold",
    color: "#212121",
    marginBottom: mvs(8),
  },
  description: {
    fontSize: mvs(14),
    color: "#616161",
    lineHeight: mvs(20),
    marginBottom: mvs(8),
  },
  date: {
    fontSize: mvs(12),
    color: "#757575",
  },
  statusDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: mvs(8),
  },
});

export default TicketList;
