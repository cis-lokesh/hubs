import React from "react";
import styles from "./BackClose.scss";
import arrowIcon from "../../assets/images/backIcon.png";
import closeIcon from "../../assets/images/close-icon.png";
import classNames from "classnames";

export const GoBack = ({ onClick, ...rest }) => {
  return (
    <>
      <span className={classNames(styles.btnNext, styles.circleBtnNext)} onClick={onClick} {...rest}>
        <img src={arrowIcon} />
      </span>
    </>
  );
};
export const Close = ({ className, onClick, ...rest }) => {
  return (
    <>
      <span className={classNames(styles.btnClose, styles.circleBtn, className)} onClick={onClick} {...rest}>
        <img src={closeIcon} />
      </span>
    </>
  );
};
