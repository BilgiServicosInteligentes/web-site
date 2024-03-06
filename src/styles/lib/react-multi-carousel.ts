'use client'

import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${props => css`
    .react-multi-carousel-track {
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .react-multi-carousel-dot {
      button {
        background-color: ${props.theme.colors.primary.primary_100};
        border-color: ${props.theme.colors.primary.primary_100};
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.5rem;
      }

      &--active {
        button {
          width: 0.7rem;
          height: 0.7rem;
          background-color: ${props.theme.colors.base.black};
          border-color: ${props.theme.colors.base.black};
        }
      }
    }
  `}
`
