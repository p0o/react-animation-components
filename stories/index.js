import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import {
    FadeInOut,
    FadeTransform,
    TweenTransform,
    Stagger,
    Random,
} from '../src/index';

storiesOf('Animations/FadeInOut', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeInOut
            in={boolean('in', true)}
            delay={text('delay', '0')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease')}
            timeout={number('timeout', 500)}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
        >
            <h1>Example</h1>
        </FadeInOut>
    ));

storiesOf('Animations/TweenTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <TweenTransform
            in={boolean('in', true)}
            delay={text('delay', '0')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease')}
            start={text('start', 'translateY(50vh)')}
            finish={text('finish', 'none')}
        >
            <h1>Example</h1>
        </TweenTransform>
    ));

storiesOf('Animations/FadeTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeTransform
            in={boolean('in', true)}
            delay={text('delay', '0')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease')}
            start={text('start', 'translateY(50vh)')}
            finish={text('finish', 'none')}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
        >
            <h1>Example</h1>
        </FadeTransform>
    ));

storiesOf('Groups/Stagger', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Stagger>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Stagger>
    ))
    .add('chunks of 2', () => (
        <Stagger chunk={2}>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Stagger>
    ));

storiesOf('Groups/Random', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Random>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Random>
    ));
