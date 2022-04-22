import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../../utils/theme"
import { globalFont } from "../../../utils/fonts"

const ReadMoreContainer = styled.div`
  display: relative;
  margin-top: auto;
  margin-bottom: 2em;

  a {
    font-size: ${globalFont.p16};
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.readMore};
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.hotPink};
  }
`

type ReadMoreType = {
  articleIndex: number
}

export const ReadMore = (props: ReadMoreType) => {
  return (
    <ReadMoreContainer>
      <Link to={`/${props.articleIndex}`}>Read more →</Link>
    </ReadMoreContainer>
  )
}
