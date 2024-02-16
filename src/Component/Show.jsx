import React from 'react'

const Show = ({data , children , del}) => {
  return <>

{/* <tr key={data.id}>
 <td>{data.name}</td>
 <td>{data.lastname}</td>
 <td>{data.email}</td>
 <td>{data.sexual}</td>
 <td>{data.phone}</td>
 <td>{data.role}</td>
  </tr> */}
  {children}
  <li key={data.id} className="flex flex-row max-xl:items-center max-xl:flex-col  max-xl:space-y-2 items-center border-collapse   text-white dark:text-white  mb-4">
<div className="w-[100pt] max-xl:w-[250pt]  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl font-bold rounded-lg border-2 dark:text-white border-slate-400">{data.co}</div>
<div className="w-[100pt] max-xl:w-[250pt] border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl  dark:text-blackfont-bold rounded-lg dark:text-white font-bold">{data.name}</div>
<div className="w-[100pt] max-xl:w-[250pt] border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl dark:text-white font-bold rounded-lg ">{data.lastname}</div>
<div className="w-[260pt] max-xl:w-[250pt]  border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black dark:text-white text-xl font-bold rounded-lg">{data.email}</div>
<div className="w-[150pt] max-xl:w-[250pt]  dark:text-white border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl font-bold rounded-lg">{data.phone}</div>
<div className="w-[99pt] max-xl:w-[250pt]  dark:text-white border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl font-bold rounded-lg">{data.sexual}</div>
<div className="w-[120pt] text-center  max-xl:w-[250pt]  dark:text-white border-2 border-slate-400  bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-black text-xl font-bold rounded-lg">{data.role}</div>
<div className="w-[108pt] max-xl:w-[250pt]  border-2 border-slate-400 bg-slate-100  dark:shadow-none shadow-xl shadow-slate-500 dark:bg-colorself-300 p-2 text-colorself-200 text-xl font-bold rounded-lg "><button 
onClick={(()=>{del(data.id)})}>delete</button></div>
</li>
  </>
  
}

export default Show