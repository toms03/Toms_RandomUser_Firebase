function Bomb() {
  throw new Error('💥 CABOOM 💥')
}

export default function ErrorBoundaryPage({ explode, setExplode }) {
  return (
    <div>
      <button onClick={() => setExplode(e => !e)}>toggle explode</button>
      {explode ? <Bomb /> : null}
    </div>
  )
}