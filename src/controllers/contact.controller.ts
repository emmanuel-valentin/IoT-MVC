import { Contact } from '@prisma/client'
import type { Request, Response } from 'express'
import { prisma } from '../prisma'

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await prisma.contact.findMany()
  res.send(contacts)
}

export const createContact = async (req: Request, res: Response) => {
  const contact: Contact = req.body
  await prisma.contact.create({
    data: contact
  })
  res.status(201).send(contact)
}