import styled from "styled-components"
import { colors } from "../../utils/appColors"
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";

type SingleArticleProps = {
    image?: string,
    postedDate?: Date,
    title?: string,
    description?: string
}

const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0;
`

const SingleArticleContainer = styled.div`
    width: 400px;
    margin-right: 0;
    margin-left: 0;
    padding-left: 0px;
    padding-right: 0px;

    img{
        margin-bottom: 32px;
        width: 400px;
        height: 280px;
    }

    h1{
        font-size: 24px;
        font-weight: 500;
        color: ${colors.darkBlue};
        margin-top: 16px;
        margin-bottom: 16px;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        color: ${colors.darkBlue};
        margin-bottom: 24px;
    }

    a{
        font-size: 16px;
        font-weight: 600;
        color: ${colors.darkBlue};  
        text-decoration: none;
        margin-bottom: 30px;
        }

        a:hover{
        text-decoration: underline;
        text-decoration-color: ${colors.hotPink};
        }

    h3{ //date
        font-size: 16px;
        font-weight: 500;
        color: ${colors.darkBlue};
    }
`

export const SingleArticle: React.FC<SingleArticleProps> = (props) => {
    const {
        image = "https://us.123rf.com/450wm/deagreez/deagreez1905/deagreez190501463/122178757-pleine-longueur-c%C3%B4t%C3%A9-profil-taille-du-corps-photo-funky-dr%C3%B4le-elle-lui-il-lui-son-gars-dame-sauter-h.jpg?ver=6",
        postedDate = new Date(2015, 11, 11),  
        title = "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
        description = "See how pivoting to Webflow changed one person sales strategy and allowed him to attract"
    } = props;

    return (
        <SingleArticleContainer>
            <ContentContainer>
            <img src={image} />
            <h3>{postedDate.toDateString()}</h3>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href="https://d-art.ppstatic.pl/kadry/k/r/1/3b/59/5fb8d717a60f9_o_large.jpg">Read more →</a>
            </ContentContainer>
        </SingleArticleContainer>
    )
}