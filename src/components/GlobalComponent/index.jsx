import React from 'react';
import FoodCards from "@/components/FoodCards";
import img1 from '@/components/FoodCards/images/img1.png';
import img2 from '@/components/FoodCards/images/img2.png';
import img3 from '@/components/FoodCards/images/img3.png';


const GlobalProps = {
    title: img1,
    img2: img2,
    img3: img3
}

function GlobalComponent() {
    return (
        <div className="global">
            <FoodCards {...GlobalProps} />
        </div>
    );
}

export default GlobalComponent; 