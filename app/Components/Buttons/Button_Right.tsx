import React from 'react'
import { FaAngleRight } from "react-icons/fa";

interface scrollRightItem {
    scrollRight: () => void;
}

function Button_Right({ scrollRight }: scrollRightItem) {
    return (
        <button>
            <FaAngleRight />
        </button>
    )
}

export default Button_Right