import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import * as AuthSession from 'expo-auth-session';
import {
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Google from 'expo-auth-session/providers/google';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {useCourses} from '@hooks/useCourse';
import axios from 'axios';
import {useNavigationState} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {authenticateUserHandler} from '@actions/userAction';
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) => {
  const colorScheme = useColorScheme();
  // const nstate = useNavigationState((state) => state);
  // console.log(JSON.stringify(nstate, null, 2));

  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      expoClientId:
        '893158145715-o5ao56bgfu2ol8gido4t4gn71tlecevn.apps.googleusercontent.com',
    },
    {path: 'Login'},
  );
  const handleLoginGoogle = async () => {
    const result = await promptAsync({
      proxyOptions: {
        path: 'Login',
      },
    });
    console.log(JSON.stringify(result, null, 2));
    if (result.type === 'success') {
      // console.log(result.params?.idToken);
      dispatch(
        authenticateUserHandler('/api/auth/google', {
          id_token: result.params?.id_token,
        }),
      );
    }
  };
  return (
    <ImageBackground
      source={require('@assets/images/loginLayer.png')}
      style={styles.container}>
      <View
        style={[
          styles.container,
          {width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'},
        ]}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View style={{alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 36, color: '#3d3aff'}}>
              Vietcourse
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginBottom: 16,
            }}>
            <Text
              style={{
                fontSize: 32,
                paddingTop: 16,
                paddingBottom: 16,
                color: 'white',
                fontWeight: '700',
              }}>
              Let's Sign You in
            </Text>
            <Text
              style={{
                fontSize: 30,
                paddingTop: 8,
                color: 'white',

                fontWeight: '400',
              }}>
              Wellcome back.
            </Text>
            <Text
              style={{
                fontSize: 30,
                paddingTop: 8,
                color: 'white',

                fontWeight: '400',
              }}>
              You've been missed
            </Text>
          </View>
        </View>

        <Animatable.View
          animation="fadeInUp"
          style={{
            flex: 2,
            width: '100%',
            paddingVertical: 50,
            paddingHorizontal: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 8}}>
              Username
            </Text>
            <TextInput
              style={{
                width: '100%',
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderColor: Colors[colorScheme].borderInput,

                borderRadius: 8,
                marginBottom: 8,
                // backgroundColor: Colors[colorScheme].input,
                fontSize: 16,
              }}
              placeholder="Username"
            />
            <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 8}}>
              Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                width: '100%',
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderColor: Colors[colorScheme].borderInput,
                borderRadius: 8,
                marginBottom: 8,
                // backgroundColor: Colors[colorScheme].input

                fontSize: 16,
              }}
              placeholder="Password"
            />
          </View>
          <View style={{width: '100%', backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                marginBottom: 12,
              }}>
              <Text style={{textAlign: 'center'}}>
                Don't have an account ?{' '}
                <Text
                  style={{fontWeight: '700'}}
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  Register
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#3d3aff',
                width: '100%',
                padding: 16,
                borderRadius: 24,
                marginBottom: 8,
              }}
              onPress={() =>
                Linking.openURL(
                  'exp://192.168.1.7:19000/--/expo-auth-session#state=dfsf',
                )
              }>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'white',
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#3d3aff',
                width: '100%',
                padding: 16,
                borderRadius: 24,
              }}
              onPress={handleLoginGoogle}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'white',
                }}>
                Sign in with Google
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
