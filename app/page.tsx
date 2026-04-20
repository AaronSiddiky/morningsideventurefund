export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 400,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
        }}
      >
        Morningside Venture Fund
      </h1>
      <div
        style={{
          width: '3rem',
          height: '1px',
          background: '#111',
          marginBottom: '1.5rem',
          opacity: 0.5,
        }}
      />
      <p
        style={{
          fontSize: '1rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: 0.6,
        }}
      >
        Coming Soon
      </p>
    </main>
  )
}
