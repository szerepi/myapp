
import BaseNetworkFunction from './baseNetworkFunction';

export function getUsers (successCallback) {
    BaseNetworkFunction.getData('users', successCallback);
}; 

export default getUsers