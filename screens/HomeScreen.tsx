import {useCourses} from '@hooks/useCourse';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import TopSubjects from '@components/TopSubjects';
import SuggestCourses from '@components/SuggestCourses';
const HomeScreen = () => {
  useCourses();

  return (
    <ScrollView contentContainerStyle={styles.contaier}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: 'blue',
            marginBottom: 16,
          }}>
          Vietcourse
        </Text>
        <TopSubjects />
        <SuggestCourses />
        <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 12}}>
          Khoá học dành cho bạn
        </Text>
        <View>
          <View
            style={{
              width: '100%',

              padding: 8,
              // borderWidth: 1,
              borderRadius: 8,
              flexDirection: 'row',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View style={{width: '70%', justifyContent: 'space-evenly'}}>
              <Text>Công nghệ thông tin</Text>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Học HTML CSS căn bản
              </Text>
              <View
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 90,
                  alignSelf: 'flex-start',
                  backgroundColor: 'red',
                }}>
                <Text style={{color: 'white'}}>300.000 VND</Text>
              </View>
            </View>
            <Image
              source={require('@assets/images/loginLayer.png')}
              style={{aspectRatio: 1, width: '30%', borderRadius: 10}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,

    paddingHorizontal: 8,
  },
});
