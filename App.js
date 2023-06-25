import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, SectionList, Text, SafeAreaView } from 'react-native';

const MySectionList = () => {
  // Dummy data for the SectionList
  const data = [
    {
      title: 'Beauty',
      data: ['Facewash', 'Beauty Soap', 'Mosturizer'],
    },
    {
      title: 'Clothing',
      data: ['Eastern', 'Western', 'Kids'],
    },
    {
      title: 'Bags',
      data: ['Side Bag', 'Hand Bag', 'BackPack'],
    },
  ];

  // Render each section header in the SectionList
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{ padding: 10, backgroundColor: 'lightgray' }}>
      <Text>{title}</Text>
    </View>
  );

  // Render each item in the SectionList
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <Text style={{fontSize:30}}>Section list</Text>
    <SectionList
      sections={data}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
    /></SafeAreaView>
  );
};

export default MySectionList;