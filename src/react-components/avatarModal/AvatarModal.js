import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AvatarModal.scss";
import stylemodal from "../modal/Modal.scss";
import ArrowIcon from "../../assets/social-buttons/images/arrow-icon.png";
import CloseIcon from "../../assets/social-buttons/images/close-icon.png";

export function AvatarModal({
  title,
  beforeTitle,
  afterTitle,
  children,
  contentClassName,
  className,
  disableFullscreen,
  leave,
  verify
}) {
  return (
    <main
      className={classNames("d-flex", "flex-wrap", "align-items-center", "justify-content-center", styles.signInUpWrap)}
    >
      <div className="container">
        <div
          className={classNames(styles.avatarcont, styles.signinUpBox, "d-flex", "flex-wrap", "justify-content-center")}
        >
          <div className={classNames("signinUp-wrap")}>
            {(title || beforeTitle || afterTitle) && (
              <div className={classNames(styles.header, { [stylemodal.leaveHeader]: leave }, className)}>
                <div className={classNames(styles.beforeTitle, { [styles.beforeTitleLeave]: leave }, className)}>
                  {beforeTitle}
                </div>
                <h3>{title}</h3>
                {/* <div className={styles.afterTitle}>{afterTitle}</div> */}
              </div>
            )}
            {children}
            {/* <div
              className={classNames(
                styles.modal,
                { [styles.smFullscreen]: !disableFullscreen },
                { [styles.leave]: leave },
                { [styles.verify]: verify },
                className
              )}
            > */}

            {/* <div className={classNames(styles.content, contentClassName)}>{children}</div>
            </div>  */}
          </div>
        </div>
      </div>
    </main>
  );
}

AvatarModal.propTypes = {
  title: PropTypes.node,
  beforeTitle: PropTypes.node,
  afterTitle: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableFullscreen: PropTypes.bool,
  leave: PropTypes.bool,
  verify: PropTypes.bool
};
