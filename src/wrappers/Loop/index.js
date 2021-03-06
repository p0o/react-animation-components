import React, { PureComponent } from 'react';
import { bool, element, func, number } from 'prop-types';

export default class Loop extends PureComponent {
    static propTypes = {
        children: element.isRequired,
        in: bool,
        interval: number,
        iterations: number,
        onComplete: func,
        onIterate: func,
    };

    static defaultProps = {
        in: false,
        interval: 500,
        iterations: Infinity,
        onComplete: Function.prototype,
        onIterate: Function.prototype,
    };

    state = {
        in: this.props.in,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.in) {
            this.setState({ in: true });
        }
    }

    componentWillUnmount() {
        this._clearTimeouts();
    }

    count = 0;
    pendingOnComplete = null;
    pendingStateChange = null;

    _clearTimeouts() {
        clearTimeout(this.pendingStateChange);
        clearTimeout(this.pendingOnComplete);
    }

    _toggleIn = () => {
        this.setState(state => {
            return {
                in: !state.in,
            };
        });
    };

    _iterate = () => {
        this.count = this.count + 0.5;
        this.props.onIterate(this.count);

        if (this.count < this.props.iterations) {
            this.pendingStateChange = setTimeout(
                this._toggleIn,
                this.props.interval
            );
        } else {
            this.pendingOnComplete = setTimeout(
                this.props.onComplete,
                this.props.interval
            );
        }
    };

    render() {
        return React.cloneElement(this.props.children, {
            duration: this.props.interval,
            in: this.state.in,
            onEntered: this._iterate,
            onExiting: this._iterate,
        });
    }
}
