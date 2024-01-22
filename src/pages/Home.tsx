import Card from '@/components/Card'
import Container from '@/components/Container'
import Header from '@/components/Header'
import { country } from '@/types/country'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [countries, setCountries] = useState<country[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://restcountries.com/v3.1/all')
          .then((data) => data.json())
          .then((data) => setCountries(data))
      } catch (e) {
        // Sonner toast in here later!
        console.log(e)
      }
    }

    fetchData()
  })

  return (
    <main className="mb-10">
      <Header />
      <Container>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {countries.map((country) => (
            <Link key={country.ccn3} to={`/countries/${country.ccn3}`}>
              <Card
                flag={country.flags.png}
                alt={country.flags.alt}
                name={country.name.common}
                population={country.population}
                region={country.region}
              />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}
