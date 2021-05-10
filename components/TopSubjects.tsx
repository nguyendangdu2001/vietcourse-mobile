import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopSubjects = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 12}}>
        Lĩnh vực hàng đầu
      </Text>
      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
        <View style={{width: '50%', height: 120}}>
          <Text>Công nghệ thông tin</Text>
        </View>
      </View>
    </View>
  );
};

export default TopSubjects;

const styles = StyleSheet.create({});
