import React from 'react';
class DatosPersonales extends React.Component{
    render () {
        return (
            <div>
                <form>  
        <h3>Datos Personales</h3>
        <br></br> 
        <div className="form-group">    
            <label>N° de Documento de Identidad (DNI o Carne de Extranjeria)</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Apellido Paterno</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Apellido Materno</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Nombres</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Fecha de Nacimiento</label>
            <input type="date" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Domicilio Actual</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Distrito</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Numero de Telefono fijo</label>
            <input type="text" className="form-control" ></input>
        </div>
        <div className="form-group">    
            <label>Numero de Telefono Celular</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Correo Electronico Personal</label>
            <input type="text" className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Correo Electronico Laboral </label>
            <input type="text" className="form-control" required></input>
        </div>
      </form>
            </div>
        )
    }
}
export default DatosPersonales;