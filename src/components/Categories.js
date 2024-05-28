import { ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../../sanity';

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    client.fetch(`
    *[_type == "category"] {
      ...,
    }
    `).then(data => {
      setcategories(data)
    })
  }, [])
  

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      {/* Category Card */}
      {categories?.map(data => (
        <CategoryCard
          key={data._id}
          imgUrl={urlFor(data.image).width(200).url()}
          title={data.name} />
      ))}
    </ScrollView>
  )
}

export default Categories