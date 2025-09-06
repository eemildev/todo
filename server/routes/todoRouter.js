
import { Router } from 'express'
import { auth } from '../helper/auth.js'
import { getTasks, postTask, removeTask } from '../controllers/TaskController.js'
const router = Router()

// hae kaikki
router.get('/', getTasks)

// ...existing code...
// lisää 
router.post('/create', auth, postTask)

// ...existing code...
// poista id:n perusteella

router.delete('/delete/:id', auth, removeTask)

export default router