import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import store from '../configureStore';
import en from "./en";
import fa from "./fa";

I18n.defaultLocale = store.store.getState().config.lang;

I18n.fallbacks = true;

I18n.translations = {
    'en'    : en,
    'fa'    : fa
};

export const isRTL = I18n.locale === "ar" || I18n.locale === "ar_SA" || I18n.locale === 'fa';

ReactNative.I18nManager.allowRTL(isRTL);

export function __(name, params = {}) {
    return I18n.t(name, params);
};

export default I18n;