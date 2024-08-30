import styled from "styled-components"
import { faDumbbell, faRepeat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PlanCard = ({ data }) => {
    return (
        <StyledCard>
            {data && data.machineNr ? (
                <StyledListHeader>
                    <h2>{data.machineNr}</h2>
                    <h2>{data.exerciseName}</h2>
                </StyledListHeader>
            ) : (
                <StyledListHeader>
                    <p>Fri</p>
                    <p>{data.exerciseName}</p>
                </StyledListHeader>
            )}
            <StyledContent>
                <span>
                    <label>
                        Gentagelser
                        <FontAwesomeIcon icon={faRepeat} />
                    </label>
                    <p>{data.repetitions}</p>
                </span>
                <span>
                    <label>
                        Vægt
                        <FontAwesomeIcon icon={faDumbbell} />
                    </label>
                    {data && data.weight ? <p>{data.weight} Kg.</p> : <p>ingen</p>}
                </span>
            </StyledContent>
            {data && data.remarks ? (
                <span>
                    <h3>Bemærkninger</h3>
                    <p>{data.remarks}</p>
                </span>
            ) : (
                <></>
            )}
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    -webkit-backdrop-filter: blur(4.9px);
    border: 0.2rem solid rgba(255, 255, 255, 0.3);

    padding: 1rem;
    border-radius: 10px;
    label {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
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

export default PlanCard
