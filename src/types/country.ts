export type country = {
  name: {
    common: string
    official: string
  }
  ccn3: string
  capital: string
  region: string
  subregion: string
  languages: {
    cat: string
  }
  borders: string[]
  population: number
  flags: {
    png: string
    svg: string
    alt: string
  }
}
