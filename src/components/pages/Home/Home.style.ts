'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 54px;
  padding-bottom: 54px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .container {
    width: 100%;
    height: 580px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 42px 80px 72px 80px;

    .subtitle {
      max-width: 320px;
      color: #80162a;
      padding: 4px 12px;
      border-radius: 16px;
      background-color: #fff3f0;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .content {
      gap: 24px;
      width: 592px;
      height: 244px;
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .buttons {
      gap: 12px;
      display: flex;
      padding-top: 48px;

      @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }

    .integrations {
      gap: 12px;
      display: flex;
      padding-top: 48px;
      flex-direction: column;

      .apps {
        gap: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 1035px) {
      gap: 40px;
      width: 100%;
      height: auto;
      display: flex;
    }
    @media (max-width: 768px) {
      height: auto;
      padding: 0;
      padding-top: 50px;
    }
  }

  .image-background {
    z-index: -1;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }

  .image-background-mobile {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

export const SectionFeatures = styled.div`
  display: flex;
  max-width: 100%;
  padding-bottom: 96px;
  flex-direction: column;

  .inteligence {
    display: flex;
    max-width: 100%;
    padding-top: 96px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1035px) {
      padding-right: 0;
    }
    @media (max-width: 768px) {
      padding-left: 10px;
      text-align: start;
    }
  }

  .text {
    gap: 20px;
    display: flex;
    max-width: 1280px;
    padding-right: 410px;
    flex-direction: column;

    .subtitle {
      color: #80162a;
      max-width: 800px;
    }
    .heading {
    }
    .paragraph {
      width: 100%;
    }

    @media (max-width: 1035px) {
      padding: 10px;
    }
  }

  .container-cards {
    gap: 32px;
    display: flex;
    padding-top: 64px;
    align-items: center;
    justify-content: center;

    .cards {
      width: 384px;
      height: 512px;
      background-color: #f9fafb;

      .feature-text {
        padding-top: 24px;
        padding-left: 24px;

        @media (max-width: 768px) {
          height: 100%;
          padding: 20px;
        }
      }

      .feature-icon {
        width: 48px;
        height: 48px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: #80162a;
      }

      .heading-feature {
        gap: 8px;
        display: flex;
        padding-top: 64px;
        padding-bottom: 146px;
        flex-direction: column;

        @media (max-width: 768px) {
          padding-top: 48px;
          padding-bottom: 20px;
        }
      }

      .buttonlink {
        gap: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      @media (max-width: 768px) {
        height: auto;
      }
    }
    @media (max-width: 1035px) {
      width: 100%;
      flex-direction: column;
    }
    @media (max-width: 768px) {
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 64px;
  }
`

export const SectionMap = styled.div`
  gap: 64px;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .header {
    gap: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      .heading {
        font-size: 36px;
        text-align: center;
      }
    }
  }
  .heading-xxs {
    color: #80162a;
  }

  .maps {
    max-width: 1283px;
    height: 402px;
    border: solid 1px #333;

    @media (max-width: 1035px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 400px;
    }
  }
`
