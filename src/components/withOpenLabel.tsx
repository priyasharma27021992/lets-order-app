// Higher order component
// input = RestaurantCard
// output = RestaurantCard
export default withOpenLabel = (RestaurantCard) => {
  // functional component
  return ({ resData }) => {
    return (
      <div className="res-card-open">
        <label className="open-label">Open</label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};
