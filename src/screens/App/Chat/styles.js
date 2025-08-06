import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  container: {
    height: '80%',
    width: '85%',
    alignSelf: 'center',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
  },
  header: {
    fontSize: mvs(20),
    fontWeight: '700',
    paddingHorizontal: mvs(20),
  },
  adminChat: {
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: mvs(15),
    justifyContent: 'center',
  },
  MsgBox: {
    paddingHorizontal: mvs(15),
  },
  dateLabel: {
    alignItems: 'center',
    marginVertical: mvs(10),
  },
  dateText: {
    fontSize: mvs(12),
    color: colors.gray,
  },
  chatContent: {
    paddingBottom: mvs(20),
  },
  messageContainer: {
    maxWidth: '75%',
    borderRadius: mvs(20),
    padding: mvs(10),
    paddingHorizontal: mvs(15),
    marginBottom: mvs(12),
  },
  incoming: {
    backgroundColor: '#F6F6F6',
    alignSelf: 'flex-start',
  },
  outgoing: {
    backgroundColor: '#3f4352',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: mvs(13),
    color: colors.black,
  },
  incomingMsgText: {
    color: colors.black,
  },
  outgoingMsgText: {
    color: colors.white,
  },
  incomingMsgTime: {
    alignSelf: 'flex-start',
  },
  outgoingMsgTime: {
    alignSelf: 'flex-end',
  },
  timeText: {
    fontSize: mvs(10),
    color: colors.gray,
    alignSelf: 'flex-end',
    paddingHorizontal: mvs(5),
    marginBottom: mvs(4),
  },
  inputMainContainner: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    width: '90%',
    height: mvs(55),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(8),
    borderColor: colors.border,
    alignSelf: 'center',
    marginVertical: mvs(10),
    borderRadius: mvs(10),
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#F6F6F6',
  },
  voiceNote: {
    height: mvs(55),
    alignItems: 'center',
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(8),
    alignSelf: 'center',
    marginVertical: mvs(10),
    borderRadius: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#F6F6F6',
  },
  input: {
    flex: 1,
  },
});

export default styles;
