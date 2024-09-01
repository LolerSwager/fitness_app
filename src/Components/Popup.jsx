import styled from "styled-components"

const Popup = ({ content, onClose }) => {
    return (
        <FullscreenFrame onClick={onClose}>
            <StyledPopup onClick={(e) => e.stopPropagation()}>{content}</StyledPopup>
        </FullscreenFrame>
    )
}

const FullscreenFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #00000055;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`

const StyledPopup = styled.div`
    color: white;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    border: 0.2rem solid rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    overflow: hidden;
    min-width: 100px;
    min-height: 100px;
`

export default Popup
