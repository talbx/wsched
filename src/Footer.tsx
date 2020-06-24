import {Container, Divider, Grid, Header, Segment} from "semantic-ui-react";
import React from "react";
//@ts-ignore
export const Footer = props => {

    let col1 = <div>
        <Header as="h5">Nützliches</Header>
        <a href="/agb">Allgemeine Geschäftsbedingungen</a><br/>
        <a href="/datenschutz">Datenschutz</a><br/>
    </div>

    let col2 = <div>
        <Header as="h5">Stockhub Team</Header>
        <a href="/about">Über uns</a><br/>
        <a href="/kontakt">Kontakt</a><br/>
        <a href="/impressum">Impressum</a><br/>
    </div>

    let col3 = <div>
        <Header as="h5">Sonstiges</Header>
        <a href="/faq">FAQ</a><br/>
    </div>

    return (
        <Segment attached style={{ bottom: "0"}}>
            <br/>
            <Container>
                <Grid>
                    <Grid.Row>
                        hallo
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
};
