import React from 'react'
import "../../../style/Category.css";

interface CategoryProps {
    url: string;
    onClick: () => void;
}


function Category({ url, onClick }: CategoryProps) {
    console.log(url);
    return (
        <div>
            <div className="category-circle" onClick={onClick} style={{ margin: "1rem", borderRadius: "100%", height: "100px", width: "100px" }}>

            </div>
        </div >
    )
}

export default Category