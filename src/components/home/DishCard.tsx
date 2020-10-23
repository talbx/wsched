import React from "react";
import {Card, Label} from "semantic-ui-react";
import {Dish, ExceptionDish} from "../../models/Dish";
import {FoodType} from "../../models/FoodType";
import {Moment} from "moment";

type Props = { dish: Dish, weekDay: Moment, recreateWeekKeyCallback: (old: Dish, newDish: Dish) => void, recreateCommand: (dish: Dish) => Dish };

export const DishCard = ({dish, weekDay, recreateWeekKeyCallback, recreateCommand}: Props) => {

    const [content, setContent] = React.useState<Dish>(dish);

    const regenerate = (dish: Dish) => {
        const newDish = recreateCommand(content);
        setContent(newDish);
        recreateWeekKeyCallback(dish, newDish);
    };

    return (
        <div style={{marginBottom: "2%"}}>
            <Card>
                <Card.Content header={weekDay.format('dddd') + ' ' + weekDay.format('LL')}/>
                <Card.Content content={content.name}/>
                <Card.Content extra>
                    {
                        content.veggie &&
                        <Label basic className="mini" color="green">Veggie</Label>
                    }
                    {
                        content.type === FoodType.ORDER &&
                        <Label basic className="mini" color="black">Bestellung</Label> &&
                        <Label basic className="mini" color="blue">{content.type}</Label>
                    }
                    {
                        content instanceof ExceptionDish &&
                        <Label basic className="mini" color="red">Exception Dish</Label> &&
                        <Label basic className="mini" color="blue">{content.sex}</Label>
                    }
                    <i onClick={() => regenerate(dish)} aria-hidden="true" className="refresh icon"/>
                </Card.Content>
            </Card>
        </div>
    )
}
