import * as React from 'react'
import _ from 'lodash'
import faker from 'faker'
import View from 'containers/View/View'

const About = ({ ...props }) => (
  <View>
    {_.times(60, () => (
      <p key={faker.random.uuid()}>{faker.lorem.paragraph()}</p>
    ))}
  </View>
)

export default About
