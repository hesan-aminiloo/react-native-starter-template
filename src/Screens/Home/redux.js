import {
    setLang
} from '../../App/Actions/config';

export const mapDispatchToProps = (dispatch) => {
    return {
        setLang : (lang) => dispatch(setLang(lang))
    }
}

export const mapStateToProps = (state) => {
    return {
        lang    :   state.config.lang
    }
}