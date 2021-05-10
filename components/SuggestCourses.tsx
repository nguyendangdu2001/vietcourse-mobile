import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SuggestCourses = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 12}}>
        Khoá học dành cho bạn
      </Text>
      <ScrollView horizontal>
        {[...Array(4)].map((_, i) => (
          <View
            key={i}
            style={{
              width: 240,
              marginRight: 20,
              borderRadius: 18,
              borderWidth: 0.3,
              borderColor: '#797979',
              overflow: 'hidden',
            }}>
            <Image
              source={require('@assets/images/loginLayer.png')}
              style={{
                width: '100%',
                height: 140,
              }}
            />
            <View style={{paddingVertical: 16, paddingHorizontal: 8}}>
              <Text>Công nghệ thông tin</Text>
              <Text>Học lập trình Python cơ bản</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuggestCourses;

const styles = StyleSheet.create({});
