import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as CloseIcon } from "./icons/Close.svg";
import { faUndo } from "@fortawesome/free-solid-svg-icons/faUndo";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FormattedMessage, injectIntl, useIntl, defineMessages } from "react-intl";
import styles from "../assets/stylesheets/worlds-screen.scss";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.jpg";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.jpg";
import w6 from "../assets/images/w6.png";
import w7 from "../assets/images/w7.png";
import w8 from "../assets/images/w8.png";
import w9 from "../assets/images/w9.png";
import { defaultMaterialQualitySetting } from "../storage/store";
import { AVAILABLE_LOCALES } from "../assets/locales/locale_config";
import { themes } from "./styles/theme";

const CATEGORY_1 = 0;
const CATEGORY_2 = 1;
const CATEGORY_3 = 2;

const TOP_LEVEL_CATEGORIES = [CATEGORY_1, CATEGORY_2, CATEGORY_3];
const categoryNames = defineMessages({
  [CATEGORY_1]: { id: " worlds-screen.category.CATEGORY_1", defaultMessage: "Worlds" }
  // [CATEGORY_2]: { id: " worlds-screen.category.CATEGORY_2", defaultMessage: "Categories" },
  // [CATEGORY_3]: { id: " worlds-screen.category.CATEGORY_3", defaultMessage: "Categories" }
});
// const categoryNames = defineMessages({
//   [CATEGORY_1]: { id: " worlds-screen.category.CATEGORY_1", defaultMessage: "Categories" },
//   [CATEGORY_2]: { id: " worlds-screen.category.CATEGORY_2", defaultMessage: "Categories" },
//   [CATEGORY_3]: { id: " worlds-screen.category.CATEGORY_3", defaultMessage: "Categories" }
// });

const worldNames = defineMessages({
  World1: { id: " events-screen.name.world1", defaultMessage: "Central Plaza" },
  World2: { id: " events-screen.name.world2", defaultMessage: "Talks & Speaker Sessions" },
  World3: { id: " events-screen.name.world3", defaultMessage: "Underworld" },
  World4: { id: " events-screen.name.world4", defaultMessage: "Cyber Sensations by Sexy People" },
  World5: { id: " events-screen.name.world5", defaultMessage: "Synergy by Trippyogi" },
  World6: { id: " events-screen.name.world6", defaultMessage: "Digital America by NFT Museum" },
  World7: { id: " events-screen.name.world7", defaultMessage: "Xeno_angel_a by Delta.ark" },
  World8: { id: " events-screen.name.world8", defaultMessage: "Xeno_angel_b by Delta.ark" },
  World9: { id: " events-screen.name.world9", defaultMessage: "Evening Sale by NFT Museum" }
});

const worldLinks = defineMessages({
  WorldLink1: {
    id: " events-screen.link.world1",
    defaultMessage: "event.rdlxr.io"
  },
  WorldLink2: { id: " events-screen.link.world2", defaultMessage: "https://rdland.me/QBorYSG/centralplaza" },
  WorldLink3: { id: " events-screen.link.world3", defaultMessage: "uw.rdlxr.io" },
  WorldLink4: {
    id: " events-screen.link.world4",
    defaultMessage: "https://rdland.me/VAMrauw/cybersensation"
  },
  WorldLink5: { id: " events-screen.link.world5", defaultMessage: "https://rdland.me/8QpNSYY/yogi" },
  WorldLink6: { id: " events-screen.link.world6", defaultMessage: "https://oncyber.io/digital_america" },
  WorldLink7: { id: " events-screen.link.world7", defaultMessage: "https://babylonjsvr-cloth.glitch.me" },
  WorldLink8: { id: " events-screen.link.world8", defaultMessage: "https://babylonjsvr-hyperobject.glitch.me/" },
  WorldLink9: { id: " events-screen.link.world9", defaultMessage: "https://oncyber.io/evening_sale_1" }
});

const worldDescription = defineMessages({
  World1: { id: " events-screen.description.world1", defaultMessage: "Three Word Description" },
  World2: { id: " events-screen.description.world2", defaultMessage: "Three Word Description" },
  World3: { id: " events-screen.description.world3", defaultMessage: "Three Word Description" }
});

function NavItem({ ariaLabel, title, onClick, selected }) {
  return (
    <button
      aria-label={ariaLabel}
      className={classNames(styles.navItem, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
NavItem.propTypes = {
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};
function CloseButton({ onClick }) {
  const intl = useIntl();
  return (
    <button
      autoFocus
      aria-label={intl.formatMessage({
        id: "events-screen.close-button",
        defaultMessage: "Close Preferences Menu"
      })}
      className={classNames(styles.closeButton)}
      onClick={onClick}
    >
      <i className={styles.flex}>
        <CloseIcon />
      </i>
    </button>
  );
}
CloseButton.propTypes = {
  onClick: PropTypes.func
};

class Nav extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.navContainer}>
        <div className={classNames(styles.nav)}>{children}</div>
      </div>
    );
  }
}
Nav.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.number
};

const Card = ({ src, defaultmessage, description, world }) => {
  const intl = useIntl();

  return (
    <>
      <div className={classNames(styles.scrollingItem)}>
        <a href={intl.formatMessage(worldLinks[world])} className={styles.link}>
          <img src={src} alt="not found" />
        </a>
        <br />
        {/* <p>9:00 EST - 10:00 EST</p> */}
        <a href={intl.formatMessage(worldLinks[world])} className={styles.link}>
          <p>
            <b>{intl.formatMessage(worldNames[defaultmessage])}</b>
          </p>
        </a>

        {/* <p>{intl.formatMessage(worldDescription[description])}</p> */}
      </div>
    </>
  );
};

class World extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Card src={w1} defaultmessage="World1" description="World1" world="WorldLink1" />
        <Card src={w2} defaultmessage="World2" description="World2" world="WorldLink2" />
        <Card src={w3} defaultmessage="World3" description="World3" world="WorldLink3" />
      </>
    );
  }
}
class World2 extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Card src={w4} defaultmessage="World4" description="World4" world="WorldLink4" />
        <Card src={w5} defaultmessage="World5" description="World5" world="WorldLink5" />
        <Card src={w6} defaultmessage="World6" description="World6" world="WorldLink6" />
      </>
    );
  }
}

class World3 extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Card src={w7} defaultmessage="World7" description="World7" world="WorldLink7" />
        <Card src={w8} defaultmessage="World8" description="World8" world="WorldLink8" />
        <Card src={w9} defaultmessage="World9" description="World9" world="WorldLink9" />
      </>
    );
  }
}

class WorldsScreen extends Component {
  static propTypes = {
    intl: PropTypes.object,
    onClose: PropTypes.func,
    store: PropTypes.object,
    scene: PropTypes.object
  };

  constructor() {
    // TODO: When this component is recreated it clears its state.
    // This happens several times as the page is loading.
    // We should either avoid remounting or persist the category somewhere besides state.
    super();

    this.mediaDevicesManager = window.APP.mediaDevicesManager;

    this.state = {
      category: CATEGORY_1
    };
  }

  render() {
    const intl = this.props.intl;

    return (
      <div className={classNames(styles.worldPanel)}>
        <CloseButton onClick={this.props.onClose} />
        <Nav selected={this.state.category}>
          {/* {TOP_LEVEL_CATEGORIES.map(category => (
            <NavItem
              key={`category-${category}-header`}
              title={intl.formatMessage(categoryNames[category])}
              onClick={() => {
                this.setState({ category });
              }}
              ariaLabel={intl.formatMessage(
                { id: "worlds-screen.select-category ", defaultMessage: "Select category {categoryName}" },
                {
                  categoryName: intl.formatMessage(categoryNames[category])
                }
              )}
              // selected={category === this.state.category}
            />
          ))} */}

          <NavItem
            title={intl.formatMessage(categoryNames[CATEGORY_1])}
            // selected={category === this.state.category}
          />
        </Nav>
        <div className={styles.contentContainer}>
          <div className={styles.scrollingContent}>
            <World />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.scrollingContent}>
            <World2 />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.scrollingContent}>
            <World3 />
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(WorldsScreen);
