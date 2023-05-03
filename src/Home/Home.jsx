
import "./Home.css";
export function Home() {
  return (
    <>
      <section className="banner"></section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <h2>Jimmy hendrix</h2>
              <p>
                James Marshall "Jimi" Hendrix (born Johnny Allen Hendrix;
                November 27, 1942 - September 18, 1970) was an American
                guitarist, singer and songwriter. Although his mainstream career
                spanned only four years, he is widely regarded as one of the
                most influential electric guitarists in the history of popular
                music, and one of the most celebrated musicians of the 20th
                century. The Rock and Roll Hall of Fame describes him as
                "arguably the greatest instrumentalist in the history of rock
                music."
              </p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/jimmy2.webp?alt=media&token=e831b6a7-de27-489a-9716-38ad40d919f2"
                alt="foto"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-5">
                    <h2>Best guitarist ever</h2>
                    <p>
                    Jimi Hendrix is considered the greatest electric guitar player of all time. This honor is bestowed upon him not only by fans and musicians everywhere but also by scholars and most guitar legends. Contrary to what one might think, technique was not his forte. Sure, Hendrix had great facility on the instrument, but his greatest strengths were his otherworldly creativity and unmatched ability to connect with an audience. 
                    </p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/musicossmm.appspot.com/o/jimmy3.jpg?alt=media&token=b678f42f-c739-4c9f-bc62-c8e23a9e9882" alt="foto" className='img-fluid w-100' />
                </div>
          </div>
        </div>
      </section>
    </>
  );
}
