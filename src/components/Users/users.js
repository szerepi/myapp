import React, { Component } from "react";
import axios from "axios";
import ReactTable from 'react-table'
import "react-table/react-table.css";
import User from "./user";
import UserFunctions from "../../services/userFunctions";

class Users extends Component {
    
  constructor() {
    super();
    this.state = {
      users: [],     
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  /*
  *get data for the table from the API
  */ 
  fetchData() {    
    this.setState({ loading: true });  
    //call the rest Api
    UserFunctions(this.successCallback.bind(this));
  }

  /*
  *sucsecc callback function 
  @res - the returned users
  */
  successCallback(res){    
    this.setState({
      users: res,     
      loading: false
    });
  }

 
  render() {   
    return (    
    <div>
        <h2>Users</h2>
        <ReactTable
            data={this.state.users} // should default to []
            columns={[
                {
                    Header: "ID",
                    accessor: "id"
                },              
                {
                    Header: "Login",
                    accessor: "login"  
                },
                {
                    Header: "Type",
                    accessor: "type"
                },

            ]}
            pages={-1} // should default to -1 (which means we don't know how many pages we have)
            loading={this.state.loading}
            manual // informs React Table that you'll be handling sorting and pagination server-side
            onFetchData={this.fetchData} // Request new data when things change
            defaultPageSize={-1}
            showPagination={false}
            className="-striped -highlight"
            SubComponent={ row => {
                return (
                  <div>
                    <User                      
                      data={row}
                      />
                  </div>
                );
            }}
        />
    </div>
    );
  }
}
 
export default Users;