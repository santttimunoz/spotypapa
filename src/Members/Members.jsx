import "./Members.css";
import { Form } from "../Form/Form";
export function Members() {
  return (
    <>
      <div className="banner1">
        <Form></Form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Que sabes?</h1>
            <form action="">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Cuando murio el jimmy?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />                
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  En que año toco jimmy en woodstock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Jimmy era diestro o zurdo?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  guitarBrand favorita de jimmy?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Cual fue la causa de la muerte de jimmy?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />                
              </div>
              <div className="row">
                <div className="col ">
                    <button className="btn btn-dark">enviar</button>
                </div>
            </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
