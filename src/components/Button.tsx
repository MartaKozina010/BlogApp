import React from "react";
import styled, { css } from 'styled-components';
import { colors, getContrastColor } from '../utils/colors';

type ButtonProps = {
  width?: "full" | number
  variant: "darkBlue" | "lightBlue" | "darkYellow" | "lightYellow"
  className?: string
}

const StyledButton = styled.button<ButtonProps>`
  height: 64px;
  border-radius: 50px;
  border-style: none;
  cursor: pointer;
  font-family: unset;
  font-size: 18px;
  font-weight: 500;

  ${props => css`
    width: ${props.width === "full" ? "100%" : `${props.width}px`};
    background-color: ${colors[props.variant]};
    color: ${getContrastColor(props.variant)};
  `}

  &:hover {
    text-decoration: underline;
    opacity: 80%;
  }
`

export const Button: React.FC<ButtonProps> = ({ width = 220, variant, className, children }) => {
  return <StyledButton width={width} variant={variant} className={className}>{children}</StyledButton>
}