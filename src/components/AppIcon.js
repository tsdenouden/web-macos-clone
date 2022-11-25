import styled from "styled-components"
import useImage from "../hooks/useImage"

const AppIcon = ({img, onClick, alt, link}) => {
    const icon = useImage(img)

    return (
        <IconContainer onClick={onClick}>
            {!link && <IconImg src={icon} alt={alt}/>}
            {link && 
            <a href={link} target="_blank" rel="noopener noreferrer">
                <IconImg src={icon} alt={alt}/>
            </a>}
        </IconContainer>
    )
}

const IconContainer = styled.li`
    margin-inline: 10px;
    width: 40px;
    height: auto;
    padding: 0;
    margin: 0;
`;

const IconImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    cursor: default;
    padding: 0;
    margin: 0;
`;

export default AppIcon