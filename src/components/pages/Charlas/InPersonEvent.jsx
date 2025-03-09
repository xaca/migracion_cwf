import About from "../../ui/About/About";
import Agenda from "../../ui/Agenda/Agenda";
import Register from "../../ui/Register/Register";
import "../../../css/speakers.scss";

/*
Identificadores imagenes redes:
    0 - linkedin
    1 - instagram
    2 - github
    3 - website
*/
function InPersonEvent(){
    return (<>
        <About />
        <Register />
        <Agenda />
        <Speakers speaker={{
            name:"Valen Ariza Gómez",
            avatar:"",
            handles:[
                {id:0, url:"https://www.linkedin.com/in/valearizag/"},
                {id:1, url:"https://www.instagram.com/valearizag/"}
            ],
            is_alumni:true,
            graduation_year:2020,
            description:`Ingeniera en telecomunicaciones por profesión e ingeniera de datos por pasión, con +3 años de experiencia. Cuenta con habilidades para la construcción de pipelines (ETL) automatizadas mediante implementaciones end-to-end basadas en datos. Es capaz de entender las necesidades de sus clientes y a partir de ahí ha diseñado y aprovisionado arquitecturas en Microsoft Azure costo-eficientes. También cuenta con experiencia en Gobierno de datos relacionado con el framework DAMA usando la herramienta Microsoft Purview.`
        }} />
        <Speakers speaker={{
            name:"Valen Ariza Gómez",
            avatar:"",
            handles:[
                {id:0, url:"https://www.linkedin.com/in/valearizag/"},
                {id:1, url:"https://www.instagram.com/valearizag/"}
            ],
            is_alumni:true,
            graduation_year:2020,
            description:`Ingeniera en telecomunicaciones por profesión e ingeniera de datos por pasión, con +3 años de experiencia. Cuenta con habilidades para la construcción de pipelines (ETL) automatizadas mediante implementaciones end-to-end basadas en datos. Es capaz de entender las necesidades de sus clientes y a partir de ahí ha diseñado y aprovisionado arquitecturas en Microsoft Azure costo-eficientes. También cuenta con experiencia en Gobierno de datos relacionado con el framework DAMA usando la herramienta Microsoft Purview.`
        }} />
        <Speakers speaker={{
            name:"Laura López Bedoya",
            avatar:"",
            handles:[
                {id:0, url:"https://www.linkedin.com/in/lauralpezb/"},
                {id:1, url:"https://www.instagram.com/lauralpezb/"}
            ],
            is_alumni:true,
            graduation_year:2019,
            description:`Científico de datos. Estoy interesado en la comprensión y aplicación del aprendizaje automático y el análisis de datos para generar conocimientos y soluciones valiosas.`
        }} />
        <Speakers speaker={{
            name:"Cristina Gómez Santamaría",
            avatar:"",
            handles:[
                {id:0, url:"https://www.linkedin.com/in/cristina-gomez-santamar"},
            ],
            is_alumni:false,
            description:`Soy líder de proyectos de ciencia de datos en Mercado Libre. Apasionada por la ciencia y la tecnología, tengo más de 20 años de experiencia en IA y telecomunicaciones, incluyendo el liderazgo de equipos de IA y ciencia de datos, y la investigación asociada a estas tecnologías, todo aplicado en diversos sectores incluyendo fintech, comercio electrónico y el sector público. Tengo un doctorado en Ingeniería de Telecomunicaciones de la Universidad Pontificia Bolivariana.`
        }} />
        <Speakers speaker={{
            name:"Valeria Moreno Zapata",
            avatar:"",
            handles:[
                {id:0, url:"https://www.linkedin.com/in/valeria-moreno-zapata-0249b5136/"},
            ],
            is_alumni:true,
            graduation_year:2019,
            description:`Soy Ingeniera de Sistemas de la UPB, cuento con ocho años de experiencia en el sector de TI. Actualmente, me desempeño como Coordinadora de equipos TI y comercial en Pragma, una empresa colombiana de desarrollo de software, donde lidero equipos de mercadeo y tecnología. Además, combino mi profesión con mi pasión por compartir conocimiento y experiencias, desempeñándome como profesora de cátedra para estudiantes de Ingeniería de Sistemas en la UPB,donde guío y preparo a futuros profesionales para enfrentar los retos del sector`
        }} />
    </>);
}