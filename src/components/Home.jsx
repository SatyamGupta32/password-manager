import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [form, setForm] = React.useState({
    site: "",
    username: "",
    password: "",
  });
  const showref = React.useRef();
  const passwordref = React.useRef();
  const [passwordArray, setPasswordArray] = React.useState([]);

  React.useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (showref.current.src.includes("/view.png")) {
      showref.current.src = "/hide.png";
      passwordref.current.type = "password";
    } else {
      showref.current.src = "/view.png";
      passwordref.current.type = "text";
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      toast("Password saved succesfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const updatedPasswordArray = [...passwordArray, form];
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
      setForm({ site: "", username: "", password: "" });
    } else {
      toast("Fields must be longer.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const clearLocalStorage = () => {
    toast("delete all Password", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    localStorage.clear();
    setPasswordArray([]); // Clear the state as well
  };

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const handleEdit = (index) => {
    console.log("the id is", index);
    setForm(passwordArray[index]);
    const updatedPasswordArray = [
      ...passwordArray.slice(0, index),
      ...passwordArray.slice(index + 1),
    ];
    setPasswordArray(updatedPasswordArray);
  };

  const handleDelete = (index) => {
    console.log("the id is", index);
    const updatedPasswordArray = [
      ...passwordArray.slice(0, index),
      ...passwordArray.slice(index + 1),
    ];
    let confirmDelete = confirm("Do yo reall want to delete this Password??");
    if (confirmDelete) {
      toast("Password Deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="Container flex flex-col items-center min-h-screen py-4 z-[-2] w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <div className="p-2 md:p-4 lg:p-2 w-full max-w-7xl">
          <div className="text-center mb-6">
            <div>
              <span className="text-red-700 text-3xl font-bold">&lt;</span>
              <span className="font-semibold text-gray-500 text-3xl">
                Vault
              </span>
              <span className="font-semibold text-red-700 text-xl">Guard</span>
              <span className="text-red-700 text-3xl font-bold">/&gt;</span>
            </div>
            <p className="text-sm text-red-900 font-semibold">
              Your own Password Manager
            </p>
          </div>
          <div>
            <div className="mb-4">
              <input
                value={form.site}
                onChange={handleChange}
                type="text"
                name="site"
                placeholder="Enter website URL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-[12px] md:text-sm"
                required
              />
            </div>
            <div className="flex mb-6 gap-4 flex-col md:flex-row">
              <div className="w-full">
                <input
                  value={form.username}
                  onChange={handleChange}
                  type="Text"
                  name="username"
                  placeholder="Enter Username"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-[12px] md:text-sm"
                  required
                />
              </div>
              <div className="relative">
                <input
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  ref={passwordref}
                  placeholder="Enter Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-[12px] md:text-sm"
                  required
                />
                <span className="absolute right-2 top-3">
                  <img
                    ref={showref}
                    className="w-5 cursor-pointer"
                    src="/hide.png"
                    alt="hide-password"
                    onClick={showPassword}
                  />
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={savePassword}
                type="submit"
                className="py-2 px-4 flex items-center justify-center gap-3 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/jgnvfzqg.json"
                  trigger="hover"
                  colors="primary:#e4e4e4"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <span className="hidden md:block">Add Password</span>
              </button>
              <button
                onClick={clearLocalStorage}
                className="ml-4 py-2 px-4 flex items-center justify-center gap-3 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/skkahier.json"
                  trigger="morph"
                  state="morph-trash-full-to-empty"
                  colors="primary:#e4e4e4"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <span className="hidden md:block">Reset Vault</span>
              </button>
            </div>
          </div>
        </div>
        <div className="PasswordRecords w-full max-w-7xl items-center p-2 md:p-4 lg:p-2">
          <h2 className="text-2xl font-bold text-center my-4">
            Password Records
          </h2>
          {passwordArray.length === 0 ? (
            <div className="h-[40vh] flex items-center justify-center text-lg font-bold">
              No Password to Show
            </div>
          ) : (
            <div className="w-full overflow-x-auto mb-3">
              <table className="table-auto w-full text-left border border-white rounded-2xl">
                <thead className="bg-red-600 border text-center font-bold text-[12px] md:text-sm border-gray-300 rounded-md shadow-sm text-white">
                  <tr>
                    <th>Site Name</th>
                    <th className="copy p-0 w-1 border-r"></th>
                    <th>User Name</th>
                    <th className="copy p-0 w-1 border-r"></th>
                    <th>Password</th>
                    <th className="copy p-0 w-1 border-r"></th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody className="bg-pink-100 text-[#afb1b4] font-semibold text-[12px] md:text-sm border border-gray-300 rounded-md shadow-sm">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        {/* {console.log(index)} */}
                        <td className="cursor-pointer w-[250px]">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                        </td>
                        <td
                          className="border-r lordIcon"
                          onClick={() => copyText(item.site)}
                        >
                          <lord-icon
                            style={{
                              cursor: "pointer",
                            }}
                            colors="primary:#afb1b4"
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </td>
                        <td>{item.username}</td>
                        <td
                          className="border-r lordIcon"
                          onClick={() => copyText(item.username)}
                        >
                          <lord-icon
                            style={{
                              cursor: "pointer",
                            }}
                            colors="primary:#afb1b4"
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </td>
                        <td>{item.password}</td>
                        <td
                          className="border-r lordIcon"
                          onClick={() => copyText(item.password)}
                        >
                          <lord-icon
                            style={{
                              cursor: "pointer",
                            }}
                            colors="primary:#afb1b4"
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                          ></lord-icon>
                        </td>
                        <td className="flex justify-evenly items-center p-0">
                          <span
                            className=" h-11 flex items-center lordIcon"
                            onClick={() => handleEdit(index)}
                          >
                            {" "}
                            <lord-icon
                              style={{
                                cursor: "pointer",
                              }}
                              colors="primary:#afb1b4"
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                            ></lord-icon>
                          </span>
                          {/* <span className="text-sm md:text-xl">/</span> */}
                          <span
                            className=" h-11 flex items-center lordIcon"
                            onClick={() => handleDelete(index)}
                          >
                            {" "}
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="morph"
                              state="morph-trash-full-to-empty"
                              colors="primary:#afb1b4"
                              style={{
                                cursor: "pointer",
                              }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
