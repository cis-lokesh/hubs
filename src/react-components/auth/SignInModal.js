import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoBack } from "../input/BackClose";
import { Modal } from "../modal/Modal";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";
import { CancelButton, NextButton, ContinueButton } from "../input/Button";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { LegalMessage } from "./LegalMessage";
import styles from "./SignInModal.scss";
import stylessignup from "../../react-components/input/TextInput.scss";
export const SignInStep = {
  submit: "submit",
  waitForVerification: "waitForVerification",
  complete: "complete"
};

export const SignInMessages = defineMessages({
  pin: {
    id: "sign-in-modal.signin-message.pin",
    defaultMessage: "You'll need to sign in to pin objects."
  },
  unpin: {
    id: "sign-in-modal.signin-message.unpin",
    defaultMessage: "You'll need to sign in to un-pin objects."
  },
  changeScene: {
    id: "sign-in-modal.signin-message.change-scene",
    defaultMessage: "You'll need to sign in to change the scene."
  },
  roomSettings: {
    id: "sign-in-modal.signin-message.room-settings",
    defaultMessage: "You'll need to sign in to change the room's settings."
  },
  closeRoom: {
    id: "sign-in-modal.signin-message.close-room",
    defaultMessage: "You'll need to sign in to close the room."
  },
  muteUser: {
    id: "sign-in-modal.signin-message.mute-user",
    defaultMessage: "You'll need to sign in to mute other users."
  },
  kickUser: {
    id: "sign-in-modal.signin-message.kick-user",
    defaultMessage: "You'll need to sign in to kick other users."
  },
  addOwner: {
    id: "sign-in-modal.signin-message.add-owner",
    defaultMessage: "You'll need to sign in to assign moderators."
  },
  removeOwner: {
    id: "sign-in-modal.signin-message.remove-owner",
    defaultMessage: "You'll need to sign in to assign moderators."
  },
  createAvatar: {
    id: "sign-in-modal.signin-message.create-avatar",
    defaultMessage: "You'll need to sign in to create avatars."
  },
  remixAvatar: {
    id: "sign-in-modal.signin-message.remix-avatar",
    defaultMessage: "You'll need to sign in to remix avatars."
  },
  remixScene: {
    id: "sign-in-modal.signin-message.remix-scene",
    defaultMessage: "You'll need to sign in to remix scenes."
  },
  favoriteRoom: {
    id: "sign-in-modal.signin-message.favorite-room",
    defaultMessage: "You'll need to sign in to add this room to your favorites."
  },
  favoriteRooms: {
    id: "sign-in-modal.signin-message.favorite-rooms",
    defaultMessage: "You'll need to sign in to add favorite rooms."
  },
  tweet: {
    id: "sign-in-modal.signin-message.tweet",
    defaultMessage: "You'll need to sign in to send tweets."
  }
});

export function SubmitEmail({ onSubmitEmail, initialEmail, privacyUrl, termsUrl, message }) {
  const intl = useIntl();
  const [email, setEmail] = useState(initialEmail);
  const [accesscode, setAccesscode] = useState("");
  const [accesscodeerror, setAccesscodeerror] = useState("Enter a valid Access code");
  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      onSubmitEmail(email);
    },
    [onSubmitEmail, email]
  );

  const onChangeEmail = useCallback(
    e => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const onChangeAccesscode = useCallback(
    e => {
      setAccesscode(e.target.value);
      if (!["12345", "67890"].includes(e.target.value)) {
        setAccesscodeerror("invalid Access Code");
      } else {
        setAccesscodeerror(false);
      }
    },
    [setAccesscode]
  );
  return (
    <Column margin as="form" onSubmit={onSubmitForm}>
      <p className={styles.label}>
        <h4>
          {message ? (
            intl.formatMessage(message)
          ) : (
            <FormattedMessage id="sign-in-modal.prompt" defaultMessage="Log In" />
          )}
        </h4>
      </p>
      <div className={styles.signupbody}>
        <div className={styles.inputContainer}>
          <label className={styles.formLbl}>{"Email"}</label>
          <TextInputField
            name="email"
            type="email"
            required
            forSignupOnly={true}
            value={email}
            // disabled={accesscodeerror ? true : false}
            onChange={onChangeEmail}
            placeholder="example@example.com"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.formLbl}>{"Access Code"}</label>
          <input
            className={stylessignup.signupinput}
            defaultValue={accesscode}
            placeholder="******"
            onBlur={onChangeAccesscode}
          />
          {accesscodeerror && <small className={styles.textError}>{accesscodeerror}</small>}
        </div>
        <p>
          {/* <small>
            <LegalMessage termsUrl={termsUrl} privacyUrl={privacyUrl} />
          </small> */}
          <div className={styles.formLbl}>
            <FormattedMessage
              id="footer.Request-Access-Code"
              defaultMessage="<a>Request Access Code</a>"
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => (
                  <a className={styles.link} href="https://www.rdland.io/sign-up">
                    {chunks}
                  </a>
                )
              }}
            />
          </div>
        </p>
        <NextButton disabled={accesscodeerror ? true : false} type="submit" />
      </div>
    </Column>
  );
}

SubmitEmail.defaultProps = {
  initialEmail: ""
};

SubmitEmail.propTypes = {
  message: PropTypes.string,
  termsUrl: PropTypes.string,
  privacyUrl: PropTypes.string,
  initialEmail: PropTypes.string,
  onSubmitEmail: PropTypes.func.isRequired
};

export function WaitForVerification({ email, onCancel, showNewsletterSignup }) {
  return (
    <Column center padding margin>
      <FormattedMessage
        id="sign-in-modal.wait-for-verification"
        defaultMessage="<p>Email sent to {email}!</p><p>To continue, click on the link in the email using your phone, tablet, or PC.</p><p>No email? You may not be able to create an account.</p>"
        // eslint-disable-next-line react/display-name
        values={{ email, p: chunks => <p>{chunks}</p> }}
      />
      {showNewsletterSignup && (
        <p>
          <small>
            <FormattedMessage
              id="sign-in-modal.newsletter-signup-question"
              defaultMessage="Want Hubs news sent to your inbox?"
            />
            <br />
            <a href="https://eepurl.com/gX_fH9" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="sign-in-modal.newsletter-signup-link" defaultMessage="Subscribe for updates" />
            </a>
          </small>
        </p>
      )}
      <CancelButton onClick={onCancel} />
    </Column>
  );
}

WaitForVerification.propTypes = {
  showNewsletterSignup: PropTypes.bool,
  email: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired
};

export function SignInComplete({ message, onContinue }) {
  const intl = useIntl();

  return (
    <Column center padding overrideStyles={styles}>
      <p>
        <b>
          {message ? (
            intl.formatMessage(message)
          ) : (
            <FormattedMessage id="sign-in-modal.complete" defaultMessage="You are now signed in." />
          )}
        </b>
      </p>
      <ContinueButton onClick={onContinue} />
    </Column>
  );
}

SignInComplete.propTypes = {
  message: PropTypes.string.isRequired,
  onContinue: PropTypes.func.isRequired
};

export function SignInModal({ closeable, onClose, children, ...rest }) {
  return (
    <Modal
      title={<FormattedMessage id="sign-in-modal.title" defaultMessage="Sign In" />}
      beforeTitle={closeable && <GoBack onClick={onClose} />}
      forSignupOnly={true}
      overrideStyles={styles}
      {...rest}
    >
      {children}
    </Modal>
  );
}

SignInModal.propTypes = {
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};
