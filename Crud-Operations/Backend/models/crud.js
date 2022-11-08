import mongoose from 'mongoose'

const CrudSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  cgpa: {
    type: String,
  },
  department: {
    type: String,
  },
})
export default mongoose.model('Crud', CrudSchema)
