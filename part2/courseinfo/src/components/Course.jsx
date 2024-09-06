import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {

  const total = course.parts.reduce((s, p) => s+p.exercises,0 )
  console.log(total);

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <p>total of {total} exercises</p>
    </>
  )
}

export default Course