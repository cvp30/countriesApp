import { gql } from "@apollo/client"

export const GET_ALL_COUNTRIES = gql`
  query allCountries {
    countries {
      code
      name
      continent {
        code
        name
      }
    }
  }
`

export const GET_COUNTRY_DETAIL = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      name
      capital
      languages {
        name
      }
      currencies
      states {
        name
      }
      continent {
        name
      }
    }
}
`