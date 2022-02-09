import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/appColors';

type LinkHeaderProps = {
    link: string
    className?: string
}

const StyledLinkHeader = styled.a`
    font-family: unset;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.lightGrey};
    text-decoration: none;
    margin-left: 32px;

   &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
   } 
`

export const LinkHeader: React.FC<LinkHeaderProps> = (props) => {
    return <StyledLinkHeader href={props.link} className={props.className}>{props.children}</StyledLinkHeader>
}


