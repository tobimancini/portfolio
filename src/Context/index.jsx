import React, { createContext, useEffect, useState } from 'react'


export const Tools = createContext();

const ToolsProvider = ({ children, time, setTime }) => {

    return (
        <Tools.Provider value={{ time, setTime }}>
            {children}
        </Tools.Provider>
    )
}

export default ToolsProvider