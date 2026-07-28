import './App.css'

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
]

const blogPosts = [
  {
    id: 1,
    title: 'React Learning',
    author: 'Stephen Biz',
    excerpt: 'Welcome to learning React!',
  },
  {
    id: 2,
    title: 'Installation',
    author: 'Schewzdenier',
    excerpt: 'You can install React from npm.',
  },
]

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/2021' },
]

function BookDetails(props) {
  const bookList = (
    <div className="content-list">
      {props.books.map((book) => (
        <article className="detail-item" key={book.id}>
          <h3>{book.bname}</h3>
          <p>Rs. {book.price}</p>
        </article>
      ))}
    </div>
  )

  return (
    <section className="panel panel-books">
      <h1>Book Details</h1>
      {bookList}
    </section>
  )
}

function BlogDetails(props) {
  return (
    <section className="panel panel-blog">
      <h1>Blog Details</h1>
      {props.posts.length > 0 ? (
        <div className="content-list">
          {props.posts.map((post) => (
            <article className="detail-item" key={post.id}>
              <h3>{post.title}</h3>
              <h4>{post.author}</h4>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No blog posts available.</p>
      )}
    </section>
  )
}

function CourseDetails(props) {
  if (!props.courses || props.courses.length === 0) {
    return (
      <section className="panel panel-courses">
        <h1>Course Details</h1>
        <p className="empty-state">No courses available.</p>
      </section>
    )
  }

  return (
    <section className="panel panel-courses">
      <h1>Course Details</h1>
      <div className="content-list">
        {props.courses.map((course) => (
          <article className="detail-item" key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const showBooks = true
  const showBlogs = true
  const showCourses = true

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Conditional Rendering Demo</p>
        <h2>bloggerapp</h2>
        <p className="intro">
          Three components rendered with separate conditional patterns: direct
          render, ternary, and early return.
        </p>
      </section>

      <div className="grid">
        {showBooks && <BookDetails books={books} />}
        <BlogDetails posts={blogPosts} />
        {showCourses ? <CourseDetails courses={courses} /> : null}
      </div>
    </main>
  )
}

export default App
