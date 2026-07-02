import './App.css'
import Students from './components/Students'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <h1>Student Dashboard</h1>
        <p>Welcome to the React lesson app.</p>
      </section>

      <Students />
    </main>
  )
}

export default App
