// import { CreateContactUseCase } from "@/api/contacts/useCase/CreateContactUseCase";
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  console.log('api')

  const data = req.json()

  // const {name, lastName} = await req.json()

  // const service = new CreateContactUseCase()
  // await service.execute({
  //   name: name as string,
  //   lastName: lastName as string
  // })

  console.log(data)

  return NextResponse.json({ data })
}
