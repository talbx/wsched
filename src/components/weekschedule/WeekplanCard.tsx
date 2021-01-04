import React, {useState} from "react";
import {Dish} from "../../models/Dish";
import {generateKey} from "../../util/WeekScheduleProvider";
import {DishesContainerCard} from "./DishesContainerCard";
import {PropertiesCard} from "./PropertiesCard";

const WeekplanCard = () => {

    const [dishes, setDishes] = useState<Dish[]>([]);
    const [isRestored, setRestore] = useState<boolean>(false);
    const [key, setKey] = useState<string>('');

    const regenerateKeys = (d1: Dish, d2: Dish) => {
        let updatedDishes = dishes.map(d => d === d1 ? d2 : d);
        setKey(generateKey(updatedDishes));
    }


    return (
        <div>
            <PropertiesCard setKeyCallback={[key, setKey]} setDishesCallback={setDishes}
                            setRestoreCallback={setRestore}/>
            {
                dishes.length !== 0
                &&
                <DishesContainerCard callback={(old, newDish) => regenerateKeys(old, newDish)} dishes={dishes}
                                     scheduleKey={key} restored={isRestored}/>
            }
        </div>
    )
};

export default WeekplanCard;
