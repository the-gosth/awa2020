import React from 'react';
import Element from '../element/Element'
import 'materialize-css';
import { Row, Col, Collection} from 'react-materialize';

function List(){
    let list = [];
    for(let i=1; i<=10; i++){
        list.push(<Element nombre={'Sergio'} apellido={'Cardenas'}></Element>)
    }
    return(
        <Row>
            <Col m={6} s={12}>
                <Collection>
                    {list}
                </Collection>
            </Col>
        </Row>
    );
}
export default List;