import React, { useState } from 'react'

const App = () => {

  let [data, setData] = useState([
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
      name: "Nike Air Force 1",
      price: "$170",
      about: "Classic basketball sneaker with durable leather and timeless style.",
      status: true,
    },
    {
      id: 2,
      img: "data:image/jpeg;base64,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",
      name: "Nike Air Force 10",
      price: "$130",
      about: "Classic basketball sneaker with durable leather and timeless style.",
      status: false,
    },
  ])

  let [nameEdit, setnameEdit] = useState("")
  let [imgEdit, setimgEdit] = useState("")
  let [priceEdit, setpriecEdit] = useState("")
  let [aboutEdit, setaboutEdit] = useState("")
  let [idx, setidx] = useState(null)
  let [statusEdit, setstatusEdit] = useState(null)

  let [search, setsearch] = useState("")
  let [select, setselect] = useState("")

  let Editcard = ((user) => {
    setnameEdit(user.name)
    setimgEdit(user.img)
    setpriecEdit(user.price)
    setaboutEdit(user.about)
    setidx(user.id)
    setstatusEdit(user.status)
  })




  let hanleSubmit = ((event) => {
    event.preventDefault()
    let obj = {
      id:new Date(),
      img: event.target["img"].value,
      name: event.target["name"].value,
      price: event.target["price"].value,
      about: event.target["about"].value,
      status: event.target["status"].value == "insale",
    }
    setData([...data, obj])
  })

  let hanleSubmitEdit = ((event) => {
    event.preventDefault()
    let obj = {
      name:nameEdit,
      img:imgEdit,
      price:priceEdit,
      about:aboutEdit,
      status:statusEdit == "insale"
    }
    setData(data.map((user)=> user.id == idx?obj:user))
  })

  let deleteuser=((id)=>{
    let change = data.filter((user)=>user.id != id)
    setData(change)
  })

  let changestatus=(id)=>{
    let change = data.map((user)=>{
      if(user.id == id){
        return {
          ...user,
          status:!user.status
        }
      }
      return user
  })
  setData(change)
  }



  return (
    <>
      <div>

        <div className='flex gap-5 items-end'>
          <form onSubmit={hanleSubmit} action="" className='flex flex-col gap-2 w-[25%] ml-40 mt-10'>
            <input name='img' className='border p-2 rounded-2xl ' type="text" placeholder='Image' />
            <input name='name' className='border p-2 rounded-2xl ' type="text" placeholder='Name' />
            <input name='price' className='border p-2 rounded-2xl ' type="text" placeholder='Price' />
            <input name='about' className='border p-2 rounded-2xl ' type="text" placeholder='About' />
            <select className='border p-2 rounded-2xl ' name="status" id="">
              <option value="insale">Instock</option>
              <option value="outofsale">Out of stock</option>
            </select>
            <button type='submit' className='bg-[blue] py-2 px-5 rounded-2xl text-white'>Add</button>
          </form>

          <form onSubmit={hanleSubmitEdit} action="" className='flex flex-col gap-2 w-[25%] mt-10'>
            <input value={imgEdit} onChange={(user) => setimgEdit(user.target.value)} name='img' className='border p-2 rounded-2xl ' type="text" placeholder='Image' />
            <input value={nameEdit} onChange={(user) => setnameEdit(user.target.value)} name='name' className='border p-2 rounded-2xl ' type="text" placeholder='Name' />
            <input value={priceEdit} onChange={(user) => setpriecEdit(user.target.value)} name='price' className='border p-2 rounded-2xl ' type="text" placeholder='Price' />
            <input value={aboutEdit} onChange={(user) => setaboutEdit(user.target.value)} name='about' className='border p-2 rounded-2xl ' type="text" placeholder='About' />
            <select value={statusEdit} onChange={(user) => setstatusEdit(user.target.value)} className='border p-2 rounded-2xl ' name="status" id="">
              <option value="insale">Instock</option>
              <option value="outofsale">Out of stock</option>
            </select>
            <button type='submit' className='bg-[blue] py-2 px-5 rounded-2xl text-white'>Edit</button>
          </form>

          <div>
            <input value={search} onChange={(user) => setsearch(user.target.value)} name='img' className='border p-2 rounded-2xl ' type="text" placeholder='Image' />
            <select value={select} onChange={(user) => setselect(user.target.value)} className='border p-2 rounded-2xl ' name="status" id="">
              <option value="true">Instock</option>
              <option value="false">Out of stock</option>
            </select>
          </div>
        </div>

        <div className='flex gap-5 ml-40 mt-10'>
          {
            data
            .filter((user)=>user.status.toString().includes(select))
            .filter((user)=> user.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
            .map((user) => {
              return <div className='shadow-[0px_0px_7px_gray] w-80 rounded-2xl p-5'>
                <div>
                  <img className='block m-auto rounded-2xl h-50' src={user.img} alt="" />
                </div>
                <div className='py-5'>
                  <div className='flex justify-between items-center py-2'>
                    <h3>{user.name}</h3>
                    <p className={`${user.status ? "bg-[green] w-fit rounded-2xl text-white py-1 px-3" : "bg-[red] w-fit rounded-2xl text-white py-1 px-3"}`}>{user.status ? "Instock" : "Out Of stock"}</p>
                  </div>
                  <p className='w-70'>{user.about}</p>
                  <p>Price: {user.price}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <button onClick={() =>deleteuser(user.id)} className='bg-[red] text-white py-1 px-7 rounded-2xl ' >Delete</button>
                  <button onClick={() => Editcard(user)} className='bg-[blue] text-white py-1 px-5 rounded-2xl ' >Edit</button>
                  <input onClick={() => changestatus(user.id)} type="checkbox" checked={user.status} />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
