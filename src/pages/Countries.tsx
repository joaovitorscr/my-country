import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { country } from '../types/country'

function Countries() {
  const [countryData, setCountryData] = useState<country[]>([])
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
          .then((data) => data.json())
          .then((data) => setCountryData(data))
      } catch (e) {
        // Sonner toast in here later!
        console.log(e)
      }
    }

    fetchData()
  })

  return (
    <main>
      <div>
        {countryData.map((country, index) => (
          <div key={index}>{country.name.common}</div>
        ))}
      </div>
    </main>
  )
}

export default Countries
