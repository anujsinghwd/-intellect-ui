import { Meta, StoryObj } from '@storybook/react';
import { HomePage } from '../../src';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/HomePage',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
