import Card from '@/components/Card'
import Container from '@/components/Container'
import { useToast } from '@/components/ui/use-toast'
import { country } from '@/types/country'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [countries, setCountries] = useState<country[]>([])
  const [filterInput, setFilterInput] = useState<string>('')
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://restcountries.com/v3.1/all')
          .then((data) => data.json())
          .then((data) => setCountries(data))
      } catch (e) {
        toast({
          title: 'Error while retrieving the data',
          variant: 'destructive',
          description: 'Try again later!',
        })
        console.log(e)
      }
    }

    fetchData()
  })

  return (
    <main className="mb-10">
      <header className="py-4 border border-b-zinc-500 ">
        <Container>
          <div className="flex flex-col justify-between items-center sm:flex-row">
            <h1 className="text-2xl">My Country</h1>
            <input
              type="text"
              placeholder="Search my country"
              className="border rounded-md px-4 py-2 focus:outline-1"
              onChange={(e) => setFilterInput(e.target.value)}
            />
          </div>
        </Container>
      </header>
      <Container>
        <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-4">
          {countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(filterInput),
            )
            .map((country) => (
              <Link
                key={country.ccn3}
                to={`/countries/${country.name.common.toLowerCase()}`}
              >
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
