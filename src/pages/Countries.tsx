import backIcon from '@/assets/back.svg'
import Container from '@/components/Container'
import { numberFormat } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { country } from '../types/country'

function Countries() {
  const [countryData, setCountryData] = useState<country[]>([])
  const { name } = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(`https://restcountries.com/v3.1/name/${name}`)
          .then((data) => data.json())
          .then((data) => setCountryData(data))
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  })

  return (
    <main className="mt-10">
      <Container>
        {countryData.map((country, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              className="w-[800px] h-[400px]"
              src={country.flags.svg}
              alt={country.flags.alt}
            />
            <div className="flex flex-col items-center mt-10">
              <h2 className="text-4xl">{country.name.common}</h2>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <p>
                  <span className="font-bold">Official name: </span>
                  {country.name.official}
                </p>
                <p>
                  <span className="font-bold">Capital: </span> {country.capital}
                </p>
                <p>
                  <span className="font-bold">Region: </span> {country.region}
                </p>
                <p>
                  <span className="font-bold">Sub-Region: </span>
                  {country.subregion}
                </p>
                <p className="flex">
                  <span className="space-x-2">
                    <b>Borders:</b>
                    {country.borders.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Population: </span>
                  {numberFormat(country.population)}
                </p>
              </div>
              <div className="text-center mt-20">
                <h4 className="font-bold text-lg">Official languages:</h4>
                <ul>
                  {Object.entries(country.languages).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <Link
          className="absolute top-5 left-5 bg-zinc-300 py-2 px-4 rounded-md hover:bg-zinc-400"
          to={'/'}
        >
          <div className="flex items-center space-x-2">
            <img src={backIcon} alt="Back" />
            <p className="font-medium text-lg">Home</p>
          </div>
        </Link>
      </Container>
    </main>
  )
}

export default Countries
