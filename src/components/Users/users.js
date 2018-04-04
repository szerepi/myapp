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
  *  
  */ 
  fetchData() {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true });  
    UserFunctions(this.successCallback.bind(this));
  }

  /*
  *  
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