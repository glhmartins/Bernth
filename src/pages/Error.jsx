import style from './css/Error.module.css'

function Error (){
    return (
        <div className={style.error}>
            <h1>Ocorreu algum erro ou a página solicitada não existe</h1>
        </div>
    )
}

export default Error;