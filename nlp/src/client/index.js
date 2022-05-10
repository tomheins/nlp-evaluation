
import { selector } from './js/selectors'
import { handleSubmit } from './js/formHandler'
import {string} from './js/checkstring'
import {getAnalysis} from './js/apicall'

//importing handelsubmit


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
//importing all sass filess


export {

    selector,
    handleSubmit,
    string,
    getAnalysis
    //exports handesubmit where it can be accessed in Client by html document
}
