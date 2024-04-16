'use client'

import * as S from './Demobi.Style'

export function DemoBi() {
  return (
    <>
      <S.Container>
        <S.Content>
          <div className="Container">
            <iframe
              allowFullScreen={true}
              className="bi"
              title="Dashboard Demo Dark"
              width="600"
              height="373.5"
              src="https://app.powerbi.com/view?r=eyJrIjoiNDA2Y2E2MDEtN2YwZS00MDM0LWIzMzUtZDZhN2Q0ODc5NzY5IiwidCI6IjYzOWQ1NmI2LTlhNWMtNDUxNC1iODFjLWZkMzgxMTY2MzFlYiJ9"
            />
          </div>
        </S.Content>
      </S.Container>
    </>
  )
}
