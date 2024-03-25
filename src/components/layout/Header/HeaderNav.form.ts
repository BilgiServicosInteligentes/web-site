interface INavForm {
  link: string

  children: string
}

export const NavForm: INavForm[] = [
  {
    link: '/',
    children: 'Home'
  },
  {
    link: '/processos',
    children: 'Gestão de Processos'
  },
  {
    link: '/business-inteligence',
    children: 'Business Intelligence'
  },
  {
    link: '/contact-center',
    children: 'Contact Center'
  }
]
