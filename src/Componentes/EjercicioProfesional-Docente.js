import React from 'react';


class EjercicioProfesionalDocente extends React.Component {
    render () {
        return (
            <div>
                <h2>Ejercicio Profesional-Docente</h2>
                <form>
                    <div className="form-group">
                        <label>Entidad </label>
                        <input type="text" className="form-control" placeholder="Tu entidad"></input>
                    </div>
                    <div className="form-group">
                        <label>Tipo de Entidad </label>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Publica
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Privada
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Otro
                                </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Cargo </label>
                        <input type="text" className="form-control" placeholder="Tu entidad"></input>
                    </div>

                    <div className="form-group">
                        <label>Principales funciones que desempeña </label>
                        <input type="text" className="form-control" placeholder="Describa algunas de sus funciones  "></input>
                    </div>


                    <div className="form-group">
                        <label>Tipo de vinculo laboral </label>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Dependiente
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Independiente
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                CAS
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Por Servicios
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked /> 
                                <label class="form-check-label" for="exampleRadios1">
                                Otro
                                </label>
                        </div>

                        <div className="form-group">
                            <label>Numero de Años </label>
                            <input type="text" className="form-control" placeholder="Indique el numero de años que desempeña en la entidad"></input>
                        </div>

                        <div className="form-group">
                            <label>Numero de Meses </label>
                            <input type="text" className="form-control" placeholder="Indique el numero de meses que desempeña en la entidad"></input>
                        </div>

                        <div className="form-group">
                            <label>Nombre de su Jefe inmediato Superior </label>
                            <input type="text" className="form-control" ></input>
                        </div>
                        <div className="form-group">
                            <label>Correo electronico de su Jefe inmediato Superior </label>
                            <input type="text" className="form-control" ></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default EjercicioProfesionalDocente;