/**
 * @description       : SampleGetAccountId Test Class
 * @author            : samuel@pipelaunch.com
 * @group             : Test classes
 * @last modified on  : 11-26-2022
 * @last modified by  : samuel@pipelaunch.com
**/
@isTest
public with sharing class SampleGetAccountIdTest {
    @isTest
    static void getSampleAccountId() {
        Account act = new Account(
            Name = 'Test Account'
        );
        insert act;

        Test.startTest();
        Id accountId = SampleGetAccountId.getSampleAccountId();
        Test.stopTest();

        System.assertEquals(act.Id, accountId, 'Account Id should be equal');
    }
}
