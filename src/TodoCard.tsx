import {Card} from "semantic-ui-react";
import React from "react";
import TodoTable from "./TodoTable";

const TodoCard = () => {
    return (
        <div>
            <Card fluid color="teal" style={{padding: '1em 0em'}}>
                <Card.Content>
                <Card.Header>Todos</Card.Header>
                    <TodoTable/>
                </Card.Content>
            </Card>
        </div>
    )
}

export default TodoCard;


