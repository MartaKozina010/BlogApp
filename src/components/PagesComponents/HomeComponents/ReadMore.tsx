import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../../utils/theme"

const ReadMoreContainer = styled(Link)`
  display: relative;
  margin-top: auto;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 2em;
  color: ${({ theme }) => theme.readMore};

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

export const ReadMore = () => {
  return <ReadMoreContainer to="blog/1">Read more →</ReadMoreContainer>
}
