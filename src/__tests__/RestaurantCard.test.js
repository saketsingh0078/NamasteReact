import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";
import RestCard from "../components/Restcard";

test("should render the restaurant component with prop data", () => {
  render(<RestCard restsData={MOCK_DATA} />);

  // querying
  const name = screen.getByText("0612 Road Chef");

  // assertion
  expect(name).toBeInTheDocument();
});
