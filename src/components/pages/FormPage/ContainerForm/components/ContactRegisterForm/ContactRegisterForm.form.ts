import * as Yup from 'yup'

export interface ContactForm {
  primeiroNome: string
  ultimoNome: string
  email: string
  celular: string
  totalClientes: string
  sistemaAtual: string
  mensagem: string
  gestaoProcessos: boolean
  businessInteligence: boolean
  contactCenter: boolean
}

export const initialValues: ContactForm = {
  primeiroNome: '',
  ultimoNome: '',
  email: '',
  celular: '',
  totalClientes: '',
  sistemaAtual: '',
  mensagem: '',
  gestaoProcessos: false,
  businessInteligence: false,
  contactCenter: false
}

export const validationSchema = Yup.object().shape({
  primeiroNome: Yup.string()
    .required('Campo Obrigatório')
    .min(3, 'O nome deve ter o mínimo de 3 caracteres')
    .max(64, 'O nome deve ter o máximo de 64 caracteres'),
  ultimoNome: Yup.string()
    .required('Campo Obrigatório')
    .min(3, 'O nome deve ter o mínimo de 3 caracteres')
    .max(64, 'O nome deve ter o máximo de 64 caracteres'),
  email: Yup.string().required('Campo Obrigatório'),
  celular: Yup.string().required('Campo Obrigatório'),
  totalClientes: Yup.string().required('Campo Obrigatório'),
  sistemaAtual: Yup.string().required('Campo Obrigatório'),
  gestaoProcessos: Yup.boolean().required('Campo Obrigatório'),
  businessInteligence: Yup.boolean().required('Campo Obrigatório'),
  contactCenter: Yup.boolean().required('Campo Obrigatório')
})
