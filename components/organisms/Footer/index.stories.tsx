import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './index'

export default {
  title: 'organisms/Footer',
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const FrontFooter = Template.bind({})
