import './SendMail.css';
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from '../../store/reducer/mailReducer'
import {addMail} from '../../store/reducer/mailReducer'

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const SendMail = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = data => {
        dispatch(addMail(data))
        dispatch(closeSendMessage())
    }
    return (
        <div className="send_mail">
            <div className="send_mail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="send_mail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="To" {...register('to', {required: true})}/>
                {errors.to && (<p className="send_mail__error">This Field Is Required</p>)}

                <input placeholder="Subject"
                       {...register('subject', {required: true})}/>
                {errors.subject && (<p className="send_mail__error">This Field Is Required</p>)}

                <input placeholder="Message..." className="send_mail__message"
                       {...register('message', {required: true})}/>
                {errors.message && (<p className="send_mail__error">This Field Is Required</p>)}

                <div className="send_mail__options">
                    <Button onClick={() => console.log(errors)}
                            className="send_mail__button" variant="contained" color="primary"
                            type="submit">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
