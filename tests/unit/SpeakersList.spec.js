import { shallowMount } from '@vue/test-utils'
import SpeakersList from '@/components/SpeakersList'
import Speaker from '@/components/Speaker'

describe('SpeakersList', () => {
  let props
  let speaker = {
    name: 'My Name'
  }
  beforeEach(() => {
    // Creating the props to pass when mounting
    props = {
      speakers: [speaker, speaker]
    }
  })

  const build = () => {
    const wrapper = shallowMount(SpeakersList, {
      // Add props while mounting
      propsData: props
    })

    return {
      wrapper,
      Speakers: () => wrapper.findAll(Speaker)
    }
  }

  it('it renders the component', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('it renders the right', () => {
    // arrange
    const { wrapper, Speakers } = build()
    // assert
    expect(Speakers().length.toBe(2))
    wrapper.setProps({
      speakers = [speaker]
    })
    expect(Speakers().length.toBe(1))
  })
})
