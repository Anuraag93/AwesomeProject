import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must be at least 4 characters')
    .max(16, 'Password must be less than 16 characters')
    .required('Password length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // const generatePassword = (values: any) => {
  //   const { passwordLength } = values;
  //   let charset = '';
  //   if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  //   if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   if (numbers) charset += '0123456789';
  //   if (symbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  //   setPassword(
  //     Array(passwordLength)
  //       .fill(charset)  // fill array with charset
  //       .map((x) => x[Math.floor(Math.random() * x.length)]) // get random character from charset
  //       .join(''), // join array into string
  //   );
  //   setIsPassGenerated(true);
  // };

  const generatePasswordString = (passwordLength: number) => {
    //
  };

  const createPassword = (characters: string, passwordLength: number) => {
    //
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
