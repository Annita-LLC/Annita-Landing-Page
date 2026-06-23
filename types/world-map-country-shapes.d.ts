declare module 'world-map-country-shapes' {
  export interface Country {
    id: string;
    shape: string;
  }

  const countries: Country[];
  export default countries;
}
