import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Datashow from './datashow'
import { useAppContext } from '../context/appcontext'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const Create = () => {
  const { name, cgpa, department, getUser, createUser, handleChange, user } =
    useAppContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !cgpa || !department) {
      alert('Please provide all values.')
      return
    }
    createUser()
    alert('Data stored successfully')
  }
  const listingInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    handleChange({ name, value })
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Crud operations</h1>
      <Form className='m-5'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={listingInput}
            placeholder='Enter name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Cgpa</Form.Label>
          <Form.Control
            type='text'
            name='cgpa'
            value={cgpa}
            onChange={listingInput}
            placeholder='cgpa'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Department</Form.Label>
          <Form.Control
            type='text'
            name='department'
            value={department}
            onChange={listingInput}
            placeholder='department'
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant='primary' type='button'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Create
