Feature: Login

  I want to logout on DaouKiwoom Test Assignment

  Background:
    Given I have already login user Jimmie Thompson with username Mona_Kassulke14
    And stay at Home page

  Scenario: Logout successfully
    Given I have users:
      | name             | username             | password            |
      | Jimmie Thompson  | Mona_Kassulke14      | EECsjlVnWIXfeuA     |
    When I click on 'Log out'
    Then I should return to 'Login Page'