import Container from './Container'

export default function Header() {
  return (
    <header className="py-4 border border-b-zinc-500 ">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">My Country</h1>
          {/* Search bar -> */}
          <input
            type="text"
            placeholder="Search my country"
            className="border rounded-md px-4 py-2 focus:outline-1"
          />
        </div>
      </Container>
    </header>
  )
}
