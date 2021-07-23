import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Modal.scss";

export function Modal({
  title,
  beforeTitle,
  afterTitle,
  children,
  contentClassName,
  className,
  disableFullscreen,
  leave,
  verify,
  overrideStyles
}) {
  return (
    <div
      className={classNames(
        overrideStyles.modal ? overrideStyles.modal : styles.modal,
        { [styles.smFullscreen]: !disableFullscreen },
        { [styles.leave]: leave },
        { [styles.verify]: verify },
        className
      )}
    >
      {(title || beforeTitle || afterTitle) && (
        <div
          className={classNames(
            overrideStyles.modalHeader ? overrideStyles.modalHeader : styles.header,
            { [styles.leaveHeader]: leave },
            className
          )}
        >
          <div
            className={classNames(
              overrideStyles.beforeTitle || styles.beforeTitle,
              { [styles.beforeTitleLeave]: leave },
              className
            )}
          >
            {beforeTitle}
          </div>
          <h3>{title}</h3>
          {/* <div className={styles.afterTitle}>{afterTitle}</div> */}
        </div>
      )}
      <div className={classNames(styles.content, contentClassName)}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.node,
  beforeTitle: PropTypes.node,
  afterTitle: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableFullscreen: PropTypes.bool,
  leave: PropTypes.bool,
  verify: PropTypes.bool,
  overrideStyles: PropTypes.object
};

Modal.defaultProps = {
  overrideStyles: {}
};
