import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@brainz-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    children: <Text>Texto no componente Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
