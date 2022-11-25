import styled from 'styled-components'
import AppIcon from './AppIcon'

const Dock = ({openApp}) => {
    return (
        <Wrapper>
            <Apps>
                <div style={{ display: 'flex' }}>
                    <AppIcon 
                        img="finder.png" 
                        onClick={() => {openApp('finder')}}
                        alt="macos finder app icon" 
                    />
                    <AppIcon 
                        img="iterm2.png" 
                        onClick={() => {openApp('terminal')}}
                        alt="macos iterm2 app icon" 
                    />
                    <AppIcon 
                        img="chrome.png" 
                        onClick={() => {openApp('chrome')}}
                        alt="google chrome app icon" 
                    />
                    <AppIcon 
                        img="github.png" 
                        link="https://github.com/tsdenouden/web-macos-clone"
                        alt="github desktop app icon" 
                    />
                </div>
                <div 
                    style={{ 
                        borderLeft: '1px solid rgba(174, 174, 178, 0.3)',
                        paddingLeft: '10px'
                    }}
                >
                    <AppIcon img="trashfull.png" alt="macos recycle bin icon" />
                </div>
            </Apps>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`;

const Apps = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(44, 44, 46, 0.3);
    border: 1px solid rgba(174, 174, 178, 0.3);
    border-radius: 0.5rem;
    backdrop-filter: blur(10px);
    padding: 5px 5px 3px 5px;
    width: 20%;
`;

export default Dock