import { Meta, StoryObj } from '@storybook/react';
import { BasicTemplate } from '../../src';

const meta: Meta<typeof BasicTemplate> = {
    component: BasicTemplate,
    title: 'Templates/BasicTemplate',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: 'This is the main content area.',
    },
};