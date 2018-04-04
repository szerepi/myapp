import axios from 'axios';
import constants from './../statics/constants';

let network = {

  /*
  *general GET data function
  *@url  
  *@successCallback
  */
  getData: (url, successCallback) => {
    axios.get(constants.baseURL + url)
        .then( (response) => {
            successCallback(response.data);
        })
        .catch( (error) => {
            console.log(error);
        });
  },

  /*
  *general POST data function
  *@url
  *@data 
  *@successCallback
  */
  updateData: (url, data, successCallback) => {
    axios.post(constants.baseURL + url, data)
        .then( (response) => {
            successCallback(response.data);
        })
        .catch( (error) => {
            console.log(error);
        });
  }
}

export default network;


