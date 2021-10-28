Feature: Login to Application

  As a invalid user
  I cannot log into Application
  As a valid user
  I want to log in into Application

  Scenario: Invalid login
    Given I open login page
    When I fill username with "Invalid username"
    And I fill password with "Invalid password"
    And I click on submit button
    Then I should see error message

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    And I fill password with "password"
    And I click on submit button
    Then I should see homepage