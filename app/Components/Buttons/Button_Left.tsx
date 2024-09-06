import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

interface scrollLeftItem {
    scrollLeft: () => void;
}

function Button_Left({ scrollLeft }:scrollLeftItem) {
    return (
        <button onClick={scrollLeft}>
            <FaAngleLeft />
        </button>
    )
}

export default Button_Left