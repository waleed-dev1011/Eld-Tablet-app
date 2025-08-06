import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import * as SVG from '../../../assets/svg';
import {Row} from '../row';
import {mvs} from '../../../util/metrices';
import {colors} from '../../../util/color';
const PrimaryTextInput = ({
  leftIcon,
  rightIcon,
  placeholder,
  style,
  editable = true,
  value,
  onChangeText,
  multiline = false,
  label,
}) => {
  const LeftIcon = SVG[leftIcon];
  const RightIcon = SVG[rightIcon];

  return (
    <View style={[styles.containner, style]}>
      {label ? (
        <View>
          <Text style={{color: colors.black}}>{label}</Text>
        </View>
      ) : null}
      <Row style={[styles.main, style]}>
        {LeftIcon ? (
          <View style={styles.iconWrapper}>
            <LeftIcon width={20} height={20} />
          </View>
        ) : null}

        <TextInput
          style={[styles.input, multiline && styles.textArea]}
          placeholder={placeholder}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
        />

        {RightIcon ? (
          <View style={styles.iconWrapper}>
            <RightIcon width={20} height={20} />
          </View>
        ) : null}
      </Row>
    </View>
  );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
  containner: {
    marginVertical: mvs(5),
  },
  main: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: mvs(5),
    height: mvs(40),
    borderWidth: 0.5,
    borderRadius: mvs(5),
    borderColor: colors.gray,
  },

  input: {
    flex: 1,
    paddingLeft: mvs(10),
    color: colors.black,
  },
  iconWrapper: {
    paddingHorizontal: mvs(5),
    backgroundColor: 'red',
  },
});
