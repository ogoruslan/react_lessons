import './App.css'
import Students from './components/Students'
import Parent from './components/Parent'

const students = [
  { id: 1, name: 'Alice Johnson', subject: 'Mathematics', grade: 'A' },
  { id: 2, name: 'Brian Smith', subject: 'Science', grade: 'B+' },
  { id: 3, name: 'Chloe Davis', subject: 'English', grade: 'A-' },
]

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <h1>Student Dashboard</h1>
        <p>Welcome to the React lesson app.</p>
      </section>

      <Students students={students} />
      <Parent />
    </main>
  )
}

export default App
