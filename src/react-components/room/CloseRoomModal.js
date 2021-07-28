import React, { useState, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { GoBack } from "../input/BackClose";
import { Button, CancelButton } from "../input/Button";
import { Column } from "../layout/Column";
import { TextInputField } from "../input/TextInputField";
import styles from "./CloseRoomModal.scss";

export function CloseRoomModal({ roomName, onClose, onConfirm }) {
  const [confirmText, setConfirmText] = useState("");
  const [showIsNotMatchError, setShowIsNotMatchError] = useState(false);

  const onClickConfirm = useCallback(
    () => {
      if (confirmText.toLowerCase() === roomName.toLowerCase()) {
        onConfirm();
      } else {
        setShowIsNotMatchError(true);
      }
    },
    [onConfirm, confirmText, roomName]
  );

  return (
    <Modal
      title={<FormattedMessage id="close-room-modal.title" defaultMessage="Close Room" />}
      beforeTitle={<GoBack onClick={onClose} />}
      overrideStyles={styles}
    >
      <Column padding overrideStyles={styles}>
        <p>
          <FormattedMessage
            id="close-room-modal.message"
            defaultMessage="Closing this room will remove yourself and others from the room, shutting it down permanently.{linebreak}Are you sure? This action cannot be undone."
            values={{ linebreak: <br /> }}
          />
        </p>
        <p>
          <FormattedMessage
            id="close-room-modal.type-to-confirm"
            defaultMessage="Type room name to confirm: {roomName}"
            values={{ roomName: <b>{roomName}</b> }}
          />
        </p>
        <TextInputField
          label={<FormattedMessage id="close-room-modal.confirm-room-name-field" defaultMessage="Confirm Room Name" />}
          onChange={e => setConfirmText(e.target.value)}
          value={confirmText}
          error={
            showIsNotMatchError && (
              <FormattedMessage id="close-room-modal.room-name-match-error" defaultMessage="Room name does not match" />
            )
          }
        />
        <div className={styles.btnCenter}>
          <Button preset="custom3" className={styles.btnConf} onClick={onClickConfirm}>
            <FormattedMessage id="close-room-modal.confirm" defaultMessage="Yes, Close Room" />
          </Button>
          <br />
          <CancelButton onClick={onClose} />
        </div>
      </Column>
    </Modal>
  );
}

CloseRoomModal.propTypes = {
  roomName: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};
