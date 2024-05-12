import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resDataMock from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";
import withOpenLabel from "../withOpenLabel";

describe("should render RestaurantCard component with props Data", () => {
  it("checking if RestaurantCard is rendering fine", () => {
    render(<RestaurantCard resData={resDataMock} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
  });

  it("should render RestaurantCard component with open label", () => {
    const WithOpenLabelComponent = withOpenLabel(RestaurantCard);
    render(<WithOpenLabelComponent resData={resDataMock} />);
    const openText = screen.getByText("Open");
    expect(openText).toBeInTheDocument();
  });
});
