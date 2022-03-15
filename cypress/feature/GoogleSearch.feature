Feature: Google Search

    @focus
    Scenario Outline: Search for remarkablemark on Google.
        Given I go to <url> url
        When I search for <keyword> keyword
        Then I see <result> keyword

    Examples:
        | url                     | keyword         | result                |
        | www.google.com  | remarkablemark  | remarkablemark: Home  |
   
    @focus
    Scenario Outline: Example
        Given I go to <url> url
        Then I see <keyword> keyword on page

    Examples:
        | url                     | keyword                     | 
        | https://example.com     | Example Domain                     | 
