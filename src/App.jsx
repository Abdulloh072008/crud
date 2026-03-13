import React, { useState } from 'react'

const App = () => {

  let [data, setData] = useState([
    {
      id: 1,
      name: "Abdulloh",
      age: 21,
      status: true,
      email: "abdu@gmail.com",
      city: "Dushanbe"
    },
    {
      id: 2,
      name: "Orzu",
      age: 24,
      status: false,
      email: "orzu@gmail.com",
      city: "Dushanbe"
    },
  ])

  let [nameEdit, setNameEdit] = useState("")
  let [ageEdit, setAgeEdit] = useState("")
  let [emailEdit, setEmailEdit] = useState("")
  let [cityEdit, setCityEdit] = useState("")
  let [idx, setidx] = useState(null)
  let [statusEdit, setStatusEdit] = useState(null)

  let [search, setsearch] = useState("")
  let [selete, setselete] = useState("")

  let showEdit = ((user) => {
    setNameEdit(user.name)
    setAgeEdit(user.age)
    setEmailEdit(user.email)
    setCityEdit(user.city)
    setidx(user.id)
    setStatusEdit(user.status)
  })


  let handleSubmit = ((event) => {
    event.preventDefault()
    let obj = {
      name: event.target["name"].value,
      age: event.target["age"].value,
      email: event.target["email"].value,
      city: event.target["city"].value,
      status: event.target["status"].value == "active",
    }
    setData([...data, obj])
  })

  let handleSubmit1 = ((event) => {
    event.preventDefault()
    let obj = {
      name:nameEdit,
      age:ageEdit,
      email:emailEdit,
      city:cityEdit,
      id:idx,
      status:statusEdit == "active"
    }
    setData(data.map((user)=> user.id == idx ? obj : user))
  })

  let deleteuser = ((id) => {
    let newData = data.filter((user) => user.id != id)
    setData(newData)
  })

  let changeStatus=(id)=>{
    let change = data.map((user)=>{
      if(user.id == id){
        return{
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
      <section className='max-w-300 m-auto'>

        <div className='flex gap-30 items-end'>
          <div className='mt-20'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col w-[130%] gap-2'>
              <input name='name' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Name' />
              <input name='age' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Age' />
              <input name='email' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Email' />
              <input name='city' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='City' />
              <select className='border rounded-2xl p-2' name="status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className='bg-[blue] p-2 rounded-2xl text-white' type='submit'>Add</button>
            </form>
          </div>

          <div className='mt-20'>
            <form onSubmit={handleSubmit1} action="" className='flex flex-col w-[130%] gap-2'>
              <input value={nameEdit} onChange={(user) => setNameEdit(user.target.value)} name='name' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Name' />
              <input value={ageEdit} onChange={(user) => setAgeEdit(user.target.value)} name='age' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Age' />
              <input value={emailEdit} onChange={(user) => setEmailEdit(user.target.value)}t name='email' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='Email' />
              <input value={cityEdit} onChange={(user) => setCityEdit(user.target.value)} name='city' className='border rounded-2xl p-2 text-[20px]' type="text" placeholder='City' />
              <select value={statusEdit} onChange={(user) => setStatusEdit(user.target.value)} className='border rounded-2xl p-2' name="status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className='bg-[blue] p-2 rounded-2xl text-white' type='submit'>Edit</button>
            </form>
          </div>

          <div>
            <input value={search} onChange={(user) => setsearch(user.target.value)} className='border p-2 rounded-2xl ' type="search" placeholder='Name...'/>
            <select value={selete} onChange={(user) => setselete(user.target.value)} className='border p-2 rounded-2xl ml-3' name="" id="">
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>

        <table className='w-full mt-10'>
          <thead>
            <tr>
              <th className='border p-2 text-start'>Nmae</th>
              <th className='border p-2 text-start'>Age</th>
              <th className='border p-2 text-start'>Email</th>
              <th className='border p-2 text-start'>City</th>
              <th className='border p-2 text-start w-30'>Status</th>
              <th className='border p-2 text-start'>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data
              .filter((user)=> user.status.toString().includes(selete))
              .filter((user) => user.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
              .map((user) => {
                return <tr key={user.id}>
                  <td className='border p-2 '>{user.name}</td>
                  <td className='border p-2 '>{user.age}</td>
                  <td className='border p-2 '>{user.email}</td>
                  <td className='border p-2 '>{user.city}</td>
                  <td className={`${user.status ? "text-[green]" : "text-[red]"} border border-[black] p-2 `}>{user.status ? "Active" : "Inctive"}</td>
                  <td className='border p-2 w-70'>
                    <div className='flex gap-2'>
                      <button onClick={() => deleteuser(user.id)} className='bg-[red] text-white px-7 py-1 rounded-2xl'>Delete</button>
                      <button onClick={() => showEdit(user)} className='bg-[blue] py-1 px-5 text-white rounded-2xl'>Edit</button>
                      <input onClick={() => changeStatus(user.id)} type="checkbox" checked={user.status} />
                    </div>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </section>
    </>
  )
}

export default App
