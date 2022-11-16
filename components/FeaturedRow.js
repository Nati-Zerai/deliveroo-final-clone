import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityclient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    sanityclient
      .fetch(
        `
            *[_type == "featured" && _id == $id] {
                ...,
                resturants[]-> {
                ...,
                dishes[]->,
                type-> {
                    name
                }
                },
            }[0]
        `,
        { id }
      )
      .then((data) => {
        setResturants(data?.resturants);
      });
  }, []);

  //   console.log(resturants);

  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4"> {description} </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showHorizontalScrollIndicator="false"
        className="pt-4"
      >
        {/* ResturantCards */}

        {resturants?.map((resturant) => (
          <ResturantCard
            key={resturant._id}
            id={resturant._id}
            imgUrl={resturant.image}
            title={resturant.name}
            rating={resturant.rating}
            genre={resturant.type?.name}
            address={resturant.address}
            short_description={resturant.short_description}
            dishes={resturant.dishes}
            long={resturant.long}
            lat={resturant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
