import styled from "styled-components"

const IFrame = ({url, title}) => {
    return (
        <IFrameWrapper src={url} title={title} frameBorder="0"></IFrameWrapper>
    )
}

const IFrameWrapper = styled.iframe`
    height: 100%;
    width: auto;
`;

export default IFrame