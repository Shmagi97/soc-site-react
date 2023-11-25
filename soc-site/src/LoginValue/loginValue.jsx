import "../LoginValue/loginValue.css"

const LoginValue = ()=> {
    return(
        <div className="loginValueDiv">
           <section className="loginValueSection">
             <div className="loginValueDiv2">
                <h2>შესვლა</h2>
                <form action="#" method="#">
                    <div className="loginValueDiv3">
                        <input type="text" className="loginValueDiv3Input" id="loginValueDiv3InputId" required/>
                        <label  htmlFor="loginValueDiv3InputId" className="loginValueDiv3InputLabel">მომხმარებელი</label>
                    </div>
                    <div className="loginValueDiv3">
                        <input type="text" className="loginValueDiv3Input" id="loginValueDiv3InputId2" required/>
                        <label  htmlFor="loginValueDiv3InputId2" className="loginValueDiv3InputLabel">პაროლი</label>
                    </div>
                    <button className="loginValueButton">
                        <span className="loginValueButtonSpan1 loginValueButtonSpanAll"></span>
                        <span className="loginValueButtonSpan2 loginValueButtonSpanAll"></span>
                        <span className="loginValueButtonSpan3 loginValueButtonSpanAll"></span>
                        <span className="loginValueButtonSpan4 loginValueButtonSpanAll"></span>
                        შესვლა
                    </button>
                </form>
             </div>
           </section>
        </div>
    )
}

export default LoginValue