import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { alertSelector, removeAlert } from '../../models/alert/redux/index';
import {stylesAlert} from "./alertBoxStyles";
import {useActions} from "../../shared/hooks";
import {Alert, AlertTitle} from "@material-ui/lab";

export const AlertBox = () => {
  const styles = stylesAlert();
  const { messages } = useSelector(alertSelector, shallowEqual);
  const dispatchRemoveAlert = useActions(removeAlert);

  return (
    messages.length ? (
      <div className={styles.alertContainer}>
        {
          messages.map(({ variant, message, id }) => (
            <Alert
              severity={variant}
              key={id}
              dismissible
              onClose={() => dispatchRemoveAlert(id)}
              className={styles.alertElement}
            >
              <AlertTitle className={styles.alertText}>{message}</AlertTitle>
            </Alert>
          ))
        }
      </div>
    ) : null
  );
};
