import s from "./ProfileDataEditReduxForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

let ProfileDataEdit = ({profile, handleSubmit, error}) => {

    return (
        <form className={s.information} onSubmit={handleSubmit}>
            <div className={s.block1}>
                {error && <div className={s.formSummaryError }>
                    {error}
                </div>}
                <div>
                    <b>Full name:</b>
                    <Field placeholder={"Your full name"} name={"fullName"} component={Input} />
                </div>
                <div>
                    <b>Looking for a job:</b>
                    <Field  placeholder="Yes" name={"lookingForAJob"} component={Input} type="checkbox" value="yes" />
                </div>
                <div>
                    <b>Description:</b>
                    <Field placeholder={"Tell something about you"} name={"lookingForAJobDescription"} component={Textarea} />
                </div>
                <div>
                    <b>About me:</b>
                    <Field placeholder={"Tell something"} name={"aboutMe"} component={Textarea} />
                </div>
                <div>
                        <b>Contacts:</b>{ Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            {key}: <Field key={key} placeholder={key} name={"contacts." + key} component={Input}/>
                        </div>
                    }) }
                </div>
            </div>
            <div className={s.block2}>
                <div><button className={s.information_buttonSave}>save</button></div>
            </div>
        </form>
    )
}

let ProfileDataEditReduxForm = reduxForm({form: "dataEdit"})(ProfileDataEdit)

export default ProfileDataEditReduxForm
