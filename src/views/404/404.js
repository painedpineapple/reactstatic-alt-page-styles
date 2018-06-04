import * as React from 'react'
import styled from 'styled-components'
import View from 'containers/View/View'

const ViewWrapper = styled.section`
  padding: 60px;
`

function Four04() {
  return (
    <View>
      <ViewWrapper>
        <h1>404 - This is not the page you are looking for.</h1>
      </ViewWrapper>
    </View>
  )
}

export default Four04
