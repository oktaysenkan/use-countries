import { renderHook, act } from "@testing-library/react-hooks";
import useCountries from "./useCountries";
import locales from "./locales";

afterEach(function() {
  jest.resetModules();
});

describe("test", () => {
  it("definitions", () => {
    const {
      result: { current }
    } = renderHook(() => useCountries());

    expect(current.countries).toBeDefined();
    expect(current.languages).toBeDefined();
    expect(current.country).toBeDefined();
    expect(current.setCountry).toBeDefined();
    expect(current.language).toBeDefined();
    expect(current.setLanguage).toBeDefined();
  });

  it("countries list length should 250", () => {
    const { result } = renderHook(() => useCountries());
    expect(result.current.countries.length).toBe(250);
  });

  it("languages list length should 185", () => {
    const { result } = renderHook(() => useCountries());
    expect(result.current.languages.length).toBe(185);
  });

  it("setting country", () => {
    const { result } = renderHook(() => useCountries());

    act(() => {
      result.current.setCountry(locales.countries[224]);
    });

    expect(result.current.country.code).toBe("TR");
    expect(result.current.country.name).toBe("Turkey");
    expect(result.current.country.native).toBe("Türkiye");
    expect(result.current.country.capital).toBe("Ankara");
    expect(result.current.country.currency).toBe("TRY");
  });

  it("setting language", () => {
    const { result } = renderHook(() => useCountries());

    act(() => {
      result.current.setLanguage(locales.languages[165]);
    });

    expect(result.current.language.code).toBe("TR");
    expect(result.current.language.name).toBe("Turkish");
    expect(result.current.language.native).toBe("Türkçe");
  });
});
