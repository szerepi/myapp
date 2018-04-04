import React, { Component } from "react";
import axios from "axios";
import ReactTable from 'react-table'
import "react-table/react-table.css";

class User extends Component {
    render() {        
        return (        
            <div className="middle">
                <h2 >User details</h2>
                <div className="header" style={{ margin: "1em" }}>
                    <img alt="avatar" style={{ width: "70px" }} src={this.props.data.original.avatar_url} />
                    <div>
                        <div style={{ fontWeight: "bold" }}>
                            {this.props.data.original.name}
                        </div>
                        <div>
                            {this.props.data.original.login}
                        </div>
                    </div>
                </div>     
            </div>
        );
    }
}
 
export default User;