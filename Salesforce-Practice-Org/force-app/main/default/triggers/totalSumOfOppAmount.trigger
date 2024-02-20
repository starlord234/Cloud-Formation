trigger totalSumOfOppAmount on Opportunity (After insert, After Update, After Delete, After Undelete) {
    Set<Id> accIds = new Set<Id>();
    if(Trigger.isAfter && (Trigger.isInsert || Trigger.isUndelete)){
        if(!Trigger.new.isEmpty())
        {
            for(opportunity opp: Trigger.new)
            {
                if(opp.AccountId!=null)
                {
                    accIds.add(opp.AccountId);
                }
            }
        }
    }
    if(Trigger.isAfter && Trigger.isDelete)
    {
        if(!Trigger.old.isEmpty())
        {
            for(Opportunity opp : Trigger.old)
            {
                if(opp.AccountId != null)
                {
                    accIds.add(opp.AccountId);
                }
            }
        }
    }
    if(Trigger.isAfter && Trigger.isUpdate)
    {
        if(!Trigger.new.isEmpty())
        {
            for(Opportunity opp : Trigger.new)
            {
                if(opp.AccountId != Trigger.oldMap.get(opp.Id).AccountId)
                {
                    accIds.add(opp.AccountId);
                    accIds.add(Trigger.oldMap.get(opp.id).AccountId);
                }
                else 
                {
                  accIds.add(opp.AccountId);  
                }
            }
        }
    }
    List<AggregateResult> aggrResult = [SELECT AccountId Ids,sum(Amount) totalAmt FROM Opportunity WHERE AccountId IN : accIds GROUP BY AccountId];
    map<id,Account> accMap = new Map<Id,Account>();
    if(!aggrResult.isEmpty())
    {
    for(AggregateResult result : aggrResult)
    {
        Account acc = new Account();
        acc.Id = (id)result.get('Ids');
        acc.Sum_of_Opportunity__c = (Decimal)result.get('totalAmt');
        accMap.put(acc.Id, acc);
    }
  }
  else {
    {
        for(id accid : accIds)
        {
            Account acc = new Account();
            acc.Id = accid;
            acc.Sum_of_Opportunity__c = 0;
            accMap.put(acc.id, acc);
        }
    }
  }
  if(!accMap.isEmpty())
  {
    update accMap.values();
  }
}