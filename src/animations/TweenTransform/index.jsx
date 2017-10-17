import React from 'react';
import { node, object, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

const TweenTransform = ({ children, enter, exit, ...props }) => {
    const pos = {
        entering: exit,
        entered: enter,
        exiting: enter,
        exited: exit,
    };

    return (
        <Transition timeout={getTimeoutValue(props)} {...props}>
            {status => (
                <div
                    style={{
                        ...getInlineStyles(props),
                        transform: pos[status],
                        transitionProperty: 'transform',
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

TweenTransform.propTypes = {
    appear: bool,
    children: node.isRequired,
    delay: number,
    duration: number,
    exit: string,
    enter: string,
    style: object,
    timingFn: string,
};

TweenTransform.defaultProps = {
    ...defaultAnimationProps,
    enter: 'none',
    exit: 'none',
};

export default TweenTransform;
