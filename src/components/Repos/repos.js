import React, { Component } from "react";
import ReactTable from 'react-table'
import "react-table/react-table.css";
import RepoFunctions from "../../services/repoFunctions";
 
class Repos extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            repos: [],            
            loading: false,  
            showtable: false          
        };            
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    *the input was changed
    *@e
    */ 
    onChange = (e) => {
        //update the state          
        this.setState({
            username: e.target.value
        });
    }

    /*
    *handle form submit event
    *@event
    */ 
    handleSubmit(event) {
        event.preventDefault();        
        this.setState({
            showtable: true,     
            loading: true
        });
        //call the repos REST API
        RepoFunctions(this.state.username, this.successCallback.bind(this));
    }

    /*
    *callback function for   
    *@res - returned data from API
    */ 
    successCallback(res){    
        this.setState({
            repos: res,     
            loading: false            
        });
    }

    render() {   
    return (
        <div>
            <h2>Repos</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username" className="label">Enter username: </label>
                <input id="username" name="username" type="text" value={this.state.username} onChange={this.onChange} required/>
                <button className="button">Get Public Repos!</button>
            </form>
            {this.state.showtable ?
            <div>
                <ReactTable
                    data={this.state.repos} // should default to []
                    columns={[
                        {
                            Header: "ID",
                            accessor: "id"
                        },
                        {
                            Header: "Name",
                            accessor: "name",
                        },
                        {
                            Header: "Full Name",
                            accessor: "full_name"  
                        },
                        {
                            Header: "Watchers",
                            accessor: "watchers"
                        },

                    ]}
                    pages={-1} // should default to -1 (which means we don't know how many pages we have)
                    loading={this.state.loading}
                    manual // informs React Table that you'll be handling sorting and pagination server-side
                    onFetchData={this.fetchData} // Request new data when things change                    
                    className="-striped -highlight"
                    //hide pagination
                    showPagination={false}
                    defaultPageSize={-1}
                />
            </div>
            : null}            
        </div>
        );
    }
}
 
export default Repos;