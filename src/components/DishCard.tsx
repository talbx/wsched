import React from "react";
import {Card, Label} from "semantic-ui-react";
import {Dish} from "../models/Dish";
import {FoodType} from "../models/FoodType";
import {regenerateDish} from "../util/tools";
import {Moment} from "moment";

type Props = { dish: Dish, weekDay: Moment }; /* could also use interface */

export const DishCard = ({dish, weekDay}: Props) => {

    const [content, setContent] = React.useState<Dish>(dish)

    const regenerate = () => {
        let newDish = regenerateDish(content);
        setContent(newDish);
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
                    <i onClick={() => regenerate()} aria-hidden="true" className="refresh icon"/>
                </Card.Content>
            </Card>
        </div>
    )
}
