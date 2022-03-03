import React, { useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'
import SelectGrey from './UI/SelectGrey/SelectGrey'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Mexico', body: 'Country in America' },
    { id: 2, title: 'Sweden', body: 'Country in Europe' },
    { id: 3, title: 'France', body: 'Country in Europe' },
    { id: 4, title: 'Canada', body: 'Country in America' },
    { id: 5, title: 'Poland', body: 'Country in Europe' },
    { id: 6, title: 'Greece', body: 'Country in Europe' },
  ])
  let [selectedSort, setSelectedSort] = useState('')

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <SelectGrey
        defaultValue="Sorting"
        onChange={sortPosts}
        value={selectedSort}
        options={[
          { name: 'By description', value: 'body' },
          { name: 'By name', value: 'title' },
        ]}
      />

      {posts.length ? (
        <List posts={posts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
