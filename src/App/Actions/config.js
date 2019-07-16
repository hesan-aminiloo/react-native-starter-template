import { Config } from '../Constants';
import I18n from 'locales';

const {
    SET_LANG
} = Config;



// EXTERNAL FUNCTIONS
export const setLang = (lang) => {
    const { setLang } = Language;
    return (dispatch) => {
        dispatch(setLang(lang));
        I18n.locale = lang;
    }
}


// INTERNAL FUNCTIONS
const Language = {
    setLang(lang){
        return {
            type: SET_LANG,
            data: lang
        }
    }
}
