import React from "react";
import { IntlProvider as RIIntlProvider } from "react-intl";
import PropTypes from "prop-types";

import { children } from "propTypes";

function ConnectedIntlProvider({ locale, messages, children }) {
  return (
    <RIIntlProvider locale={locale} messages={messages}>
      {children}
    </RIIntlProvider>
  );
}

ConnectedIntlProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(PropTypes.string).isRequired,
  children
};

export default ConnectedIntlProvider;
