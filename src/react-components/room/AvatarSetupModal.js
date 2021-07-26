import React from "react";
import PropTypes from "prop-types";
import { GoBack } from "../input/BackClose";
import { AvatarSettingsContent } from "./AvatarSettingsContent";
import { FormattedMessage } from "react-intl";
import styles from "./AvatarSettingsContent.scss";
import classNames from "classnames";
import { AvatarModal } from "../avatarModal/AvatarModal";

export function AvatarSetupModal({ className, onBack, ...rest }) {
  return (
    <AvatarModal
      title={<FormattedMessage id="avatar-setup-sidebar.title" defaultMessage="Avatar Setup" />}
      beforeTitle={<GoBack onClick={onBack} />}
      className={classNames(styles.avatarModal, className)}
    >
      <AvatarSettingsContent {...rest} />
    </AvatarModal>
  );
}

AvatarSetupModal.propTypes = {
  className: PropTypes.string,
  onBack: PropTypes.func
};

// import React from "react";
// import PropTypes from "prop-types";
// import { Modal } from "../modal/Modal";
// import { BackButton } from "../input/BackButton";
// import { AvatarSettingsContent } from "./AvatarSettingsContent";
// import { FormattedMessage } from "react-intl";
// import styles from "./AvatarSettingsContent.scss";
// import { stylemodal } from "../modal/Modal.scss";
// import classNames from "classnames";

// export function AvatarSetupModal({ className, onBack, ...rest }) {
//   return (
//     <Modal
//       //title={<FormattedMessage id="avatar-setup-sidebar.title" defaultMessage="Avatar" />}
//       beforeTitle={<BackButton onClick={onBack} />}
//       className={classNames(styles.avatarModal)}
//     >
//       <AvatarSettingsContent {...rest} />
//     </Modal>
//   );
// }

// AvatarSetupModal.propTypes = {
//   className: PropTypes.string,
//   onBack: PropTypes.func
// };
