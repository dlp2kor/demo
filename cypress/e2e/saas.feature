Feature: To test features of services sub-category: SaaS 

Scenario: To check overview tab of SaaS products
	Given user is on SaaS listing page
	And SaaS box is checked
    When User clicks on View Details
    Then User should be able to see overview page of product 

Scenario: To check pricing tab of SaaS products
	Given user is on overview page of the product 
	When user clicks on pricing tab
	Then User should be able to view product pricing details