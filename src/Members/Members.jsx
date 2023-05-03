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
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Cuando murio el jimmy?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  En que año toco jimmy en woodstock
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Jimmy era diestro o zurdo?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  guitarBrand favorita de jimmy?
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Cual fue la causa de la muerte de jimmy?
                </label>
                <input
                  type="text"
                  class="form-control"
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
