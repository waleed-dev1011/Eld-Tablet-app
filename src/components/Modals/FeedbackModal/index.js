import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import ActionButton from '../../atoms/buttons/ActionButton';
import {mvs} from '../../../util/metrices';
import {StarSvg} from '../../../assets/svg';
import {colors} from '../../../util/color';

const users = [
  {id: 1, name: 'John Doe', email: 'john@example.com'},
  {id: 2, name: 'Jane Smith', email: 'jane@example.com'},
];

const FeedbackModal = ({visible, onClose}) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [currentUser] = useState(users[0]);

  const renderStars = () => {
    return Array.from({length: 5}).map((_, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => setRating(i + 1)}
        style={styles.starButton}>
        <StarSvg
          height={mvs(25)}
          width={mvs(25)}
          fill={i + 1 <= rating ? '#FFBF00' : '#777E90'}
        />
      </TouchableOpacity>
    ));
  };

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    console.log('User:', currentUser);
    alert('Thank you for your feedback!');
    setRating(0);
    setFeedback('');
    onClose(); // Close modal after submit
  };

  const {width} = Dimensions.get('window');
  const modalWidth = Math.min(width - mvs(32), 720);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver
      backdropOpacity={0.3}
      style={styles.centeredModal}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.card, {width: modalWidth}]}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Feedback</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.SubmitText}>Submit</Text>
            </TouchableOpacity>{' '}
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Share your experience to help us improve.
            </Text>

            {/* Rating Section */}
            <View style={styles.ratingSection}>
              <Text style={styles.questionText}>
                How would you rate your overall experience with the mobile app?
              </Text>
              <View style={styles.starsContainer}>{renderStars()}</View>
            </View>

            {/* Feedback Section */}
            <View style={styles.feedbackSection}>
              <Text style={styles.questionText}>
                What new features or improvements would you like to see?
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Write here.."
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                value={feedback}
                onChangeText={setFeedback}
              />
            </View>

            {/* Submit Button */}
            <ActionButton
              variant="primary"
              title={'Submit'}
              onPress={handleSubmit}
              containerStyle={{paddingHorizontal: 0}}
              buttonStyle={{paddingVertical: mvs(13)}}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredModal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: mvs(16),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    maxHeight: '90%',
    paddingBottom: mvs(16),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 4},
      },
      android: {elevation: 6},
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: mvs(16),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cancelText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111',
  },
  SubmitText: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: mvs(20),
    paddingTop: mvs(20),
  },
  subtitle: {
    fontSize: mvs(14),
    color: colors.text.primary,
    marginBottom: mvs(20),
    fontWeight: '600',
  },
  ratingSection: {
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(8),
    borderWidth: 2,
    borderColor: colors.border,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(13),
    marginBottom: mvs(20),
  },
  feedbackSection: {
    backgroundColor: colors.base.grayBg,
    borderRadius: mvs(8),
    borderWidth: 2,
    borderColor: colors.border,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(13),
    marginBottom: 30,
  },
  questionText: {
    fontSize: mvs(14),
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: mvs(10),
    lineHeight: 22,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  starButton: {
    marginRight: 8,
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: mvs(8),
    padding: mvs(15),
    fontSize: mvs(14),
    color: colors.text.primary,
    minHeight: 120,
    borderWidth: 2,
    borderColor: colors.border,
  },
});

export default FeedbackModal;
