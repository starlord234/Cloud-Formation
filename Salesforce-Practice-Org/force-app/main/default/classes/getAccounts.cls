public with sharing class getAccounts {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccountsList(String strAccountName) {
      String strKey = '%'+strAccountName+'%';
      list<account> accList = [Select id,Name,Industry from account WHERE NAME LIKE:strKey];
      return accList;
    }
}