import React from 'react';
class DatosPersonales extends React.Component{

    numeroDocRef=React.createRef();
    apellidoPatRef=React.createRef();
    apellidoMatRef=React.createRef();
    nombresRef=React.createRef();
    fechaNacRef=React.createRef();
    domicilioRef=React.createRef();
    distritoRef=React.createRef();
    numeroTeleFijoRef=React.createRef();
    numeroTeleCelRef=React.createRef();
    correoElecPersonalRef=React.createRef();
    correoElecLaboralRef=React.createRef();


    datosPersonales = e =>{
        e.preventDefault();
        
        let datosPersonales= {
            'numeroDNI' : this.numeroDocRef.current.value,
            'apellidoPat' : this.apellidoPatRef.current.value,
            'apellidoMat' : this.apellidoMatRef.current.value,
            'nombres' : this.nombresRef.current.value,
            'fechaNac' : this.fechaNacRef.current.value,
            'domicilio' : this.domicilioRef.current.value,
            'distrito' : this.distritoRef.current.value,
            'numeroTeleFijo' : this.numeroTeleFijoRef.current.value,
            'numeroTeleCel' : this.numeroTeleCelRef.current.value,
            'correoElecPersonal' : this.correoElecPersonalRef.current.value,
            'correoElecLaboral' : this.correoElecLaboralRef.current.value
        }
        console.log(datosPersonales);
        
    }

    render () {
        return (
            <div>
                <form onSubmit={this.datosPersonales}>  
        <h2>Datos Personales</h2>
        <br></br> 
        <div className="form-group">    
            <label>N° de Documento de Identidad (DNI o Carne de Extranjeria)</label>
            <input type="text" ref={this.numeroDocRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Apellido Paterno</label>
            <input type="text" ref={this.apellidoPatRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Apellido Materno</label>
            <input type="text" ref={this.apellidoMatRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Nombres</label>
            <input type="text" ref={this.nombresRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Fecha de Nacimiento</label>
            <input type="date" ref={this.fechaNacRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Domicilio Actual</label>
            <input type="text" ref={this.domicilioRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Distrito</label>
            <input type="text" ref={this.distritoRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Numero de Telefono fijo</label>
            <input type="text" ref={this.numeroTeleFijoRef} className="form-control" ></input>
        </div>
        <div className="form-group">    
            <label>Numero de Telefono Celular</label>
            <input type="text" ref={this.numeroTeleCelRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Correo Electronico Personal</label>
            <input type="text" ref={this.correoElecPersonalRef} className="form-control" required></input>
        </div>
        <div className="form-group">    
            <label>Correo Electronico Laboral </label>
            <input type="text" ref={this.correoElecLaboralRef} className="form-control" required></input>
        </div>

        <button type="submit" className="btn btn-outline-primary"> Enviar </button>
      </form>
            </div>
        )
    }
}
export default DatosPersonales;