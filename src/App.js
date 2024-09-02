import "./App.css"
import Home from "./Pages"
import JannickData from "./Json/Jannick_plan.json"
import AnitaData from "./Json/Anita_plan.json"
import OpvarmingData from "./Json/Opvarming_plan.json"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Popup from "./Components/Popup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import UrlParamHandler from "./hooks/UrlParamHandler"

function App() {
    // demo data
    useEffect(() => {
        if (!localStorage.getItem("Øvelser")) {
            localStorage.setItem("Øvelser", JSON.stringify(OpvarmingData))
        }
        if (!localStorage.getItem("Jannick")) {
            localStorage.setItem("Jannick", JSON.stringify(JannickData))
        }
        if (!localStorage.getItem("Anita")) {
            localStorage.setItem("Anita", JSON.stringify(AnitaData))
        }
        if (!localStorage.getItem("planList")) {
            localStorage.setItem("planList", JSON.stringify(["Øvelser", "Jannick", "Anita"]))
        }
    }, [])

    const storedPlan = localStorage.getItem("PlanData")
    let initialPlan = null

    if (storedPlan) {
        try {
            initialPlan = JSON.parse(storedPlan)
        } catch (e) {
            console.error("Error parsing JSON from localStorage:", e)
            initialPlan = null
        }
    }

    const storedPlanList = localStorage.getItem("planList")
    let initialPlanList = []

    if (storedPlanList) {
        try {
            initialPlanList = JSON.parse(storedPlanList)
        } catch (e) {
            console.error("Error parsing JSON from localStorage:", e)
            initialPlanList = []
        }
    }

    const [plan, setPlan] = useState(initialPlan)
    const [planList, setPlanList] = useState(initialPlanList)

    const CleanData = () => {
        localStorage.removeItem("PlanData")
        setPlan(null)
    }

    function HandleCurrentPlan(item) {
        const selectedPlan = localStorage.getItem(item)
        if (selectedPlan) {
            localStorage.setItem("PlanData", selectedPlan)
            setPlan(JSON.parse(selectedPlan))
        }
    }

    const [planName, setPlanName] = useState("")
    const handleChangePlanName = (event) => {
        setPlanName(event.target.value)
    }

    const [planTitle, setPlanTitle] = useState("")
    const handleChangePlanTitle = (event) => {
        setPlanTitle(event.target.value)
    }

    const CreateNewPlan = () => {
        const newPlanName = planName.trim()
        const newPlanTitle = planTitle.trim()

        if (!newPlanName || !newPlanTitle) {
            alert("Please provide both a plan name and a title.")
            return
        }

        const updatedPlanList = [...planList, newPlanName]
        setPlanList(updatedPlanList)
        localStorage.setItem("planList", JSON.stringify(updatedPlanList))

        const newPlan = [
            {
                id: `${planList.length + 1}`,
                name: newPlanName,
                Title: newPlanTitle,
                exercisePlan: [
                    {
                        id: 1,
                        machineNr: null,
                        exerciseName: null,
                        repetitions: null,
                        weight: null,
                        remarks: null,
                    },
                ],
            },
        ]

        localStorage.setItem(newPlanName, JSON.stringify(newPlan))

        localStorage.setItem("PlanData", JSON.stringify(newPlan))
        setPlan(newPlan)

        setPlanName("")
        setPlanTitle("")

        //close popup after
        handleClosePopup()
    }

    const handleDeletePlan = (planToRemove) => {
        const updatedPlanList = planList.filter((item) => item !== planToRemove.name)
        setPlanList(updatedPlanList)
        localStorage.setItem("planList", JSON.stringify(updatedPlanList))

        localStorage.removeItem(planToRemove.name)

        localStorage.removeItem("PlanData")
        setPlan(null)
    }

    const [isPopupVisible, setPopupVisible] = useState(false)

    const handleOpenPopup = () => {
        setPopupVisible(true)
    }

    const handleClosePopup = () => {
        setPopupVisible(false)
    }

    useEffect(() => {
        UrlParamHandler()
    }, [])

    return (
        <StyledApp>
            <header></header>
            <main>
                <menu>
                    <h3>Mine Skemaer</h3>

                    <ul>
                        {planList.map((item) => (
                            <li key={item} onClick={() => HandleCurrentPlan(item)}>
                                {item}
                            </li>
                        ))}
                        <li onClick={handleOpenPopup}>Tilføj</li>
                        {isPopupVisible && (
                            <Popup
                                content={
                                    <StyledAddForm>
                                        <StyledAddFormHeader>
                                            <h2>Create new plan</h2>
                                            <FontAwesomeIcon
                                                icon={faXmark}
                                                onClick={handleClosePopup}
                                                className="faicon"
                                            />
                                        </StyledAddFormHeader>
                                        {/* <label>Felt Navn</label> */}
                                        <input
                                            type="text"
                                            onChange={handleChangePlanName}
                                            value={planName}
                                            placeholder="Name"
                                        />
                                        {/* <label>Felt Title</label> */}
                                        <input
                                            type="text"
                                            onChange={handleChangePlanTitle}
                                            value={planTitle}
                                            placeholder="Title"
                                        />
                                        <button onClick={CreateNewPlan}>Tilføj</button>
                                    </StyledAddForm>
                                }
                                onClose={handleClosePopup}
                            />
                        )}
                    </ul>
                </menu>
                <Home plan={plan} onDeletePlan={handleDeletePlan} />
                <div className="spacer">
                    <button onClick={CleanData}>Clean Data</button>
                </div>
            </main>
            <footer></footer>
        </StyledApp>
    )
}

const StyledApp = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(45deg, rgb(255, 104, 192) 11.1%, rgb(104, 84, 249) 81.3%);

    main {
        display: flex;
        flex-direction: column;
        .spacer {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            button {
                padding: 0.5rem 0.7rem;
                border: none;
                border-radius: 5px;
                background-color: #eee;
                color: #000;
                cursor: pointer;
                &:hover {
                    background-color: #9d9d9d88;
                }
            }
        }
        menu {
            color: white;
            padding: 1rem;
            h3 {
                margin-bottom: 1rem;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                li {
                    list-style: none;
                    cursor: pointer;
                    padding: 0.7rem;
                    color: white;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 16px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(4.9px);
                    border: 0.2rem solid rgba(255, 255, 255, 0.3);
                    border-radius: 1rem;
                }
            }
        }
    }
`

const StyledAddFormHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;

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

    .faicon {
        height: 1.6rem;
        width: 1.6rem;
        cursor: pointer;
        &:hover {
            color: rgba(255, 255, 255, 0.2);
        }
    }
`

const StyledAddForm = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;

    label {
        color: black;
        font-weight: 500;
    }
    input,
    button {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid black;
        margin: 0 1rem 1rem 1rem;
    }
`

export default App
