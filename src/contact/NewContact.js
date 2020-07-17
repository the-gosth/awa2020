import React from 'react';
import 'materialize-css';
import {Container, Section, TextInput, Row, Col, CardPanel} from 'react-materialize';

class NewContact extends React.Component{
    render(){
        return(
            <Container>
                <CardPanel>
                    <Section>
                        <TextInput id="TextInput-3" label="Nombres"/>
                        <TextInput id="TextInput-4" label="Apellidos"/>
                    </Section>
                </CardPanel>
            </Container>
        );
    }
}
export default NewContact