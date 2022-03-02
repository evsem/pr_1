import React, { useState } from 'react'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'
import InputGrey from '../../UI/InputGrey/InputGrey'
import classes from './Form.module.css'

const Form = ({ addPost_Func }) => {
  let [param, setParam] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    addPost_Func(newPost)
    setParam({ title: '', body: '' })
  }
  return (
    <form className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <InputGrey
        type="text"
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <ButtonGrey onClick={addNewPost}>Add post</ButtonGrey>
    </form>
  )
}

export default Form
