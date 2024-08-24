import LandingPageHeader from "./LandingPageHeader";
import LandingPageSubtitle from "./LandingPageSubtitle";
import LandingPageFooter from "./LandingPageFooter";

const LandingPage = () => {

    return (
        <div className="l-p-container">
            <div className="landing-page-container">
                <LandingPageHeader headerTitle="Modulo 7: DESARROLLO FRONTEND CON REACTJS"/>
                <LandingPageSubtitle headerSubtitle="Bienvenido"/>
                <p>Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>,
                    el manejo de <b>hooks</b> y el uso de <b>Redux</b>.</p>
                <LandingPageSubtitle headerSubtitle="Temas Cubiertos"/>
                <div className="landing-page-topics">
                    <div className="landing-page-topic">
                        Componentes funcionales de clase.
                    </div>
                    <div className="landing-page-topic">
                        Uso de <b>React hooks</b> como useState y useEffect.
                    </div>
                    <div className="landing-page-topic">
                        Creación de <b>custom hooks</b> como useForm.
                    </div>
                    <div className="landing-page-topic">
                        Gestión de variables de estado con <b>useState</b>.
                    </div>
                    <div className="landing-page-topic">
                        Gestión de estado global con <b>Redux</b>.
                    </div>
                    <div className="landing-page-topic">
                        Integración de <b>Redux</b> con <b>React</b>.
                    </div>
                    <div className="landing-page-topic">
                        Manejo de <b>Formularios</b> en <b>React</b>.
                    </div>
                    <div className="landing-page-topic">
                        Publicando nuestra <b>página</b> con <b>GitHub Pages</b>.
                    </div>
                </div>
                <LandingPageSubtitle headerSubtitle="Recursos Adicionales"/>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>

                <LandingPageFooter/>
            </div>

        </div>
    );
}
export default LandingPage;
