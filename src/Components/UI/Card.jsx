import styled from "styled-components"

const Card = ({ content }) => {
    return <StyledCard>{content}</StyledCard>
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.3rem;
    padding: 2rem;
    border-radius: 10px;

    //Glass effect
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    border: 0.2rem solid rgba(255, 255, 255, 0.3);
    h3 {
        position: relative;
        &::before {
            content: "";
            width: 100%;
            height: 3px;
            background: rgba(255, 255, 255, 0.2);
            position: absolute;
            top: 100%;
            right: 0px;
        }
    }
    label {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`
