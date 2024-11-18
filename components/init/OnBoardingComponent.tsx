/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBar';
import {main, vh, vw} from '../../services/styleSheets';
import {OnboardingComponentProps} from '../../services/typeProps';
import {backIcon, nextIcon} from '../../assets/svgXml';
import * as Progress from 'react-native-progress';
import {saveData} from '../../services/storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnBoardingComponent: React.FC<OnboardingComponentProps> = ({
  title,
  step,
  description,
  setStep,
  ui,
  isNext,
}) => {
  useStatusBar('#EAECF5');
  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: vw(5)}]}>
      <ScrollView contentContainerStyle={{paddingVertical: vh(2), flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View>{ui && React.isValidElement(ui) ? ui : null}</View>
          <StepLoader step={step} setStep={setStep} isNext={isNext} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StepLoader: React.FC<{
  step: number;
  setStep: (newStep: number) => void;
  isNext: boolean;
}> = ({step, setStep, isNext}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <Progress.Bar
        progress={step}
        borderWidth={0}
        color="#2D31A6"
        unfilledColor="#CCCED5"
        width={vw(90)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={step === 0.3}
          onPress={() => {
            step === 1
              ? setStep(parseFloat((step - 0.3).toFixed(1)))
              : setStep(parseFloat((step - 0.2).toFixed(1)));
          }}
          style={[
            styles.circleButton,
            step === 0.3 && {backgroundColor: '#F2F4F7'},
          ]}>
          <Text style={styles.buttonText}>
            {backIcon(vw(7), vw(7), step === 0.3 ? '#98A2B3' : '#6172F3')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isNext === false ? true : false}
          onPress={() => {
            if (step === 1) {
              saveData('onboardingFinish', 'true');
              navigation.navigate('Main');
            } else {
              step === 0.7
                ? setStep(parseFloat((step + 0.3).toFixed(1)))
                : setStep(parseFloat((step + 0.2).toFixed(1)));
            }
          }}
          style={[
            styles.circleButton,
            isNext === false && {backgroundColor: '#F2F4F7'},
          ]}>
          <Text style={styles.buttonText}>
            {nextIcon(vw(7), vw(7), isNext === false ? '#98A2B3' : '#6172F3')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingComponent;

const styles = StyleSheet.create({
  container: main,
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginVertical: 10,
    color: '#2D31A6',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    color: '#6E778B',
  },
  step: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0EAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
