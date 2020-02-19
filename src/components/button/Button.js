import React, { Component } from 'react';
import classNames from 'classnames';
import { Button as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends Component {

  render() {
    const {
      children,
      className,
      color,
      disabled,
      disableFocusRipple,
      focusVisibleClassName,
      fullWidth,
      size,
      variant,
      href,
      theme,
      ...restProps
    } = this.props;

    const themeObj = {};

    switch(theme) {
      case 'stop':
        themeObj.class = 'red';
        themeObj.variant = 'underlined';
        themeObj.size = 'large';
        break;
      case 'go':
        themeObj.class = 'green';
        themeObj.variant = 'raised';
        themeObj.size = 'medium';
        break;
      case 'yield':
        themeObj.class = 'yellow';
        themeObj.variant = 'flat';
        themeObj.size = 'small';
        break;
      default:
        themeObj.class = 'default';
    }

    const classes = classNames('ui-button', className, {[themeObj.class]: [theme] });
 
    return (
      <Base
        className={classes}
        disabled={disabled}
        color={color}
        disableFocusRipple={disableFocusRipple}
        focusVisibleClassName={focusVisibleClassName}
        fullWidth={fullWidth}
        href={href}
        size={themeObj.size || size}
        variant={themeObj.variant || variant}
        {...restProps}
      >
        {children}
      </Base>
    );
  }
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  size: 'medium',
  type: 'button',
  variant: 'text',
};

export default Button;
