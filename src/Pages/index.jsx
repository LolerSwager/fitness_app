import styled from "styled-components"
import PlanCard from "../Components/PlanCard"

const Home = ({ plan }) => {
    return (
        <StyledHome>
            {plan && plan.length > 0 ? (
                plan.map((item) => <PlanCard data={item} key={item.id} />)
            ) : (
                <p>der er ikke nogle trænings plan</p>
            )}
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    max-width: 600px;
    width: 100%;
    margin: auto;
    padding: 1rem 0;
    gap: 1rem;
    ul {
        list-style: none;
    }
`

export default Home
