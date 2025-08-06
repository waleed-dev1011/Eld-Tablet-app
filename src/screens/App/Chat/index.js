import styles from './styles';

import {HomeHeader} from '../../../components/Headers';

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BackSVG, VoiceSvg} from '../../../assets/svg';
import VoiceIcon from '../../../assets/svg/voiceIconSvg';
import PrimaryTextInput from '../../../components/atoms/InputFields/PrimaryTextInput';
import {height} from '../../../util/metrices';
import AttachIcon from '../../../assets/svg/attachIconSvg';
import {bindActionCreators} from '@reduxjs/toolkit';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon',
      time: '04:45 PM',
      type: 'incoming',
    },
    {
      id: '2',
      text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon',
      time: '04:45 PM',
      type: 'outgoing',
    },
    {
      id: '1',
      text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon',
      time: '04:45 PM',
      type: 'incoming',
    },
    {
      id: '2',
      text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon',
      time: '04:45 PM',
      type: 'outgoing',
    },

    // Add more messages as needed
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      type: 'outgoing',
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const renderMessage = ({item}) => {
    const isOutgoing = item.type === 'outgoing';
    return (
      <View style={styles.MsgBox}>
        <View
          style={[
            styles.messageContainer,
            isOutgoing ? styles.outgoing : styles.incoming,
          ]}>
          <Text
            style={[
              styles.messageText,
              isOutgoing ? styles.outgoingMsgText : styles.incomingMsgText,
            ]}>
            {item.text}
          </Text>
        </View>
        <Text
          style={[
            styles.timeText,
            isOutgoing ? styles.outgoingMsgTime : styles.incomingMsgTime,
          ]}>
          {item.time}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <View style={styles.divider} />

      <Text style={styles.header}>Chat</Text>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.adminChat}>
          <Text style={styles.header}>Admin</Text>
        </View>
        <View style={styles.dateLabel}>
          <Text style={styles.dateText}>Today | 06:32 PM</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContent}
        />
        <View style={styles.inputMainContainner}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={sendMessage}>
              <AttachIcon />
            </TouchableOpacity>

            <TextInput
              placeholder="| Type your message here ..."
              style={styles.input}
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.voiceNote}>
            <TouchableOpacity onPress={sendMessage}>
              <VoiceIcon />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;
