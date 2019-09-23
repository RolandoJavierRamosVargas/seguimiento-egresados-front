import React from 'react';


class FormacionAcademica extends React.Component {
    render () {
        return (

            <div >
                <h2>Formacion Academica en PosGrado</h2>
                <form>
                    <div className="form-group">
                        <label>Codigo del Estudiante</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <h2>Programa Cursado</h2>
                    <hr></hr>
                     <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">DISI: Doctorado en Ingeniería de Sistemas e Informática</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">GTIC: Maestría en Ingeniería de Sistemas e Informática con mención en Gestión de Tecnologías de Información y Comunicaciones</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">DGTI: Maestría en Ingeniería de Sistemas e Informática con mención en Dirección en Gestión de Tecnologías de Información</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">ISW: Maestría en Ingeniería de Sistemas e Informática con mención en Ingeniería de Software</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">GIC: Maestría en Gestión de la Información y del Conocimiento</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">GTI: Maestria en Gobierno de Tecnologías de Información</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">GPTI: Diplomatura en Gerencia de Proyectos en Tecnología de Información</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">ASTI: Diplomatura en Especialización en Auditoría y Seguridad de Tecnologías de Información</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">GPGE: Diplomatura en Gestión Pública y Gobierno Electrónico</label>
                    </div>
                    <br />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 
                        <label className="form-check-label">Otro: 
                            <input  type="text" className="from-control ml-2" />
                        </label>
                    </div>

                    <br />
                    <br />
                    <div className="form-group">
                        <label>Semestre Academico de Ingreso</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Semestre Academico que Egreso</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Semestre Academica Actual</label>
                        <select id="inputState" class="form-control">
                            <option selected>--Seleccione--</option>
                            <option>Egresado</option>
                            <option>Graduado</option>
                            
                        </select>
                    </div>


                </form>
            </div>


        )
    }
}
export default FormacionAcademica;