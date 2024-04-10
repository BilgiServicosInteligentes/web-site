import { getUsers } from '@/lib/users'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method === 'GET') {
    const users = await getUsers()

    return res.status(200).json({
      data: users
    })
  } else if (method === 'POST') {
    try {
      const {
        primeiroNome,
        ultimoNome,
        email,
        celular,
        totalClientes,
        sistemaAtual,
        mensagem,
        gestaoProcessos,
        businessInteligence,
        contactCenter
      } = req.body

      const user = await prisma.user.create({
        data: {
          primeiroNome,
          ultimoNome,
          email,
          celular,
          totalClientes: Number(totalClientes),
          sistemaAtual,
          mensagem,
          gestaoProcessos,
          businessInteligence,
          contactCenter
        }
      })
      return res.status(201).json({
        success: true,
        data: user
      })
    } catch (error) {
      console.error(error)

      if (error instanceof Error) {
        return res.status(400).json({ success: false, error: error.message })
      } else {
        // Tratamento para quando o erro não é uma instância de Error
        return res
          .status(400)
          .json({ success: false, error: 'Method not allowed' })
      }
    }
  }
}
