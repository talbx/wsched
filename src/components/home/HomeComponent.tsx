import {Container, Grid} from "semantic-ui-react";
import MenuCard from "./MenuCard";
import React from "react";

export const HomeComponent = ()  => {

    return (
        <Grid container style={{padding: '3em 0em'}}>
            <Container>
                <MenuCard/>
            </Container>
        </Grid>
    );
}
