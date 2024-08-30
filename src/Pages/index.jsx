import styled from "styled-components"

const Home = ({ plan }) => {
    return (
        <StyledHome>
            {plan && plan.length > 0 ? (
                plan.map((item) => (
                    <StyledCard key={item.id}>
                        {item && item.machineNr ? (
                            <StyledListHeader>
                                <p>{item.machineNr}</p>
                                <p>{item.exerciseName}</p>
                            </StyledListHeader>
                        ) : (
                            <StyledListHeader>
                                <p>Fri</p>
                                <p>{item.exerciseName}</p>
                            </StyledListHeader>
                        )}

                        <StyledContent>
                            <span>
                                <label>Gentagelser</label>
                                <p>{item.repetitions}</p>
                            </span>
                            <span>
                                <label>Vægt</label>
                                {item && item.weight ? <p>{item.weight}</p> : <p>ingen</p>}
                            </span>
                        </StyledContent>
                        {item && item.remarks ? (
                            <span>
                                <label>Bemærkninger</label>
                                <p>{item.remarks}</p>
                            </span>
                        ) : (
                            <></>
                        )}
                    </StyledCard>
                ))
            ) : (
                <StyledCard>der er ikke nogle trænings plan</StyledCard>
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

const StyledCard = styled.div`
    background-color: #3b3b3b;
    padding: 1rem;
`

const StyledListHeader = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
`

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Home
