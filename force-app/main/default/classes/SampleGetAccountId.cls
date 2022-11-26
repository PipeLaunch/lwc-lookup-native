/**
 * @description       : Get Account Id sample class
 * @author            : samuel@pipelaunch.com
 * @group             : Sample
 * @last modified on  : 11-26-2022
 * @last modified by  : samuel@pipelaunch.com
**/
public with sharing class SampleGetAccountId {
    /**
    * @description getting just a sample account id from the sample data
    * to be used in the sample app
    * @author samuel@pipelaunch.com | 11-26-2022 
    * @return Id 
    **/
    @AuraEnabled(cacheable=true)
    public static Id getSampleAccountId() {
        return [SELECT Id FROM Account LIMIT 1].Id;
    }
}
