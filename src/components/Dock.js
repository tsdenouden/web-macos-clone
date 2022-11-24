import styled from 'styled-components'
import useImage from '../hooks/useImage'

const Dock = () => {
    return (
        <DockWrapper>
            <AppDock>
                <ul style={{ display: 'flex' }}>
                    <Icon img="finder.png" alt="macos finder app icon" />
                    <Icon img="iterm2.png" alt="macos iterm2 app icon" />
                    <Icon img="chrome.png" alt="google chrome app icon" />
                    <Icon img="github.png" alt="github desktop app icon" />
                </ul>
                <div 
                    style={{ 
                        borderLeft: '1px solid rgba(174, 174, 178, 0.3)',
                        paddingLeft: '10px'
                    }}
                >
                    <Icon img="trashfull.png" alt="macos recycle bin icon" />
                </div>
            </AppDock>
        </DockWrapper>
    )
}

const Icon = ({img, alt}) => {
    const icon = useImage(img)
    return (
        <IconContainer>
            <IconImg src={icon} alt={alt}/>
        </IconContainer>
    )
}

const DockWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`;

const AppDock = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(44, 44, 46, 0.3);
    border: 1px solid rgba(174, 174, 178, 0.3);
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
    padding: 5px 5px 3px 5px;
    width: 20%;
`;

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
    padding: 0;
    margin: 0;
`;

export default Dock