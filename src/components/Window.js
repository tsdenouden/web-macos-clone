import { useEffect, useRef } from "react"
import styled from "styled-components"

const Window = (props) => {
    const AppWindow = useRef(null)
    const AppWindowMenu = useRef(null)
    const offset = useRef({x: 0, y:0})
    const isClicked = useRef(false)
    
    // make window draggable
    useEffect(() => {
        if (!AppWindow.current || !AppWindowMenu.current) return;

        const window = AppWindow.current
        const menu = AppWindowMenu.current
        const Desktop = window.parentElement


        const onMouseDown = (e) => {
            isClicked.current = true
            // calculate distance from mouse to start of window menu
            const rect = window.getBoundingClientRect()
            offset.current.x = e.clientX-rect.x
            offset.current.y = e.clientY-rect.y
        }

        const onMouseUp = (e) => isClicked.current = false

        const onMouseMove = (e) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - offset.current.x
            const nextY = e.clientY - offset.current.y

            window.style.top = `${nextY}px`
            window.style.left = `${nextX}px`
        }

        menu.addEventListener('mousedown', onMouseDown)
        menu.addEventListener('mouseup', onMouseUp)
        Desktop.addEventListener('mousemove', onMouseMove)

        const cleanup = () => {
            menu.removeEventListener('mousedown', onMouseDown)
            menu.removeEventListener('mouseup', onMouseUp)
            Desktop.removeEventListener('mousemove', onMouseMove)
        }
        
        return cleanup
    }, [])

    return (
        <Container ref={AppWindow}>
            <Menu ref={AppWindowMenu}>
                <MenuControl>
                    <li>
                        <CircularButton 
                        color="rgb(255,69,58)" 
                        size="6px"
                        onClick={props.onClose}
                        />
                    </li>
                    <li>
                        <CircularButton color="rgb(255,159,10)" size="6px" />
                    </li>
                    <li>
                        <CircularButton color="rgb(48,209,88)" size="6px" />
                    </li>
                </MenuControl>
            </Menu>
            <Content>
                {props.children}
            </Content>
        </Container>
    )
}

const CircularButton = ({ color, size, onClick }) => {
    return (
        <div
            style={{
                borderRadius: '50%',
                backgroundColor: color,
                padding: size,
                marginInline: '3px'
            }}
            onClick={onClick}
        >
        </div>
    )
}

const Container = styled.div`
    position: absolute;
    z-index: -1;
    top: 5vh;
    left: 27vw;
    background-color: rgb(28,28,30);
    border: 1px solid rgba(174, 174, 178, 0.3);
    border-radius: 1rem;
    filter: drop-shadow(0 30px 25px rgb(20, 20, 22));
    width: 700px;
    height: 80%;
    resize: both;
    overflow: auto;
`;

const Menu = styled.div`
    padding: 15px;
    padding-left: 10px;
    cusor: pointer;
`;

const MenuControl = styled.ul`
    display: flex;
    margin-inline: 3px;
`;

const Content = styled.div`
    padding: 20px;
`;

export default Window