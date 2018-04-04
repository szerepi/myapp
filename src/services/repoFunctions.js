import BaseNetworkFunction from './baseNetworkFunction';

export function getRepos (username, successCallback) {
    BaseNetworkFunction.getData('users/' + username + '/repos', successCallback);
}; 

export default getRepos
