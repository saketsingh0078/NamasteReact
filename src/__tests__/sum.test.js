import { sum } from "../components/sum";

test("Sum function calculate the sum of two number ", () => {
  const result = sum(4, 6);

  //Assertion
  expect(result).toBe(10);
});
