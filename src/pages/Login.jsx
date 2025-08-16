import style from './css/Login.module.css'

function Login(){
    return(
        <div className={style.forms_container}>
            <div className={style.background}>
                <form className={style.forms} action="/" method="post">
                    <div className={style.inputs}>
                        <label className={style.labelInput}>USERNAME</label><br/>
                        <input type="text" className={style.inputForms}/><br/>
                        <label className={style.labelInput}>PASSWORD</label><br/>
                        <input type="password" className={style.inputForms}/><br/>
                        <input type="checkbox" className={style.checkBox}/>
                        <label className={style.labelCheck}>Remember me</label><br/>
                        <p className={style.lostPassword}>Lost your password?</p>
                    </div>
                        <button type="submit" className={style.btn}>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login;