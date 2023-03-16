import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../Icon'

describe('icon', () => {
    it('是个 svg', () => {
        const json = renderer.create(<Icon name="add" />).toJSON()
        expect(json).toMatchSnapshot()
    })
})