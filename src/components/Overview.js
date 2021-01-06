import React from "react"
import uniqid from "uniqid"

const Overview = (props) => {
    const { tasks, handleRemove } = props
    return (
        <ul>
            {tasks.map((task, index) => {
                index = index + 1
                return <li key={uniqid}>{index}. {task} 
                            <button id={index} onClick={handleRemove}>
                                delete
                            </button>
                        </li>
                
            })}
        </ul>      
    )
}

export default Overview