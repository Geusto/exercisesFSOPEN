import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <p>total of {total} exercises</p>
    </>
  )
}

export default Course