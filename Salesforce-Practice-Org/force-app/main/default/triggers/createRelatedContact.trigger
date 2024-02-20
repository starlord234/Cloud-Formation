trigger createRelatedContact on Account (After Insert) {
    if(Trigger.isAfter && Trigger.isInsert){
        list<contact> conList = new list<contact>();
        for(Account acc:Trigger.new){
            if(acc.Primary_Contact__c == True){
                contact con = new contact();
                con.LastName = acc.Name;
                con.AccountId= acc.Id;
                con.Phone    = acc.Phone;
                conlist.add(con);
            }
        }
        insert conlist;
    }
}