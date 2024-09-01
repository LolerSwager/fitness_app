import styled from "styled-components"
import PlanCard from "../Components/PlanCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd, faArrowsUpDownLeftRight, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Home = ({ plan, onDeletePlan }) => {
    const [editMode, setEditMode] = useState(false)
    const [changeMode, setChangeMode] = useState(false)

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
                                Flyt
                                <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
                            </li>
                            <li
                                onClick={() => {
                                    setEditMode((prevState) => !prevState)
                                    setChangeMode(false)
                                }}
                            >
                                Rediger
                                <FontAwesomeIcon icon={faPen} />
                            </li>
                        </ul>
                    </span>
                    {plan[0].exercisePlan.map((item) => (
                        <PlanCard data={item} key={item.id} />
                    ))}

                    {editMode === true ? (
                        <PlanCardAdd
                            onClick={() => {
                                setChangeMode((prevState) => !prevState)
                                setEditMode((prevState) => !prevState)
                            }}
                        >
                            <FontAwesomeIcon icon={faAdd} />
                        </PlanCardAdd>
                    ) : (
                        <></>
                    )}

                    {changeMode === true ? (
                        <PlanCardChange>
                            <div className="rowChange">
                                <section>
                                    <select>
                                        <option value={null}>Fri hånd</option>
                                        {Array.from({ length: 100 }, (_, index) => (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        ))}
                                    </select>
                                </section>
                                <input type="text" placeholder="Navn" />
                            </div>
                            <div className="rowChange">
                                <input type="text" placeholder="Gentagelser" />
                                <input
                                    type="text"
                                    placeholder="Vægt"
                                    name="numonly"
                                    maxlength="4"
                                    inputmode="numeric"
                                    pattern="\d*"
                                ></input>
                                <p>Kg.</p>
                            </div>
                            <textarea name="" id="" rows="5" placeholder="Bemærkninger"></textarea>

                            <div className="rowChange">
                                <button
                                    onClick={() => {
                                        setEditMode((prevState) => !prevState)
                                        setChangeMode((prevState) => !prevState)
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setEditMode((prevState) => !prevState)
                                        setChangeMode((prevState) => !prevState)
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </PlanCardChange>
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <h1>Der er ikke nogle træningsplan</h1>
            )}
        </StyledHome>
    )
}

const PlanCardChange = styled.div`
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

    input,
    textarea,
    select,
    button {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid black;
        width: 100%;
        min-width: 100px;
    }

    .rowChange {
        display: flex;
        gap: 1rem;
        width: 100%;
    }
`

const PlanCardAdd = styled.div`
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

    //plus icon
    font-size: 5rem;
    cursor: pointer;
    &:hover {
        color: rgba(255, 255, 255, 0.3);
    }
`

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
