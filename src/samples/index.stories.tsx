import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Component, Props } from '.';

export default {
  title: 'samples',
  component: Component,
} as Meta<Props>;

const Template: Story<Props> = ({ ...args }) => <Component {...args} />;

export const Default = Template.bind({});
