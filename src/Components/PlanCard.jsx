import styled from "styled-components"
import { faDumbbell, faNoteSticky, faRepeat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PlanCard = ({ data }) => {
    return (
        <StyledCard>
            {data && data.machineNr ? (
                <h3>
                    {data.machineNr} - {data.exerciseName}
                </h3>
            ) : (
                <h3>Fri - {data.exerciseName}</h3>
            )}
            <StyledContent>
                <span>
                    <label>
                        <h4> Gentagelser</h4>
                        <FontAwesomeIcon icon={faRepeat} />
                    </label>
                    <p>{data.repetitions}</p>
                </span>
                <span>
                    <label>
                        <h4> Vægt</h4>
                        <FontAwesomeIcon icon={faDumbbell} />
                    </label>
                    {data && data.weight ? <p>{data.weight} Kg.</p> : <p>ingen</p>}
                </span>
            </StyledContent>
            {data && data.remarks ? (
                <StyledContent>
                    <span>
                        <label>
                            <h4>Bemærkninger</h4>
                            <FontAwesomeIcon icon={faNoteSticky} />
                        </label>
                        <>{data.remarks}</>
                    </span>
                </StyledContent>
            ) : (
                <></>
            )}
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.3rem;
    padding: 1rem;
    border-radius: 10px;

    //Glass effect
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    -webkit-backdrop-filter: blur(4.9px);
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

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export default PlanCard
