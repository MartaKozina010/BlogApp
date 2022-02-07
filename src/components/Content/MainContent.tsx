import styled from "styled-components";
import { ContentWidthLimiter } from "../../utils/ContentWidthLimiter";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const ContentContainer = styled(ContentWidthLimiter)`
    display: flex;
    flex-direction: column;
`

const TextContainer = styled.div`

`

export const MainContent = () => {
    return (
        <MainContainer>
            <ContentContainer>
                <TextContainer>
                <br />
                <br />
                <p>C'e ancora niente qui!</p>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br />
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <br />
                <br />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br />
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <br />
                <br />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br />
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <br />
                <br />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br />
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <br />
                <br />
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <br />
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <br />
                <br />
                </TextContainer>
            </ContentContainer>
        </MainContainer>
    )
}