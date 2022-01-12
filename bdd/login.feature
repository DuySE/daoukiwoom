Feature: Login

  I want to login on DaouKiwoom Test Assignment

  Background:
    Given I go to '/login'
    And the field 'username' is empty
    And the field 'password' is empty

  Scenario: Error on empty fields
    When I click on 'Log In'
    Then I should see 'Please input username or password!'

  Scenario: Wrong password
    When I type 'steve' in 'username'
    And I type '123456' in 'password'
    And I click on 'Log In'
    Then I should see 'Incorrect username or password!'

  Scenario: Login successfully
    Given I have users:
      | name             | username             | password            |
      | Jimmie Thompson  | Mona_Kassulke14      | EECsjlVnWIXfeuA     |
    When I type 'Mona_Kassulke14' in 'username'
    And I type 'EECsjlVnWIXfeuA' in 'password'
    And I click on 'Log In'
    Then I should go to 'Home Page'