import React from 'react'
import { shallow } from 'enzyme'

import Example from '../index'

describe('Example', () => {
  it('should render', () => {
    expect(shallow(<Example />)).toMatchSnapshot()
  })
})
