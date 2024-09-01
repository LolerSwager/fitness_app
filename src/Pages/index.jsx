import styled from "styled-components"
import PlanCard from "../Components/PlanCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsUpDownLeftRight, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"

const Home = ({ plan, onDeletePlan }) => {
    return (
        <StyledHome>
            {plan && plan.length > 0 && plan[0]?.exercisePlan ? (
                <>
                    <span className="row">
                        <h1>{plan[0].Title}</h1>

                        <ul>
                            <li onClick={() => onDeletePlan(plan[0])}>
                                Delete
                                <FontAwesomeIcon icon={faTrashCan} />
                            </li>
                            <li>
                                Move
                                <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
                            </li>
                            <li>
                                Change
                                <FontAwesomeIcon icon={faPen} />
                            </li>
                        </ul>
                    </span>

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
    width: 100%;
    margin: auto;
    padding: 1rem;
    gap: 1rem;
    ul {
        list-style: none;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        ul {
            display: flex;
            align-items: center;

            color: white;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(4.9px);
            border: 0.2rem solid rgba(255, 255, 255, 0.3);
            border-radius: 1rem;

            li {
                display: inherit;
                align-items: center;
                gap: 0.7rem;
                padding: 0.7rem;
                list-style: none;
                cursor: pointer;
                font-weight: 550;

                &:hover {
                    color: rgba(0, 0, 0, 0.555);
                    * {
                        color: rgba(0, 0, 0, 0.555);
                    }
                }

                position: relative;

                &:not(:first-child) {
                    &::before {
                        content: "";
                        width: 0.2rem;
                        height: 100%;
                        background: rgba(255, 255, 255, 0.3);
                        position: absolute;
                        top: 0pc;
                        right: 100%;
                    }
                }
            }
        }
    }
`

export default Home
