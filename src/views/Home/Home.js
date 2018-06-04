import * as React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import View from 'containers/View/View'
import faker from 'faker'
import _ from 'lodash'

const HomeStyled = styled.div`
  .hero {
    min-height: 90vh;
    color: white;
    text-align: center;
    background-image: linear-gradient(
        rgba(${props => props.theme.color.seaWeedRGB}, 0.5),
        rgba(${props => props.theme.color.seaWeedRGB}, 0.5)
      ),
      url(${props => props.heroImage});
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;

    > div {
      padding: ${props => props.theme.spacer.body}rem;
      width: 100%;
    }

    h1,
    h3 {
      max-width: 1128px;
      margin: 0 auto;
    }

    h1 {
      font-weight: 700;
    }
    em {
      text-decoration: underline;
    }

    h3 {
      font-family: ${props => props.theme.fontFamily.monospace};
      font-size: 33px;
    }
  }

  h2 {
    font-size: 33px;
  }

  section:not(.work) {
    padding: 72px ${props => props.theme.spacer.body}rem;
  }

  .work {
    padding: 72px 0;
  }

  ${props => props.theme.media.lg`
      h1 { font-size: 75px; }
      h2,
      .hero h3 { font-size: 50px; }

      .work {
        padding-left: ${props => props.theme.spacer.body}rem;
        padding-right: ${props => props.theme.spacer.body}rem;
      }
  `};
`

const recentPortfolioPieces = _.times(3, () => ({
  id: faker.random.uuid(),
  title: faker.lorem.word(),
  categories: _.times(faker.random.number(5), () => ({
    term_id: faker.random.uuid(),
    name: faker.lorem.word(),
  })),
  slug: faker.internet.url(),
  thumbnail: {
    url: faker.image.imageUrl(),
    alt: faker.lorem.word(),
  },
}))

const Home = ({ ...props }) => (
  <View>
    <HomeStyled heroImage={faker.image.imageUrl()}>
      <div className="hero">
        <div>
          <h3>{faker.random.words()}</h3>
          <h1>{faker.random.words()}</h1>
        </div>
      </div>
      {_.times(40, () => (
        <p key={faker.random.uuid()}>{faker.lorem.paragraph()}</p>
      ))}
    </HomeStyled>
  </View>
)

export default withRouteData(Home)
