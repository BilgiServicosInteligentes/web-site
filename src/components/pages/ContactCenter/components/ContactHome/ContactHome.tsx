'use client'
import { Heading } from '@/components/core/Typography/Heading'
import { Paragraph } from '@/components/core/Typography/Paragraph'
import { Button } from '@/components/core/Buttons/Button'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useDeviceDetection } from '@/hooks/utils/useDeviceDetection'

import * as S from './ContactHome.Style'

import { Icon } from '@/components/core/Icon'

export function ContactHome() {
  const { isMobile } = useDeviceDetection()
  return (
    <S.ContainerHome>
      <div className="container1">
        <div className="content">
          <Heading size="xxs" className="subtitle">
            Contact Center
          </Heading>
          <Heading size="lg" className="title">
            Priorizamos o atendimento humanizado
          </Heading>
          <Paragraph size="md" className="paragraph">
            Deixe suas dores de cabeça para nós.
          </Paragraph>
        </div>
        <div className="buttons">
          <Button button_size="xxl" styles="primary" className="button">
            Agendar Chamada
          </Button>
          <Button button_size="xxl" styles="secondary" className="button">
            Explorar
          </Button>
        </div>
        <div className="extra">
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Suporte 24/7”</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Recuperação de Clientes”</Paragraph>
          </div>
          <div className="extra-infos">
            <Icon IconRender={CheckIcon} mode="primary" size="sm"></Icon>
            <Paragraph size="sm">“Totalmente Personalizado”</Paragraph>
          </div>
        </div>
      </div>
      {!isMobile ? (
        <div className="container2">
          <div className="content-image">....</div>
        </div>
      ) : (
        <div className="container2-mobile">
          <div className="content-image">....</div>
        </div>
      )}
    </S.ContainerHome>
  )
}