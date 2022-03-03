import React, { useMemo, useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'
import InputGrey from './UI/InputGrey/InputGrey'
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
  let [searchQuery, setSearchQuery] = useState('')

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return posts
  }, [selectedSort, posts])
  const serachedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    )
  }, [searchQuery, sortedPosts])
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <InputGrey
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SelectGrey
        defaultValue="Sorting"
        onChange={setSelectedSort}
        value={selectedSort}
        options={[
          { name: 'By description', value: 'body' },
          { name: 'By name', value: 'title' },
        ]}
      />

      {serachedAndSelectedPosts.length ? (
        <List posts={serachedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
