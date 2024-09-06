import React from 'react';
import "../../../style/Subcategory.css"
// Define the type for individual items in the list
interface SubcategoryItem {
    name: string;
    imgUrl: string;
    price: string;
    desc: string;
}

// Define the type for the props
interface SubcategoryProps {
    list: SubcategoryItem[]; // Array of SubcategoryItem
}

const Subcategory: React.FC<SubcategoryProps> = ({ list }) => {
    return (
        <div className='list'>
            <div className="subcategories" style={{ color: 'blue', fontSize: '18px' }}>
                <ul className='grid-list'>
                    {list.map((item, index) => (
                        <li><div key={index}>
                            <h1>{item.name}</h1> {/* Displaying item name, adjust as needed */}
                            <img src={item.imgUrl} alt="image of 1st sub category" />
                            <h3>{item.price}</h3>
                            <p>{item.desc}</p>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Subcategory;
