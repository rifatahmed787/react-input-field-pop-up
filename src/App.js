import svg from "./Assets/svg/login.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex justify-center mt-20">
        <label
          htmlFor="my-modal-5"
          className="btn border-none py-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Open pop-up
        </label>
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box lg:w-1/2 lg:max-w-5xl">
          <div className="modal-action mt-0">
            <label
              htmlFor="my-modal-5"
              className="btn btn-outline btn-circle btn-sm"
            >
              X
            </label>
          </div>

          <div className="lg:flex lg:flex-row-reverse">
            <div className="sm:w-4/5 md:w-11/12">
              <h1 className="text-2xl font-serif mt-2 font-bold px-7">
                GET WEEKLY POLO UPDATES
              </h1>
              <form className="px-7">
                <div className="form-control mt-7">
                  <label className="label">
                    <span className="label-text font-semibold font-serif">
                      Enter Name
                    </span>
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="border-b border-b-black border-transparent outline-none"
                  />
                </div>
                <div className="form-control mt-7">
                  <label className="label ">
                    <span className="label-text font-semibold font-serif">
                      Enter email ID
                    </span>
                  </label>
                  <input
                    required
                    name="email"
                    type="text"
                    className="border-b border-b-black border-transparent outline-none"
                  />
                </div>
                <div className="form-control mt-7">
                  <label className="label">
                    <span className="label-text font-semibold font-serif">
                      Enter phone number
                    </span>
                  </label>
                  <input
                    required
                    name="text"
                    type="text"
                    className="border-b border-b-black border-transparent outline-none"
                  />
                </div>

                <div className="form-control mt-10 mb-7">
                  <button>
                    {" "}
                    <input
                      className=" bg-black font-bold w-full text-white"
                      type="submit"
                      value="Submit"
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center lg:text-left">
              <img className="w-11/12 lg:px-2 py-auto" src={svg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
