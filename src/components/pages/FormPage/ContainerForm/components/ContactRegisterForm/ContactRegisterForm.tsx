import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Col, Row } from 'react-bootstrap'
import { initialValues, validationSchema } from './ContactRegisterForm.form'
import { InputField } from '@/components/core/Form/Fields/InputField'
import { Button } from '@/components/core/Buttons/Button'
import { CheckBox } from '@/components/core/Form/Fields/CheckBox'
import { TextArea } from '@/components/core/Form/Fields/TextArea'
import { cellPhoneNumberMask } from '@/components/pages/components/utils/FunctionMask'

export function ContactRegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.log(initialValues)}
    >
      {({ values, touched, errors, isValid, setFieldValue }) => (
        <Form>
          <Row className="mb-4 g-4">
            <Col xs={12} md={6}>
              <Field
                as={InputField}
                label="Primeiro Nome"
                name="primeiroNome"
                placeholder="Digite seu primeiro nome"
                type="text"
                error={
                  touched.primeiroNome && !!errors.primeiroNome
                    ? errors.primeiroNome
                    : ''
                }
                helperText={
                  touched.primeiroNome && !!errors.primeiroNome
                    ? errors.primeiroNome
                    : ''
                }
              />
            </Col>

            <Col xs={12} md={6}>
              <Field
                as={InputField}
                label="Último Nome"
                name="ultimoNome"
                placeholder="Digite seu ultimo nome"
                type="text"
                error={
                  touched.ultimoNome && !!errors.ultimoNome
                    ? errors.ultimoNome
                    : ''
                }
                helperText={
                  touched.ultimoNome && !!errors.ultimoNome
                    ? errors.ultimoNome
                    : ''
                }
              />
            </Col>
          </Row>
          <Row className="mb-4 ">
            <Field
              as={InputField}
              label="E-mail"
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
              error={
                touched.ultimoNome && !!errors.ultimoNome
                  ? errors.ultimoNome
                  : ''
              }
              helperText={touched.email && !!errors.email ? errors.email : ''}
            />
          </Row>

          <Row className="mb-4 ">
            <Field
              as={InputField}
              label="Celular"
              name="celular"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFieldValue('celular', cellPhoneNumberMask(e.target.value))
              }}
              placeholder="(00) 00000-0000"
              type="text"
              error={touched.celular && !!errors.celular ? errors.celular : ''}
              helperText={
                touched.celular && !!errors.celular ? errors.celular : ''
              }
            />
          </Row>

          <Row className="mb-4 g-4">
            <Col xs={12} md={6}>
              <Field
                as={InputField}
                label="Quantidade de Clientes"
                name="totalClientes"
                placeholder="Insira clientes na base"
                type="text"
                error={
                  touched.totalClientes && !!errors.totalClientes
                    ? errors.totalClientes
                    : ''
                }
                helperText={
                  touched.totalClientes && !!errors.totalClientes
                    ? errors.totalClientes
                    : ''
                }
              />
            </Col>

            <Col xs={12} md={6}>
              <Field
                as={InputField}
                label="Sistema Atual"
                name="sistemaAtual"
                placeholder="Digite o seu Sistema Atual"
                type="text"
                error={
                  touched.sistemaAtual && !!errors.sistemaAtual
                    ? errors.sistemaAtual
                    : ''
                }
                helperText={
                  touched.sistemaAtual && !!errors.sistemaAtual
                    ? errors.sistemaAtual
                    : ''
                }
              />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Field
                as={TextArea}
                label="Mensagem"
                placeholder="Deixe-nos uma mensagem..."
                name="mensagem"
                description="Mensagem"
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Field
                as={CheckBox}
                checked={values.gestaoProcessos}
                name="gestaoProcessos"
                description="Gerenciamento Estratégico"
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Field
                as={CheckBox}
                checked={values.businessInteligence}
                name="businessInteligence"
                description="Business Intelligence"
              />
            </Col>
          </Row>

          <Row className="mb-5 ">
            <Col>
              <Field
                as={CheckBox}
                checked={values.contactCenter}
                name="contactCenter"
                description="Contact Center"
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col className="d-flex justify-content-center">
              <Button
                type="submit"
                button_size="xxl"
                styles="primary"
                className="button-form"
                disabled={!isValid} // Usa isSubmitting corretamente
              >
                Enviar Mensagem
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}
