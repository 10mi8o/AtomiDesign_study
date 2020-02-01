import React from 'react';
import { action } from '@storybook/addon-actions/dist/index';
import { Button } from '@storybook/react/demo';

export default {
    title: 'Button',
    component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Search Btn</Button>;

export const Emoji = () => (
    <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);
