Feature: Being a plugin handling Scenario Outline

  As a cucumber cypress plugin which handles Scenario Outline
  I want to allow people to write Scenario Outline tests and run it in cypress

  @focus
  Scenario Outline: Using Scenario Outlines
    When I add <provided number> number and <another provided number> number
    Then I verify that the result is equal the <provided> result

    Examples:
      | provided number | another provided number | provided |
      | 1               | 2                       | 3        |
      | 100             | 200                     | 300      |

  @focus
  Scenario Outline: Use juicer with <fruit>
    Given I put fruit <fruit> in a juicer
    When I switch it on
    Then I should get <juice> juice

    Examples:
      | fruit      | juice            |
      | apple      | apple juice      |
      | pineapple  | pineapple juice  |
      | strawberry | strawberry juice |

  @focus
  Scenario Outline: A calculation
    When I enter <first> number and <second> number
    Then I see following <result> result table

    Examples:
      | first | second | result |
      | 1     | 2      | 3      |
      | 3     | 4      | 7      |
      | 5     | 6      | 11     |

  @focus
  Scenario Outline: Multiple variables <here> and <here>
    When I enter variable <here> item and <here> item
    Then I verify that both variables have <here> item as value

    Examples:
      | here |
      | abc  |