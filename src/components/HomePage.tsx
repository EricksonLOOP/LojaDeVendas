import NavBar from "./assets/navBar";
import './css/homepage.css'
const HomePage = ()=>{
    return(
        <>
        <NavBar/>
        <section className="Apresentacao">
            <div className="container">
                <h1 className="title">
                   Loja Looping
                </h1>
                <p className="description">
                    Quer uma forma mais facil para gerenciar suas tarefas e seu negócios?
                    <br />
                    Tenha já um sistema para automatizar tudo!
                </p>
                <a href="/sistemas" className="sabermais">Saiba Mais</a>
            </div>
        </section>
        </>
    )
}

export default HomePage;