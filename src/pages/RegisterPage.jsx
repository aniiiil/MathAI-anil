import TabCard from "../components/TabCard"

const RegisterPage = () => {
  return (
    <section className="register-page  min-vh-100 bg-light ">
      <div className=" row d-flex g-0 position-relative justify-content-center align-items-center min-vh-100">
        <div className=" d-none d-lg-flex col-sm-6 col-md-4 g-0 m-0   sidebar-container  min-vh-100">
          <div className="h-100 ">
            <div className="side-img ">
              <img className="w-100 " src="./logo.png" alt="" srcset="" />
            </div>
            <h2 className="sidebar-title ">
              Your All-in-One AI Learning Assistant
            </h2>
            <p className="sidebar-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              fuga odio fugiat autem. Dolorum, nostrum? Unde ex enim molestiae
              eos voluptas accusantium voluptatibus animi est explicabo ipsam,
              vel, quasi iusto, ad tempore quia quod perferendis?
            </p>
          </div>
        </div>
        <div className="col w-100 d-flex justify-content-center align-items-center ">
          <TabCard />
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
