import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";

type MainArticleProps = {
    title: string,
    author: string,
    postedDate: Date,
    image: string,
    description: string
}

const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 830px;
`

const MainArticleContainer = styled(ContentWidthLimiter)`
        margin-left: auto;
        margin-right: auto;

    h1{
        font-size: 48px;
        font-weight: 600;
        color: ${colors.darkBlue};
        text-align: center;
        margin-top: 128px;
        margin-bottom: 16px;
    }

    img{
        max-width: 1280px;
        width: 1280px;
        height: 500px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        color: ${colors.darkBlue};
        text-align: center;  
    }

    a{
        font-size: 16px;
        font-weight: 300;
        color: ${colors.royalBlue};
        text-align: center;    
        text-decoration: none;
        margin-top: 16px;
        margin-bottom: 50px;
        }

        a:hover{
        text-decoration: underline;
        text-decoration-color: ${colors.hotPink};
        }
`

const DateAuthorContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;

    p{
        font-size: 16px;
        font-weight: 500;
        color: ${colors.darkBlue};
        margin-right: 10px;
    }
`

export const MainArticle: React.FC<MainArticleProps> = (props) => {
    return (
        <MainArticleContainer>
            <ContentContainer>
                <h1>{props.title}</h1>
                <DateAuthorContainer>
                    <p>{props.author}</p>
                    <p>Posted on {props.postedDate.toDateString()}</p>
                </DateAuthorContainer>
                <img src={props.image} />
                <p>{props.description}</p>
                <a href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">Read more →</a>
            </ContentContainer>
        </MainArticleContainer>
    )
}