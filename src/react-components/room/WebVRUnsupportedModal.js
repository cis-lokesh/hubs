import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { GoBack } from "../input/BackClose";
import { Button } from "../input/Button";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import styles from "./WebVRUnsupportedModal.scss";

export function WebVRUnsupportedModal({ onClose }) {
  return (
    <Modal
      title={<FormattedMessage id="webvr-unsupported-modal.title" defaultMessage="Enter in VR" />}
      beforeTitle={<GoBack onClick={onClose} />}
      overrideStyles={styles}
    >
      <Column padding center>
        <p>
          <FormattedMessage
            id="webvr-unsupported-modal.message"
            defaultMessage="WebVR isn't supported in this browser, to enter with Oculus or SteamVR, use Firefox."
          />
        </p>
        <Button
          as="a"
          preset="accent2"
          href="https://www.mozilla.org/firefox/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <FormattedMessage id="webvr-unsupported-modal.download-firefox-button" defaultMessage="Download Firefox" />
          </span>
        </Button>
        <p>
          <small>
            <FormattedMessage
              id="webvr-unsupported-modal.webvr-rocks-link"
              defaultMessage="For a list of browsers with experimental VR support, visit <a>WebVR Rocks</a>."
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => (
                  <a href="https://webvr.rocks" target="_blank" rel="noopener noreferrer">
                    {chunks}
                  </a>
                )
              }}
            />
          </small>
        </p>
      </Column>
    </Modal>
  );
}

WebVRUnsupportedModal.propTypes = {
  onClose: PropTypes.func
};
