import React from 'react'
import classes from './Filter.module.css'
import InputGrey from '../../UI/InputGrey/InputGrey'
import SelectGrey from '../../UI/SelectGrey/SelectGrey'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        placeholder="Search"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <SelectGrey
        defaultValue="Sorting"
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        value={filter.sort}
        options={[
          { name: 'By description', value: 'body' },
          { name: 'By name', value: 'title' },
        ]}
      />
    </div>
  )
}

export default Filter
