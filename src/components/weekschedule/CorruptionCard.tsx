import {Card} from "semantic-ui-react";
import React from "react";

export const CorruptionCard = () => {

    return (
        <div style={{marginBottom: "2%"}}>
            <Card>
                <Card.Content header="Dish could not be recreated"/>
            </Card>
        </div>
    );
}
