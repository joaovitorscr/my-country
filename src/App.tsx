import Container from '@/components/Container'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import { country } from './types/country'

function App() {
  const [countries, setCountries] = useState<country[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        fetch('https://restcountries.com/v3.1/all')
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
    <main>
      <Header />
      <Container>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {countries.map((country, index) => (
            <Card
              key={index}
              flag={country.flags.png}
              alt={country.flags.alt}
              name={country.name.common}
              population={country.population}
              region={country.region}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default App
