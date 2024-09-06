import React, { useRef, useState } from 'react';
import "../../../style/Box.css";
import Category from './Category';
import Button_Left from '../Buttons/Button_Left';
import Button_Right from '../Buttons/Button_Right';

interface BoxProps {
    onCategorySelect: (index: number) => void;
}

function Box({ onCategorySelect }: BoxProps) {
    const url = ["../../../Resources/Electronics.png", "../../../Resources/3d-printer.png", "../../../Resources/kitchen.png", "../../../Resources/clothes.png"];
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const onClickHandler = (index: number) => {
        setSelectedCategory(index);
        onCategorySelect(index); // Notify parent of category selection
    };

    //Creating a UseRef hook to provide scrolling functionality
    const scrollContainer = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" })
        }
    };
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" })
        }
    };

    return (
        <div className='Box'>
            <div className="row">
                <div className="col-md-3 category-container" style={{ display: "flex", justifyContent: "space-between", padding: "1rem", alignItems: "center" }}>
                    <div className="button_left">
                        <Button_Left scrollLeft={scrollLeft}/>
                    </div>
                    <div className="category" style={{ display: "flex", justifyContent: "space-between" }} ref={scrollContainer}>
                        {url.map((text, index) => (
                            <Category url={text} key={index} onClick={() => onClickHandler(index)} />
                        ))}
                    </div>
                    <div className="button_right">
                        <Button_Right scrollRight={scrollRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
