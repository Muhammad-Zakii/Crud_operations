import Crud from '../models/crud.js'

const createCrud = async (req, res) => {
  const { name, cgpa, department } = req.body
  console.log(req.body)
  const crud = await Crud.create({ name, cgpa, department })
  res.status(200).json({ crud })
}
const deleteCrud = async (req, res) => {
  const { id: userId } = req.params
  const del = await Crud.findOne({ _id: userId })
  if (!del) {
    res.status('Not found')
  }
  await del.remove()
  res.status(200).json({ msg: 'User remove successfully.' })
}
const getAllUsers = async (req, res) => {
  const user = await Crud.find()
  res.status(200).json({ user })
}
const updateUsers = async (req, res) => {
  const { id: userId } = req.params
  const { name, cgpa, department } = req.body
  const update = await Crud.findOne({ _id: userId })
  if (!update) {
    res.status(404).json({ msg: 'No User with this id found' })
  }
  let updateDta = await Crud.findByIdAndUpdate({ _id: userId }, { ...req.body })
  res.status(200).json({ updateDta })
}
export { createCrud, deleteCrud, getAllUsers, updateUsers }
