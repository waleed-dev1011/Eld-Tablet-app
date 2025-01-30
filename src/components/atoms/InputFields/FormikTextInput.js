import React from 'react';
import {Text, View} from 'react-native';
import * as Yup from 'yup';
import CustomTextInput from '../../../components/carts/customTextInput';
import styles from './styles';
const FormikTextInput = ({field, form, error, ...props}) => {
  const hasError = error && error.length > 0;
  return (
    <View>
      <CustomTextInput
        {...props}
        value={field.value}
        onChangeText={text => form.setFieldValue(field.name, text)}
        onBlur={() => form.setFieldTouched(field.name)}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
// Validation schema
const validationSchema = Yup.object().shape({
  accountnumber: Yup.string()
    .required('Account number is required')
    .matches(/^\d+$/, 'Account number must contain only numbers'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});
