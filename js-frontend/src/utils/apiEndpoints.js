/**
 * Created by andrew on 9/16/16.
 */
const API_ROOT = '/api';

export const emailSignInPath = () => API_ROOT + '/login';
export const emailSignUpUrl = () => API_ROOT + '/customers';
export const customersPath = () => API_ROOT + '/customers';
export const currentUserPath = () => API_ROOT + '/user';
export const accountsPath = () => API_ROOT + '/accounts';
export const customersLookup = (lookup) => `${API_ROOT}/customers?${ makeQuery(lookup) }`;
export const customersAccounts = (customerId) => `${API_ROOT}/customers/${customerId}/accounts`;
export const customersAccount = (customerId, accountId) => `${API_ROOT}/customers/${customerId}/accounts/${accountId}`;
export const toAccounts = (customerId) => `${API_ROOT}/customers/${customerId}/toaccounts`;
export const account = (accountId) => `${API_ROOT}/accounts/${accountId}`;
export const history = (accountId) => `${API_ROOT}/accounts/${accountId}/history`;
export const transfersUrl = () => API_ROOT + '/transfers';

function makeQuery(params) {
  return Object.keys(params).map(key => [encodeURIComponent(key), encodeURIComponent(params[key])].join('=')).join('&');
}
