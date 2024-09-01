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
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

    min-width: 100px;
    min-height: 100px;
`

export default Popup
