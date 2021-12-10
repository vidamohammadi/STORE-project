import React from 'react'
import Button from '../../UI/Button/Button'
import './Builder.css'

const Builder = (props) => {
    return (
        <div className="builder">
            <div>{props.title}</div>
            <Button btnType="control-btn" click={props.add}>Add</Button>
            <Button btnType="control-btn" click={props.remove}>Remove</Button>
        </div>
    )
}

export default Builder