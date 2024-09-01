import "./App.css"
import Home from "./Pages"
import JannickData from "./Json/Jannick_plan.json"
import AnitaData from "./Json/Anita_plan.json"
import OpvarmingData from "./Json/Opvarming_plan.json"
import { useState, useEffect } from "react"
import styled from "styled-components"

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

    const CreateNewPlan = () => {
        const newPlanName = `newPlan ${planList.length + 1}`
        const updatedPlanList = [...planList, newPlanName]
        setPlanList(updatedPlanList)
        localStorage.setItem("planList", JSON.stringify(updatedPlanList))

        const newPlan = [
            {
                id: `${planList.length + 1}`,
                name: newPlanName,
                Title: `${newPlanName} Plan`,
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
    }

    const handleDeletePlan = (planToRemove) => {
        const updatedPlanList = planList.filter((item) => item !== planToRemove.name)
        setPlanList(updatedPlanList)
        localStorage.setItem("planList", JSON.stringify(updatedPlanList))

        localStorage.removeItem(planToRemove.name)

        localStorage.removeItem("PlanData")
        setPlan(null)
    }

    return (
        <StyledApp>
            <header></header>
            <main>
                <menu>
                    <h3>Mine Planer</h3>
                    <ul>
                        {planList.map((item) => (
                            <li key={item} onClick={() => HandleCurrentPlan(item)}>
                                {item}
                            </li>
                        ))}
                        <li onClick={CreateNewPlan}>add</li>
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

export default App
