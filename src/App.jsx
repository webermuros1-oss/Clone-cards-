import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio

        nombre='Emma Bostian'
        pais='Suecia'
        imagen='Emma'
        cargo='Ingeniera de Software en Spotify'
        empresa='Spotify'
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
      />
      <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='Shawn'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado me preparó con las habilidades necesarias para conseguir un trabajo en una empresa increíble como Amazon."
      />
      <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='Sarah'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio="freeCodeCamp cambió mi vida. En solo seis meses de estudio intensivo en línea, pude obtener un trabajo como desarrolladora de software. freeCodeCamp me dio las habilidades y la confianza que necesitaba para triunfar en el campo de la tecnología."
      />

    </div>

  )
}

export default App; 