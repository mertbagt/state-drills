import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian'

describe(`Accordian Component`, () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  it('renders empty given no section', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordian sectionsProp={sections}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordian sectionsProp={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
  it('opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordian sectionsProp={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})