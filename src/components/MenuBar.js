import styled from 'styled-components'
import useImage from '../hooks/useImage';
import FormatDateTime from '../utils/FormatDateTime';

const MenuBar = () => {
    const appleLogo = useImage('apple.png')

    const curr_date = new Date()
    const time = FormatDateTime(curr_date)

    return (
        <MenuContainer>
            <Bar>
                <MenuIcon>
                    <MenuIconImg src={appleLogo} alt="apple logo" />
                </MenuIcon>
                <ul style={{ display: 'flex' }}>
                    <li>
                        <p>
                            {time}
                        </p>
                    </li>
                </ul>
            </Bar>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(44, 44, 46, 0.3);
    backdrop-filter: blur(10px);
    margin: 0;
`;

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    padding-inline: 15px;
    padding-left: 25px;
`;

const MenuIcon = styled.div`
    width: 12px;
    height: auto;
`;

const MenuIconImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
`;

export default MenuBar