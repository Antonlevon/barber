import { useEffect, useState } from 'react';

export const useTelegramWebApp = () => {
  const [webApp, setWebApp] = useState(null);
  const [user, setUser] = useState(null);
  const [themeParams, setThemeParams] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      // Initialize Telegram WebApp
      tg.ready();
      tg.expand();
      tg.enableClosingConfirmation();

      setWebApp(tg);
      setUser(tg.initDataUnsafe?.user);
      setThemeParams(tg.themeParams);

      // Set header color
      tg.setHeaderColor('#0F0F11');
      tg.setBackgroundColor('#0F0F11');
    }

    return () => {
      if (tg) {
        tg.disableClosingConfirmation();
      }
    };
  }, []);

  const showMainButton = (text, onClick) => {
    if (webApp?.MainButton) {
      webApp.MainButton.setText(text);
      webApp.MainButton.show();
      webApp.MainButton.onClick(onClick);
    }
  };

  const hideMainButton = () => {
    if (webApp?.MainButton) {
      webApp.MainButton.hide();
    }
  };

  const showBackButton = (onClick) => {
    if (webApp?.BackButton) {
      webApp.BackButton.show();
      webApp.BackButton.onClick(onClick);
    }
  };

  const hideBackButton = () => {
    if (webApp?.BackButton) {
      webApp.BackButton.hide();
    }
  };

  const sendData = (data) => {
    if (webApp) {
      webApp.sendData(JSON.stringify(data));
    }
  };

  const close = () => {
    if (webApp) {
      webApp.close();
    }
  };

  const showAlert = (message) => {
    if (webApp) {
      webApp.showAlert(message);
    }
  };

  const showConfirm = (message, callback) => {
    if (webApp) {
      webApp.showConfirm(message, callback);
    }
  };

  return {
    webApp,
    user,
    themeParams,
    showMainButton,
    hideMainButton,
    showBackButton,
    hideBackButton,
    sendData,
    close,
    showAlert,
    showConfirm,
  };
};
