import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Atoms/Input',
};

export default meta;

type Story = StoryObj<typeof meta>;

const InputWrapper: React.FC<React.ComponentProps<typeof Input>> = (args) => {
    const [value, setValue] = useState(args.value || '');

    return (
        <Input
            {...args}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Base: Story = {
    render: (args) => <InputWrapper {...args} />,
    args: {
        value: '',
        placeholder: 'Enter text',
    },
};
