import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import Svg, {
  Line,
  Text as SvgText,
  Rect,
  Polyline,
  Circle,
} from "react-native-svg";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { colors } from "../../util/color";

const screenWidth = Dimensions.get("window").width;

const ELDLogChart = () => {
  const [selectedViolation, setSelectedViolation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Chart dimensions
  const chartWidth = screenWidth - 44;
  const chartHeight = 120;
  const margin = { top: 20, right: 5, bottom: 20, left: 30 };

  const gridWidth = chartWidth - margin.left - margin.right;
  const gridHeight = chartHeight - margin.top - margin.bottom;

  const hours = [
    "M",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "N",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "M",
  ];

  // Status rows with colors - mapping visual rows to status indices
  const statusRows = [
    {
      label: "OFF",
      totalHours: "0.3:06",
      color: colors.btn.blue,
      statusIndex: 0,
      visualRow: 0,
    },
    {
      label: "SB",
      totalHours: "00:00",
      color: colors.btn.yellow,
      statusIndex: 1,
      visualRow: 1,
    },
    {
      label: "DR",
      totalHours: "00:00",
      color: colors.btn.green,
      statusIndex: 2,
      visualRow: 2,
    },
    {
      label: "ON",
      totalHours: "00:00",
      color: colors.btn.red,
      statusIndex: 3,
      visualRow: 3,
    },
  ];

  // Sample log data - simplified line pattern
  const logData = [
    [0, 1],
    [6, 1],
    [6, 0],
    [8, 0],
    [8, 2],
    [11, 2],
    [11, 3],
    [12, 3],
    [12, 2],
    [15, 2],
    [15, 3],
    [16, 3],
    [16, 0],
    [20, 0],
    [20, 1],
    [24, 1],
  ];

  // Violation data
  const violations = [
    {
      id: 1,
      hour: 11.5,
      status: 3,
      type: "HOS_VIOLATION",
      severity: "HIGH",
      title: "Hours of Service Violation",
      description: "Driver exceeded maximum driving time limit of 11 hours",
      regulation: "FMCSA 395.8(a)",
      timestamp: "11:30 AM",
      penalty: "Driver must take mandatory 10-hour break",
    },
    {
      id: 2,
      hour: 15.2,
      status: 2,
      type: "SPEED_VIOLATION",
      severity: "MEDIUM",
      title: "Speed Limit Violation",
      description: "Vehicle speed exceeded posted limit by 8 mph",
      regulation: "State Traffic Law",
      timestamp: "3:12 PM",
      penalty: "Warning issued - Monitor speed compliance",
    },
    {
      id: 3,
      hour: 8.5,
      status: 0,
      type: "LOG_DISCREPANCY",
      severity: "LOW",
      title: "Duty Status Discrepancy",
      description: "Potential logbook manipulation detected",
      regulation: "FMCSA 395.8(e)",
      timestamp: "8:30 AM",
      penalty: "Manual verification required",
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "HIGH":
        return "#FF4444";
      case "MEDIUM":
        return "#FF8800";
      case "LOW":
        return "#FFAA00";
      default:
        return "#FF4444";
    }
  };

  // Helper function to get color by status
  const getColorByStatus = (status) => {
    const statusRow = statusRows.find((row) => row.statusIndex === status);
    return statusRow ? statusRow.color : colors.text?.blue || "#0066CC";
  };

  const openViolationModal = (violation) => {
    setSelectedViolation(violation);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedViolation(null);
  };

  // Gesture handler for detecting taps on violation markers
  const tapGesture = Gesture.Tap().onStart((e) => {
    const { x, y } = e;

    // Check if tap is on any violation marker
    violations.forEach((violation) => {
      const markerX = margin.left + (violation.hour * gridWidth) / 24;
      const markerY =
        margin.top + (violation.status * gridHeight) / 4 + gridHeight / 8;

      // Check if tap is within violation marker area (radius 12)
      const distance = Math.sqrt(
        Math.pow(x - markerX, 2) + Math.pow(y - markerY, 2)
      );
      if (distance <= 12) {
        runOnJS(openViolationModal)(violation);
      }
    });
  });

  const renderGrid = () => {
    const lines = [];

    // Vertical lines (hours) - lighter gray
    for (let i = 0; i <= 24; i++) {
      const x = margin.left + (i * gridWidth) / 24;
      lines.push(
        <Line
          key={`v-${i}`}
          x1={x}
          y1={margin.top}
          x2={x}
          y2={margin.top + gridHeight}
          stroke="#c3c4cc"
          strokeWidth={0.5}
        />
      );
    }

    // Horizontal lines (status rows) - lighter gray
    for (let i = 0; i <= 4; i++) {
      const y = margin.top + (i * gridHeight) / 4;
      lines.push(
        <Line
          key={`h-${i}`}
          x1={margin.left}
          y1={y}
          x2={margin.left + gridWidth}
          y2={y}
          stroke="#c3c4cc"
          strokeWidth={1}
        />
      );
    }

    return lines;
  };

  const renderHourLabels = () => {
    return hours.map((hour, index) => {
      if (index >= 25) return null;
      const x = margin.left + (index * gridWidth) / 24;

      return (
        <SvgText
          key={`hour-top-${index}`}
          x={x}
          y={margin.top - 10}
          fontSize="10"
          fill="#c3c4cc"
          textAnchor="middle"
          fontWeight="normal"
        >
          {hour}
        </SvgText>
      );
    });
  };

  const renderStatusLabels = () => {
    return statusRows.map((row, index) => {
      const y = margin.top + (index * gridHeight) / 4 + gridHeight / 8 + 4;
      return (
        <SvgText
          key={`status-${index}`}
          x={margin.left - 10}
          y={y}
          fontSize="9"
          fill="#c3c4cc"
          textAnchor="end"
          fontWeight="bold"
        >
          {row.label}
        </SvgText>
      );
    });
  };

  const renderColoredLogLines = () => {
    const lines = [];

    for (let i = 0; i < logData.length - 1; i++) {
      const [startHour, startStatus] = logData[i];
      const [endHour, endStatus] = logData[i + 1];

      // Calculate coordinates - fix the Y mapping to match visual rows
      const x1 = margin.left + (startHour * gridWidth) / 24;
      const y1 = margin.top + (startStatus * gridHeight) / 4 + gridHeight / 8;
      const x2 = margin.left + (endHour * gridWidth) / 24;
      const y2 = margin.top + (endStatus * gridHeight) / 4 + gridHeight / 8;

      // Use the color of the starting status for each segment
      const segmentColor = getColorByStatus(startStatus);

      lines.push(
        <Line
          key={`line-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={segmentColor}
          strokeWidth={2}
        />
      );
    }

    return lines;
  };

  // Render violation markers
  const renderViolationMarkers = () => {
    const markers = [];

    violations.forEach((violation) => {
      const x = margin.left + (violation.hour * gridWidth) / 24;
      const y =
        margin.top + (violation.status * gridHeight) / 4 + gridHeight / 8;

      // Pulsing animation circle (outer ring)
      markers.push(
        <Circle
          key={`violation-pulse-${violation.id}`}
          cx={x}
          cy={y}
          r={12}
          fill="none"
          stroke={getSeverityColor(violation.severity)}
          strokeWidth={2}
          opacity={0.5}
        />
      );

      // Warning circle background
      markers.push(
        <Circle
          key={`violation-bg-${violation.id}`}
          cx={x}
          cy={y}
          r={8}
          fill={getSeverityColor(violation.severity)}
          opacity={0.9}
        />
      );

      // Warning icon (⚠)
      markers.push(
        <SvgText
          key={`violation-icon-${violation.id}`}
          x={x}
          y={y + 3}
          fontSize="10"
          fill="white"
          textAnchor="middle"
        >
          ⚠
        </SvgText>
      );
    });

    return markers;
  };

  const renderBorder = () => {
    return (
      <Rect
        x={margin.left}
        y={margin.top}
        width={gridWidth}
        height={gridHeight}
        fill={colors.white}
        stroke={"#c3c4cc"}
        strokeWidth={1}
        opacity={0.6}
      />
    );
  };

  const renderTotalHoursAtBottom = () => {
    // Calculate the center position of the entire chart
    const chartCenterX = chartWidth / 2;

    const statusLabels = statusRows.map((row, index) => {
      // Calculate spacing between items
      const spacing = 80; // Adjust this value to control spacing between items
      const totalWidth = (statusRows.length - 1) * spacing;
      const startX = chartCenterX - totalWidth / 2;
      const x = startX + index * spacing;

      return (
        <React.Fragment key={`total-${index}`}>
          <SvgText
            x={x}
            y={margin.top + gridHeight + 20}
            fontSize="12"
            fill={row.color}
            textAnchor="middle"
            fontWeight="bold"
          >
            {row.label}
            {"    "} {row.totalHours}
          </SvgText>
        </React.Fragment>
      );
    });

    return statusLabels;
  };

  const ViolationModal = () => {
    if (!selectedViolation) return null;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View
              style={[
                styles.modalHeader,
                {
                  backgroundColor: getSeverityColor(selectedViolation.severity),
                },
              ]}
            >
              <Text style={styles.modalTitle}>{selectedViolation.title}</Text>
              <Text style={styles.modalSeverity}>
                {selectedViolation.severity} PRIORITY
              </Text>
            </View>

            {/* Content */}
            <View style={styles.modalBody}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Time:</Text>
                <Text style={styles.infoValue}>
                  {selectedViolation.timestamp}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Regulation:</Text>
                <Text style={styles.infoValue}>
                  {selectedViolation.regulation}
                </Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Description:</Text>
                <Text style={styles.sectionContent}>
                  {selectedViolation.description}
                </Text>
              </View>

              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Required Action:</Text>
                <Text style={styles.sectionContent}>
                  {selectedViolation.penalty}
                </Text>
              </View>

              {/* Driver Credibility Impact */}
              <View
                style={[
                  styles.credibilitySection,
                  { borderColor: getSeverityColor(selectedViolation.severity) },
                ]}
              >
                <Text style={styles.credibilityTitle}>
                  ⚡ Credibility Impact
                </Text>
                <Text style={styles.credibilityText}>
                  This violation affects your driver safety score and compliance
                  rating.
                </Text>
              </View>
            </View>

            {/* Footer Buttons */}
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.acknowledgeButton}
                onPress={closeModal}
              >
                <Text style={styles.buttonText}>Acknowledge</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.chartContainer}>
        <GestureDetector gesture={tapGesture}>
          <Svg
            width={chartWidth}
            height={chartHeight + 20}
            style={styles.chart}
          >
            {renderGrid()}
            {renderBorder()}
            {renderHourLabels()}
            {renderStatusLabels()}
            {renderColoredLogLines()}
            {renderViolationMarkers()}
            {renderTotalHoursAtBottom()}
          </Svg>
        </GestureDetector>
      </View>

      <ViolationModal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {},

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "100%",
    maxWidth: 400,
    maxHeight: "80%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  modalHeader: {
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  modalSeverity: {
    fontSize: 12,
    color: "white",
    opacity: 0.9,
  },
  modalBody: {
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  infoValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  infoSection: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
  credibilitySection: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    backgroundColor: "#fafafa",
  },
  credibilityTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  credibilityText: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
  modalFooter: {
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  acknowledgeButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButton: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  closeButtonText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default ELDLogChart;
