import React from 'react';
import Transform from './index.jsx';
import renderer from 'react-test-renderer';

describe('Transform', () => {
    test('renders', () => {
        const component = renderer.create(<Transform />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <Transform style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<Transform delay={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<Transform duration={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(<Transform timingFn="ease-in-out" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets start', () => {
        const component = renderer.create(
            <Transform start="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets finish', () => {
        const component = renderer.create(
            <Transform finish="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});