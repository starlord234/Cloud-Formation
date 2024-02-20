public with sharing class accountList {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccountList() {
        list<account> acclist = [SELECT id, Name,Industry FROM Account];
        return acclist;

    }
}