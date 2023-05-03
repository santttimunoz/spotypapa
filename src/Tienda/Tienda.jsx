export function Tienda() {
  return (
    <>
      <div className="banner"></div>
      <br />
      <div className="container">
        <div className="row">
            <h1>Productos:</h1><br />
          <div className="col-12 col-md-4">
            <div className="card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/guitar1.avif?alt=media&token=02bd7e61-1f8e-4f04-b7b8-7bf160fd50e7"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">electroAcustica A parker</h5>
                <h6>precio: </h6>
                <h4 className="text-success">150000</h4>
                <a href="#" className="btn btn-dark">
                  comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div class="card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/guitar2.jpg?alt=media&token=b05593b9-4df3-40a1-a724-5687cee04d82"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Electrica mc-Art</h5>
                <h6>precio: </h6>
                <h4 className="text-success">300000</h4>
                <a href="#" class="btn btn-dark">
                  comprar
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div class="card">
              <img src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/guitar3.jpg?alt=media&token=ff885aee-2935-4bfa-9bba-d936359d8124" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Stratocaster fender</h5>
                <h6>precio: </h6>
                <h4 className="text-success">5200000</h4>
                <a href="#" class="btn btn-dark">
                  comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
