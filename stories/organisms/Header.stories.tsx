import { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../src';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'Organisms/Header',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Welcome to My Website',
        subtitle: 'This is a subtitle',
    },
};