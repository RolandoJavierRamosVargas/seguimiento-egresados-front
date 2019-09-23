import React from 'react';

class AltaResponsabilidad extends React.Component {
    render  () {
        return (
            <div>
                <h2> Alta Responsabilidad </h2>
                <form>
                    <div className="form-group">
                        <label>Entidad</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Funcion desempeñada</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Exprese las principales funciones desempeñadas</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Motivo de cese</label>
                        <input type="text" className="form-control"></input>
                    </div>
                </form>
            </div>

        )
    }
}
export default AltaResponsabilidad;