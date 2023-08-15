import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDERRADIUS,
  COLOR,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function InputHeader(props: any) {
  const styles = StyleSheet.create({
    inputBox: {
      display: 'flex',
      paddingVertical: SPACING.space_8,
      paddingHorizontal: SPACING.space_24,
      borderWidth: 2,
      borderColor: COLOR.WhiteRGBA15,
      borderRadius: BORDERRADIUS.radius_25,
      flexDirection: 'row',
    },
    textInput: {
      width: '90%',
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_14,
      color: COLOR.White,
    },
    searchIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: SPACING.space_10,
    },
  });

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        placeholder="Search your Movies..."
        placeholderTextColor={COLOR.WhiteRGBA15}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <FontAwesome6
          name="magnifying-glass"
          size={FONTSIZE.size_20}
          color={COLOR.Orange}
        />
      </TouchableOpacity>
    </View>
  );
}
