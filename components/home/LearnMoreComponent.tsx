/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LearnMoreComponentProps} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LearnMoreComponent: React.FC<LearnMoreComponentProps> = ({
  description,
  img,
  index,
  label,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleNavigate = () => {
    navigation.navigate('Detail', {dataIndex: index});
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.label}>{label}</Text>
        <Image source={img} style={{resizeMode: 'cover'}} />
      </View>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {description}
      </Text>
      <TouchableOpacity
        style={{alignSelf: 'flex-start'}}
        onPress={handleNavigate}>
        <Text style={styles.btnTxt}>Learn more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LearnMoreComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#667085',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    padding: vw(3),
    rowGap: vh(1),
  },
  label: {
    color: '#2D31A6',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#667085',
    fontWeight: '400',
    fontSize: 12,
  },
  btnTxt: {
    color: '#3538CD',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
