interface INavForm {
  link: string

  children: string
}

export const NavForm: INavForm[] = [
  {
    link: '/home',
    children: 'Home'
  },
  {
    link: '/processos',
    children: 'Gerenciamento Estratégico'
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
