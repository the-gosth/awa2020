import React from 'react';
import 'materialize-css';
import { CollectionItem, Icon } from 'react-materialize';

class Element extends React.Component {
    render(){
        return(
            <CollectionItem  className="avatar">
                <Icon className="circle" >
                    account_circle
                </Icon>
                <span className="title"> {this.props.nombre} </span>
                <p>
                    <br />
                    Second Line
                </p>
                <a className="secondary-content" href="javascript:void(0)">
                    <Icon>
                        phone
                    </Icon>
                </a>
            </CollectionItem>
        );
    }
    
}
export default Element