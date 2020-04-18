import {
  PLAID_LOGIN_SUCCESS,
  PLAID_LOGIN_FAILED,
  PLAID_GET_TRANSACTIONS_SUCCESS,
  PLAID_GET_TRANSACTIONS_FAILED,
  PLAID_GET_TRANSACTIONS_EACH_SUCCESS,
  PLAID_GET_TRANSACTIONS_EACH_FAILED,
  PLAID_GET_CATEGORY_SUCCESS,
  PLAID_GET_CATEGORY_FAILED,
  PLAID_GET_NET_WORTH_SUCCESS,
  PLAID_GET_NET_WORTH_FAILED,
  PLAID_GET_MONTHLY_EXPENSE_SUCCESS,
  PLAID_GET_MONTHLY_EXPENSE_FAILED,
  PLAID_GET_ALL_BILLS_SUCCESS,
  PLAID_GET_ALL_BILLS_FAILED,
  PLAID_UPDATE_DUE_DATE_SUCCESS,
  PLAID_UPDATE_DUE_DATE_FAILED,
} from '../../constants';

export const plaidLoginSuccessfully = token => ({
  type: PLAID_LOGIN_SUCCESS,
  payload: token,
});

export const plaidLoginFailed = error => ({
  type: PLAID_LOGIN_FAILED,
  payload: error,
});

export const plaidTransactionsSuccess = transactions => ({
  type: PLAID_GET_TRANSACTIONS_SUCCESS,
  payload: transactions,
});

export const plaidTransactionsFailed = error => ({
  type: PLAID_GET_TRANSACTIONS_FAILED,
  payload: error,
});

export const plaidTransactionsEachSuccess = transactions => ({
  type: PLAID_GET_TRANSACTIONS_EACH_SUCCESS,
  payload: transactions,
});

export const plaidTransactionsEachFailed = error => ({
  type: PLAID_GET_TRANSACTIONS_EACH_FAILED,
  payload: error,
});

export const plaidCategoriesSuccess = categories => ({
  type: PLAID_GET_CATEGORY_SUCCESS,
  payload: categories,
});

export const plaidCategoriesFailed = error => ({
  type: PLAID_GET_CATEGORY_FAILED,
  payload: error,
});

export const plaidNetWorthSuccess = networth => ({
  type: PLAID_GET_NET_WORTH_SUCCESS,
  payload: networth,
});

export const plaidNetWorthFailed = error => ({
  type: PLAID_GET_NET_WORTH_FAILED,
  payload: error,
});

export const plaidMonthlyExpensesSuccess = expenses => ({
  type: PLAID_GET_MONTHLY_EXPENSE_SUCCESS,
  payload: expenses,
});

export const plaidMonthlyExpensesFailed = error => ({
  type: PLAID_GET_MONTHLY_EXPENSE_FAILED,
  payload: error,
});

export const plaidBillsSuccess = bills => ({
  type: PLAID_GET_ALL_BILLS_SUCCESS,
  payload: bills,
});

export const plaidBillsFailed = error => ({
  type: PLAID_GET_ALL_BILLS_FAILED,
  payload: error,
});

export const plaidBillUpdateFailed = error => ({
  type: PLAID_UPDATE_DUE_DATE_SUCCESS,
  payload: error,
});

export const plaidBillUpdateSuccess = error => ({
  type: PLAID_UPDATE_DUE_DATE_FAILED,
  payload: error,
});
