import express from 'express'
const router = express.Router()
import {
  createCrud,
  deleteCrud,
  getAllUsers,
  updateUsers,
} from '../controllers/CrudController.js'
router.post('/', createCrud)
router.route('/:id').delete(deleteCrud).patch(updateUsers)
router.get('/all', getAllUsers)

export default router
