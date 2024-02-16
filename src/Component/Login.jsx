import React, { useEffect, useState, useRef } from "react";
import Actor from "./Actor";
import { v4 } from "uuid";

const Login = () => {
  const [form, setForm] = useState({
    id: "",
    co: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    sexual: "",
    role: "",
  });
  const [actor, setActor] = useState([]);
  const [conu, setConu] = useState(1);
  const [show, setShow] = useState(false);

  const [err, setErr] = useState("");
  const [alarm, setAlarm] = useState(false);

  useEffect(() => {
    if (alarm) {
      document.querySelector("#root2").innerText = err;
    } else return;
  }, [err]);

  const inputs = [
    { type: "text", placeholder: "name", name: "name", value: form.name },
    {
      type: "text",
      placeholder: "lastname",
      name: "lastname",
      value: form.lastname,
    },
    { type: "email", placeholder: "email", name: "email", value: form.email },
    {
      type: "number",
      placeholder: "phone number",
      name: "phone",
      value: form.phone,
    },
  ];

  const deletehandler =(id) =>{
   let afterdele= actor.filter((item)=>
     item.id !== id
    )
    setActor(afterdele)
  }
  useEffect(() => {
    
    setForm((form) => ({
      ...form,
      ["co"]: conu,
    }));
  }, [conu]);

  const changehandler = (e) => {
    if (e.target.name == "submit") {
      if (
        !form.name ||
        !form.lastname ||
        !form.email ||
        !form.phone ||
        !form.sexual ||
        !form.role
      ) {
        setAlarm(true);
        setErr("there is empty field");
      } else if (form.phone.length < 11) {
        setAlarm(true);
        setErr(`phone number field is too short`);
      } else if (!/[09][0-9]{10}$/.test(form.phone)) {
        setAlarm(true);
        setErr(`phone number field invalid 
        should start by 09`);
      } else if (form.name.length < 3) {
        setAlarm(true);
        setErr(`name field his too short`);
      } else if (form.lastname.length < 3) {
        setAlarm(true);
        setErr(`last name field his too short`);
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)
      ) {
        setAlarm(true);
        setErr(`email invalid`);
      } else if (form.email.length < 3) {
        setAlarm(true);
        setErr(`email field his too short`);
      } else {
        setConu((conu) => conu + 1)
        console.log(form);
        console.log(v4());
        const newform = { ...form, id: v4() };
        console.log(newform);
        setShow(true);
        setActor((actor) => [...actor, newform]);
        console.log(actor);
        console.log(form.co);
        setAlarm(false);
        setErr("");
        setForm({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          sexual: "",
          role: "",
        });
      }
    } else if (e.target.name == "role") {
      e.target.firstChild.innerHTML = e.target.value;
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name == "name") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
      setErr("");
      if (/[\d , @ ,% ,$ ,# ,! ,& ]/.test(e.target.value)) {
        setAlarm(true);
        setErr(`name field has number or any sign ,, 
        you should change it ,,
              until you can continue`);
      } else {
        setErr("");
      }
    } else if (e.target.name == "lastname") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
      setErr("");
      if (/[\d , @ ,% ,$ ,# ,! ,& ]/.test(e.target.value)) {
        setAlarm(true);
        setErr(`last name field has number or any sign ,, 
        you should change it ,,
              until you can continue`);
      } else {
        setErr("");
      }
    } else if (e.target.name == "email") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
      setErr("");
    } else if (e.target.name == "phone") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
      setErr("");
    } else if (e.target.name == "sexual") {
      setForm((form) => ({
        ...form,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <>
      <div
        className="bg-slate-200  dark:bg-colorself-100 dark:text-white flex 
      flex-col parent h-full justify-center text-center text-black items-center "
      >
        <h1 className="text-center max-xl:mt-36 font-bold text-3xl">
          this is list of actor in compony
        </h1>
        <form className="flex flex-row max-xl:space-y-3 max-xl:items-baseline max-xl:flex-col items-center m-10 p-10 space-x-3 bg-colorself-200 border-solid border-2 border-black  dark:shadow-none shadow-xl shadow-slate-600
         ">
          {inputs.map((item, index) => (
            <input
              className="border-2  text-[13pt] border-solid outline-none border-black p-4 rounded-lg text-black bg-gray-100 "
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={item.value}
              key={index}
              onChange={changehandler}
              minLength={3}
            />
          ))}
        
          <label>men</label>
          <input
            className="mt-1 w-4 h-4"
            type="radio"
            name="sexual"
            value="men"
            checked={form.sexual == "men"}
            onChange={changehandler}
          />
          
          <label>women</label>
          <input
            className="mt-1 w-4 h-4"
            type="radio"
            name="sexual"
            value="women"
            checked={form.sexual == "women"}
            onChange={changehandler}
          />
          
          <select
            className="border-2 text-[13pt]  border-black p-5 rounded-lg outline-none text-black "
            name="role"
            value={form.role}
            onChange={changehandler}
          >
            <button disabled>Role</button>
            <option value="Role">Role</option>
            <option value="Management">Management</option>
            <option value="Employee">Employee</option>
            <option value="Secretary">Secretary</option>
            <option value="Customer">Customer</option>
            <option value="designer">designer</option>
            <option value="janitor">janitor</option>
          </select>
        </form>
        <div
          id="root2"
          className="text-colorself-400 font-bold text-2xl mb-10"
        ></div>
        <button
          name="submit"
          className="bg-slate-100 border-colorself-300 border-solid border-2 dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-3 text-colorself-200 text-2xl font-bold rounded-lg"
          type="submit"
          onClick={changehandler}
        >
          submit
        </button>

        {show && <Actor list={actor} del={deletehandler} />}
      </div>
    </>
  );
};

export default Login;
