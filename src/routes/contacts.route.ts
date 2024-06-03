import { Router } from 'express'
import {
  createContact,
  getContactById,
  getContacts,
  updateContact,
} from '../controllers'

const router = Router()

router.get('/', getContacts)

router.post('/', createContact)

router.get('/:id', getContactById)

/**
 * Yo utilizaría el verbo PUT
 * pero el formulario solo puede enviar GET o POST
 * aunque podríamos enviar PUT usando javascript
 */
router.post('/:id', updateContact)

export default router
