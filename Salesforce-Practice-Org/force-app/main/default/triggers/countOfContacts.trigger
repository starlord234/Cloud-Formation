trigger countOfContacts on contact (After insert, After update, After Delete, After Undelete) {
    if(Trigger.IsAfter && (Trigger.isInsert || Trigger.isUndelete)){
        set<id> accIds = new set<id>();
        if(!Trigger.new.isEmpty()){
            for(contact con:Trigger.new){
                if(con.AccountId != null){
                    accIds.add(con.AccountId);
                }
            }
            list<account> accList = [SELECT Id,Number_of_Contacts__c,(SELECT Id From contacts) FROM Account WHERE Id IN :accids];
            list<account> acctList = new list<account>();
            for(account acc : accList){
                acc.Number_of_Contacts__c = acc.contacts.size();
                acctList.add(acc);
            }
            update acctList;
        }
    }
    if(Trigger.isAfter && Trigger.isDelete){
        set<id> accIds = new set<id>();
        for(contact con:Trigger.old){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
        list<account> accList = [SELECT Id,Number_of_Contacts__c,(SELECT Id From contacts) FROM Account WHERE Id IN :accids];
            list<account> acctList = new list<account>();
            for(account acc: accList){
                acc.Number_of_Contacts__c = acc.contacts.size();
                acctList.add(acc);
            }
            update acctList;
    }
    if(Trigger.isAfter && Trigger.isUpdate){
        set<id> accIds = new set<id>();
        if(!Trigger.new.isEmpty()){
            for(contact con:Trigger.new){
                if(con.AccountId != trigger.oldmap.get(con.Id).accountid){
                    if(Trigger.oldmap.get(con.Id).accountid != null){
                        accIds.add(Trigger.oldmap.get(con.Id).accountid);
                    }
                    if(con.AccountId != null){
                        accIds.add(con.AccountId);
                    }
                }
            }
            List<Account> accList = [SELECT Id,Number_of_Contacts__c,(SELECT Id From contacts) FROM Account WHERE Id IN :accids];
            list<account> aList = new List<Account>();
            for(account acc : accList){
                acc.Number_of_Contacts__c = acc.contacts.size();
                aList.add(acc);
            }
            update aList;
        }
    }
   
        
     
}