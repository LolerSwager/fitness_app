const UrlParamHandler = () => {
    const url = new URL(window.location.href)

    const params = new URLSearchParams(url.search)

    const type = params.get("type")
    const name = params.get("name")
    let data = params.get("data")

    try {
        if (data) {
            data = JSON.parse(decodeURIComponent(data))

            // Use the parsed data
            if (data && Array.isArray(data)) {
                data.forEach((item) => {
                    console.log(`ID: ${item.id}, Name: ${item.name}, Title: ${item.Title}`)
                    item.exercisePlan.forEach((exercise) => {
                        console.log(`Exercise ID: ${exercise.id}, Name: ${exercise.exerciseName}`)
                    })
                })
            }
        } else {
            throw new Error("Data parameter is missing or empty.")
        }
    } catch (e) {
        console.error("Failed to parse the data parameter:", e)
    }

    if (type === "Create") {
        localStorage.setItem(name, data)
    } else if (type === "Change") {
        let existingData = localStorage.getItem(name)
        if (existingData) {
            existingData = JSON.parse(existingData)

            console.log("Existing Data:", existingData)
        } else {
            console.log(`No existing data found for key: ${name}`)
        }
    } else if (type === "Delete") {
        localStorage.removeItem(name)
    } else {
        console.log("Incorrect Params")
    }
}

export default UrlParamHandler
