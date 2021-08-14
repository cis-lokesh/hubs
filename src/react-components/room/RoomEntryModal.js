import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal } from "../modal/Modal";
import { Button } from "../input/Button";
import { ReactComponent as EnterIcon } from "../icons/Enter.svg";
import { ReactComponent as VRIcon } from "../icons/VR.svg";
import { ReactComponent as BroadcastIcon } from "../icons/Broadcast.svg";
import { ReactComponent as SettingsIcon } from "../icons/Settings.svg";
import styles from "./RoomEntryModal.scss";
import styleUtils from "../styles/style-utils.scss";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";

export function RoomEntryModal({
  appName,
  logoSrc,
  className,
  // roomName,
  showJoinRoom,
  onJoinRoom,
  showEnterOnDevice,
  onEnterOnDevice,
  showSpectate,
  onSpectate,
  showOptions,
  onOptions,
  ...rest
}) {
  const breakpoint = useCssBreakpoints();
  return (
    <Modal className={classNames(styles.roomEntryModal, className)} disableFullscreen {...rest}>
      <Column center className={styles.content}>
        {/* {breakpoint !== "sm" &&
          breakpoint !== "md" && ( */}
        <div className={styles.logoContainer}>
          <img src={logoSrc} alt={appName} />
        </div>
        {/* )} */}
        {!showJoinRoom &&
          !showEnterOnDevice &&
          !showSpectate && (
            <div className={styles.roomName}>
              {/* <h5>
              <FormattedMessage id="room-entry-modal.room-name-label" defaultMessage="Room Name" />
            </h5> */}
              <p>{"We are currently full.. pls come back later"}</p>
            </div>
          )}
        <Column center className={styles.buttons}>
          {showJoinRoom && (
            <Button preset="accent" style={{ display: "flex" }} onClick={onJoinRoom}>
              <EnterIcon />
              <span>
                <FormattedMessage id="room-entry-modal.join-room-button" defaultMessage="Join" />
              </span>
            </Button>
          )}
          {showEnterOnDevice && (
            <Button preset="accent" style={{ display: "flex" }} onClick={onEnterOnDevice}>
              <VRIcon />
              <span>
                <FormattedMessage id="room-entry-modal.enter-on-device-button" defaultMessage="Enter in VR" />
              </span>
            </Button>
          )}
          {showSpectate && (
            <Button preset="accent" style={{ display: "flex" }} onClick={onSpectate}>
              <BroadcastIcon />
              <span>
                <FormattedMessage id="room-entry-modal.spectate-button" defaultMessage="Spectate" />
              </span>
            </Button>
          )}
          {showOptions && (
            <>
              {/* <hr className={styleUtils.showLg} /> */}
              <Button preset="basic-accent" style={{ display: "flex" }} onClick={onOptions}>
                {/* className={styleUtils.showLg} */}
                <SettingsIcon />
                <span>
                  <FormattedMessage id="room-entry-modal.options-button" defaultMessage="Options" />
                </span>
              </Button>
            </>
          )}
        </Column>
      </Column>
    </Modal>
  );
}

RoomEntryModal.propTypes = {
  appName: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  showJoinRoom: PropTypes.bool,
  onJoinRoom: PropTypes.func,
  showEnterOnDevice: PropTypes.bool,
  onEnterOnDevice: PropTypes.func,
  showSpectate: PropTypes.bool,
  onSpectate: PropTypes.func,
  showOptions: PropTypes.bool,
  onOptions: PropTypes.func
};

RoomEntryModal.defaultProps = {
  showJoinRoom: true,
  showEnterOnDevice: true,
  showSpectate: true,
  showOptions: true
};
