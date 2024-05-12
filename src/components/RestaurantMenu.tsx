import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

// Single Responsibility- just concerned about displaying restaurant menu on the ui and its useRestaurantMenu responnsility to get the data
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, areaName, cuisines, sla, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;
  const itemsCards =
    resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("resInfo", categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{areaName}</p>
      <p>{`${sla?.deliveryTime}mins ${avgRating}stars`}</p>
      <h1>Menu</h1>
      <ul>
        {itemsCards?.map((itemCard) => (
          <li>{itemCard?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
