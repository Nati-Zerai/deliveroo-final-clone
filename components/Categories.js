import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    {/* Category Card */}
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 4"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 5"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 6"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 7"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 8"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 9"/>
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 10"/>

    </ScrollView>
  )
}

export default Categories;