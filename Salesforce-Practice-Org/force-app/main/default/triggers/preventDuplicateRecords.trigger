trigger preventDuplicateRecords on Account (before insert) {
  if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)){
    set<String> setOfNames = new set<String>();
    for(Account acc : Trigger.new){
        if(acc.Name != null){
            setOfNames.add(acc.Name);
        }
    }
    list<account> accList = [SELECT id,Name FROM Account WHERE Name IN : setOfNames];
    Map<String,Account> existingAccMap = new map<String,Account>();
     for(Account acc:accList){
        existingAccMap.put(acc.Name, acc);
     }
     for(Account acc: Trigger.new){
        if(existingAccMap.containsKey(acc.Name)){
            acc.addError('Account name already exists');
        }
     }
    }
  }
