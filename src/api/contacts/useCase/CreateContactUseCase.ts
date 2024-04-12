interface CreateContactParams {
  name: string
  lastName: string
}

class CreateContactUseCase {
  async execute({ name, lastName }: CreateContactParams) {
    console.log(name)
    console.log(lastName)
  }
}

export { CreateContactUseCase }
