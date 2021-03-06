import styled, { css } from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 8px;

  header {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    ${props =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: ${props => props.theme.colors.textColor};
    }

    p {
      color: ${props => props.theme.colors.textColor};

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: ${props => props.theme.colors.backgroundTertiary};
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        background: ${props => props.theme.colors.backgroundPrimary};
        padding: 10px;
        border-radius: 8px;
        display: flex;
        border: none;
        transition: 0.1s;

        svg {
          color: ${props => props.theme.colors.textColor};
        }

        & + button {
          margin-left: 6px;
        }
      }
    }

    div.availability-container {
      display: flex;
      align-items: center;

      p {
        color: ${props => props.theme.colors.textColor};
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${props => props.theme.colors.primary};
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 38px;
            width: 38px;
            left: -2px;
            bottom: -2px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 50%;
          }
        }

        input:checked + .slider {
          background-color: ${props => props.theme.colors.secondary};
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(54px);
          -ms-transform: translateX(54px);
          transform: translateX(54px);
        }
      }
    }
  }
`;
