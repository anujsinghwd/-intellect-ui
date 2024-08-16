import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Atoms/Button'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: "Click Me",
        onClick: () => alert('Button Clicked!')
    }
};
