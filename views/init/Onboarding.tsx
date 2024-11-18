/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {centerAll, main, vh, vw} from '../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {saveData} from '../../services/storage';
import {OnboardingInterfaceProps} from '../../services/typeProps';
import OnBoardingComponent from '../../components/init/OnBoardingComponent';

const Onboarding = () => {
  const [isBoarding, setIsBoarding] = useState(false);
  const [step, setStep] = useState(0.3);
  const [isNext, setIsNext] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
  });

  useEffect(() => {
    saveData('UserInforStorage', formData);
  }, [formData]);

  const getStepComponent = (): React.ReactNode => {
    switch (step) {
      case 0.3:
        return (
          <GetNameView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 0.5:
        return (
          <GetAgeView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 0.7:
        return (
          <GetHeightView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <GetWeightView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };
  return (
    <>
      {isBoarding === false ? (
        <SafeAreaView style={[styles.container, {backgroundColor: '#EAECF5'}]}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: vw(5),
              }}>
              <Image source={require('../../assets/login/login.png')} />
              <TouchableOpacity
                style={[
                  {
                    position: 'absolute',
                    bottom: vh(5),
                    backgroundColor: '#2D31A6',
                    width: vw(90),
                    borderRadius: 44,
                    paddingVertical: vh(1.5),
                  },
                  centerAll,
                ]}
                onPress={() => setIsBoarding(true)}>
                <Text
                  style={{color: '#FCFCFC', fontSize: 20, fontWeight: '700'}}>
                  Get started
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <OnBoardingComponent
          setStep={setStep}
          step={step}
          title={
            step < 0.7
              ? "Before jumping in, let's know each orther"
              : `Welcome ${formData.name}`
          }
          description={
            step >= 0.7
              ? 'Just a few steps to personalize your experience'
              : null
          }
          ui={getStepComponent()}
          isNext={isNext}
        />
      )}
    </>
  );
};

const GetWeightView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.weight.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.weight, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your Weight
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.weight}
        keyboardType="number-pad"
        onChangeText={text => setFormData({...formData, weight: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
      <Text style={{color: '#667085', fontWeight: '400', fontSize: 20}}>
        kg
      </Text>
    </View>
  );
};

const GetHeightView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.height.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.height, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your Height
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.height}
        keyboardType="number-pad"
        onChangeText={text => setFormData({...formData, height: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
      <Text style={{color: '#667085', fontWeight: '400', fontSize: 20}}>
        cm
      </Text>
    </View>
  );
};

const GetAgeView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.age.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.age, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your Age
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.age}
        keyboardType="number-pad"
        onChangeText={text => setFormData({...formData, age: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

const GetNameView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.name.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.name, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your name
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.name}
        onChangeText={text => setFormData({...formData, name: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: main,
  titleColor: {color: '#4C4C4C', fontSize: 16, fontWeight: '700'},
});
