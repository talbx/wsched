import React from "react";
import {Container, Segment, Step} from "semantic-ui-react";

export const RoadmapComponent = () => {

    const steps = [
        {
            key: 'food',
            icon: 'food',
            title: 'v1',
            description: 'basic week schedule generation',
        },
        {
            key: 'billing',
            active: true,
            icon: 'payment',
            title: 'Billing',
            description: 'Enter billing information',
        },
        {key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order'},
    ]

    return (
        <div style={{display: "flex"}}>
            <Container>
                {
                    (false &&
                        <Segment>
                            <Step.Group items={steps}/>
                        </Segment>) ||
                    (<h1>coming soon</h1>)
                }
            </Container>
        </div>
    );
}
