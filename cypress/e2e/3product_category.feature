Feature: Product categories- PMT Sharing platform

    Testing if product categories are visible

    Background: Visit mobility marketplace
    Given User visits mobility marketplace
    
    Scenario: Category 1 - Services
    When User mouseover on Services
    Then Services menu is displayed
    And all the sub-categories under Services should be visible

    Scenario: Category 2 - Workflows
    When User mouseover on Workflows
    Then Workflows menu is displayed
    And all the sub-categories under Workflows should be visible

    Scenario: Category 3 - Frameworks
    When User mouseover on Frameworks
    Then frameworks menu is displayed
    And all the sub-categories under Frameworks should be visible
 