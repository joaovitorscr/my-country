type Props = {
  flag: string
  alt: string
  name: string
  region: string
  population: number
}

export default function Card({ flag, alt, name, region, population }: Props) {
  return (
    <div className="border m-auto p-4 rounded-md">
      <img className="h-44 w-80 rounded-md" src={flag} alt={alt} />
      <div className="flex flex-col mt-4">
        <h2 className="font-bold text-center">{name}</h2>
        <div className="mt-4">
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Total Population:</b> {population}
          </p>
        </div>
      </div>
    </div>
  )
}
