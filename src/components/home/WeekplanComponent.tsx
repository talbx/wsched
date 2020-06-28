import {Container, Grid} from "semantic-ui-react";
import WeekplanCard from "./WeekplanCard";
import React from "react";

export const WeekplanComponent = ()  => {

    return (
        <Grid container style={{padding: '3em 0em'}}>
            <Container>
                <WeekplanCard/>
            </Container>
        </Grid>
    );
}
