import { Meta, StoryObj } from '@storybook/react';
import {Card} from '../../src';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'Molecules/Card',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        title: 'Card Title',
        content: 'This is some content inside the card.',
    },
};
