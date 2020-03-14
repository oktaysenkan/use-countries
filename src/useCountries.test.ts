import { renderHook, act } from "@testing-library/react-hooks";
import useCountries from './useCountries';

afterEach(function() {
  jest.resetModules();
});

describe('test', () => {
  it("definitions", () => {
    const {
      result: { current }
    } = renderHook(() => useCountries());

    expect(current.countries).toBeDefined();
    expect(current.country).toBeDefined();
    expect(current.setCountry).toBeDefined();
  });

  it("countries should list 4 countries", () => {
    const { result } = renderHook(() => useCountries());
    expect(result.current.countries.length).toBe(4);
  });
});