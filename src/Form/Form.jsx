export function Form() {
    return (
        <>
        <h1 className="text-light ">Registrate: </h1><br />
            <form>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-people"></i></span>
                            <input type="text" className="form-control" placeholder="Nombre Cliente" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="bi bi-telephone"></i></span>
                             <input type="text" className="form-control" placeholder="Telefono Cliente" />                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                           <input type="text" className="form-control" placeholder="Correo cliente" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="bi bi-question-circle"></i></span>                             
                            <input type="text" className="form-control" placeholder="contraseña" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar3"></i></span>
                           <input type="date" className="form-control"  />
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className="col ">
                    <button className="btn btn-light">enviar</button>
                </div>
            </div>


            </form>
        </>
    )
}