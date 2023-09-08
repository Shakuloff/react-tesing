import React, { useState } from 'react'

const PrivetMir = () => {
    const [value, setValue] = useState("")
    const [visible, setVisible] = useState(false)

    const toggle = () => value === "привет" && setVisible(prev => !prev)
    const onChangeEvent = (e) => setValue(e.target.value)
    return (
        <div>
            <input onChange={onChangeEvent} id='search' type="text" />
            <button onClick={toggle} id='toggle'>ПРИВЕТ МИР</button>
            {visible && <h1 id='privet'>ПРИВЕТ МИР</h1>}
        </div>
    )
}

export default PrivetMir