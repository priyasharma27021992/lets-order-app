import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("testing body componemt", () => {
  it("should check search list for kulfi text", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Kulfi" } });
    fireEvent.click(searchBtn);
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(1);
  });

  it("should check top restaurants filter", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeTopFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeTopFilter.length).toBe(9);

    const topRatedFilterBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedFilterBtn);
    const cardsAfterTopFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterTopFilter.length).toBe(6);
  });
  // https://github.com/namastedev/namaste-react/blob/main/src/components/__tests__/Cart.test.js
});
