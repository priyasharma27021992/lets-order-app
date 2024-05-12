import { useCallback, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import withOpenLabel from "./withOpenLabel";
import SearchBox from "./SearchBox";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnlineStatus();
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const getData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      console.log("json", json);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onHandleClick = useCallback(
    (e) => {
      console.log("handle click");
      setSearchText(e.target.value);
    },
    [searchText]
  );

  if (isOnline === false)
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  // Conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log("body is called", listOfRestaurants);
  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <div className="filter">
            <div className="search">
              <SearchBox
                searchText={searchText}
                onHandleClick={onHandleClick}
              />
              <button
                onClick={() => {
                  // filter the cards
                  setFilteredRestaurants(
                    listOfRestaurants.filter((res) =>
                      res.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    )
                  );
                }}
              >
                Search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                setListOfRestaurants(
                  listOfRestaurants.filter(
                    (res) => parseFloat(res.info?.avgRating) > 4.2
                  )
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((resObj) => (
              <Link
                to={`/restaurants/${resObj?.info?.id}`}
                key={resObj?.info?.id}
                className="restaurant-link"
              >
                {resObj?.info?.isOpen ? (
                  <RestaurantCardOpen resData={resObj} />
                ) : (
                  <RestaurantCard resData={resObj} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
