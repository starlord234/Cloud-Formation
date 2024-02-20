trigger opportunityTrigger on Opportunity (after insert, after delete, after undelete) {
    if(Trigger.isAfter && Trigger.isInsert || Trigger.isDelete || Trigger.isUndelete){
        opportunityTrigger.opportunityAmountUpdate(Trigger.new);
    }

}