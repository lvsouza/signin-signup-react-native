import React, { ReactChild } from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface ITextFieldProps extends TextInputProps {
  startIcon?: ReactChild;
  containerStyles?: any;
  endIcon?: ReactChild;
}
export const TextField: React.FC<ITextFieldProps> = ({ endIcon, startIcon, containerStyles, ...rest }) => {
  return (
    <View style={{ ...styles.container, ...containerStyles }}>
      {startIcon &&
        <View style={styles.startIcon}>
          {startIcon}
        </View>
      }

      <TextInput
        style={styles.input}
        {...rest}
      />

      {endIcon &&
        <View style={styles.endIcon}>
          {endIcon}
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  startIcon: {
    marginLeft: 10,
    marginRight: -35,
  },
  input: {
    paddingLeft: 45,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  endIcon: {
    marginLeft: -35,
    marginRight: 10,
  },
});
