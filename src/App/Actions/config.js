import { Config } from '../Constants';


const {
    SET_LANG
} = Config;



// EXTERNAL FUNCTIONS
export const setLang = (lang) => {
    const { setLang } = Language;
    return (dispatch) => {
        dispatch(setLang(lang));
    }
}


// INTERNAL FUNCTIONS
const Language = {
    _setLang(lang){
        return {
            type: SET_LANG,
            data: lang
        }
    }
}
