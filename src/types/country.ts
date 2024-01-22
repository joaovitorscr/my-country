export type country = {
  name: {
    common: string
    official: string
  }
  ccn3: string
  capital: string
  region: string
  subregion: string
  languages: object
  borders: string[]
  population: number
  flags: {
    png: string
    svg: string
    alt: string
  }
}
