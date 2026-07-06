import { useState } from 'react'

function Students({ students }) {
  const [name, setName] = useState('Світ');

  return (
    <section className="students-section">
      <h1>{name}</h1>
      <h2>Students</h2>
      <p>Here is a simple React component showing student information.</p>
      <div className="students-grid">
        {students.map((student) => (
          <article key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>
              <strong>Subject:</strong> {student.subject}
            </p>
            <p>
              <strong>Grade:</strong> {student.grade}
            </p>
          </article>
        ))}
      </div>
      <button onClick={() => setName('React Learner')}>Change Name</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    </section>
    
  )
}
export default Students
