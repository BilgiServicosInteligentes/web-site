'use client'
import { ContainerForm } from './ContainerForm/ContainerForm'
import { GetStaticProps } from 'next'
import { getUsers } from '@/lib/users'

export function FormPage() {
  return <ContainerForm />
}
export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers()

  console.log(users)

  return {
    props: {
      users
    },
    revalidate: 5
  }
}
