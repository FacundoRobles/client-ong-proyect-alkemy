import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ShowSection from '../../components/ShowSection';

const Component = ({
    title,
    subtitle,
    legend,
    members,
    fetchMembersRequested,
    subtitleV2,
    legendV2
}) => {
    useEffect(() => {
        fetchMembersRequested();
    }, [fetchMembersRequested]);
    return (
        <>
            <ShowSection
                subtitle={subtitle}
                legend={legend}
                documents={members}
                title={title}
                subtitleV2={subtitleV2}
                legendV2={legendV2}
            />
        </>
    );
};

Component.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    legend: PropTypes.shape({}),
    subtitleV2: PropTypes.string,
    legendV2: PropTypes.shape({}),
    members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fetchMembersRequested: PropTypes.func.isRequired
};

Component.defaultProps = {
    title: 'Miembros',
    subtitle: 'Sobre nosotros',
    legend: {
        Nosotros: `Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos
        de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que
        podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar 
        alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabaj
        o.Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, a
        limentación y trabajo social.`,
        Visión: `Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en
        cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.`,
        Misión: `Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo personal y familiar,
        brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.`
    },
    subtitleV2: 'Programas Educativos',
    legendV2: {
        'Apoyo Escolar para el nivel Primario': `El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jue
        ves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuel
        a doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se e
        ncuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que 
        traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos pa
        ranivelar a los niños y que vayan con más herramientas a la escuela.`,
        'Apoyo Escola para el nivel Primario': `Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de
         lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entr
         e 13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios
          los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de encuentro y relaci
          ón entre ellos y la institución. `,
        'Taller Arte y Cuentos': 'Taller literario y de manualidades que se realiza semanalmente.',
        'Paseos recreativos y educativos': `Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y
         adolescentes al área educativa.`,
        Tutorias: `Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela
         y construir un proyecto de vida que da sentido al colegio. El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes
          del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de l
          a articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales
          , provinciales y nacionales que correspondan.`
    }
};

export default Component;
