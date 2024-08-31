import styled from "styled-components"
import PlanCard from "../Components/PlanCard"

const Home = ({ plan }) => {
    return (
        <StyledHome>
            {plan && plan.length > 0 && plan[0]?.exercisePlan ? (
                <>
                    <h1>{plan[0].Title}</h1>
                    {plan[0].exercisePlan.map((item) => (
                        <PlanCard data={item} key={item.id} />
                    ))}
                </>
            ) : (
                <h1>Der er ikke nogle træningsplan</h1>
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
    padding: 1rem;
    gap: 1rem;
    ul {
        list-style: none;
    }
`

export default Home
