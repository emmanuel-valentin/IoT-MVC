import { Contact } from '@prisma/client'
import type { Request, Response } from 'express'
import { prisma } from '../models'

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany()
    res.render('contacts', { title: 'Contactos', contacts })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
}

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact: Contact = req.body
    console.log(contact)
    await prisma.contact.create({
      data: contact,
    })
    const contacts = await prisma.contact.findMany()
    res.render('contacts', { title: 'Contactos', contacts })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        error: error.name,
      })
    }
  }
}
