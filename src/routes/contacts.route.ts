import { Router } from 'express'
import { createContact, getContacts } from "../controllers"

const router = Router()

router.get('/', getContacts)

router.post('/', createContact)

export default router
