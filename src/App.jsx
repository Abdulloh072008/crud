import React, { useState } from 'react'

const App = () => {

  let [data, setData] = useState([
    {
      id: 1,
      name: "Orzu",
      age: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s",
      status: true
    },
    {
      id: 2,
      name: "Omar",
      age: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s",
      status: false
    },
  ])

  let [nameEdit, setnameEdit] = useState("")
  let [ageEdit, setageEdit] = useState("")
  let [imgEdit, setimgEdit] = useState("")
  let [idx, setidx] = useState(null)
  let [statueEdit, setstatusEdit] = useState(null)

  let [search, setsearch] = useState("")
  let [select ,setselect] = useState("")

  let showEdit = ((user) => {
    setnameEdit(user.name)
    setageEdit(user.age)
    setimgEdit(user.img)
    setidx(user.id)
    setstatusEdit(user.status)
  })


  let handleSubmit = ((event) => {
    event.preventDefault()
    let obj = {
      id: data.length + 1,
      img: event.target["avatar"].value,
      name: event.target["name"].value,
      age: event.target["age"].value,
      status: event.target["status"].value == "active",
    }
    setData([...data, obj])
  })

  let handleSubmit1 = ((event) => {
    event.preventDefault()
    let obj = {
      name: nameEdit,
      age: ageEdit,
      img: imgEdit,
      id: idx,
      status: statueEdit == "active",
    }
    setData(data.map((user) => user.id == idx ? obj : user))
  })

  let deleteusers = ((id) => {
    let deleteuser = data.filter((user) => user.id != id)
    setData(deleteuser)
  })

  let checkbox = (id) => {
    let change = data.map((user) => {
      if (user.id == id) {
        return {
          ...user,
          status: !user.status
        }
      }
      return user
    })
    setData(change)
  }







  return (
    <>
      <div className='p-10'>

        <div>
          <form onSubmit={handleSubmit} action="">
            <input name='avatar' className='border p-2 rounded-2xl ' type="text" placeholder='Avatar' />
            <input name='name' className='border p-2 rounded-2xl ' type="text" placeholder='Name' />
            <input name='age' className='border p-2 rounded-2xl ' type="text" placeholder='Age' />
            <select className='border p-2 rounded-2xl ' name="status" id="">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className='bg-[blue] py-2 px-5 border rounded-2xl text-white' type='submit'>Add</button>
          </form>
        </div>

        <div>
          <form onSubmit={handleSubmit1} action="">
            <input value={imgEdit} onChange={(user) => setimgEdit(user.target.value)} name='avatar' className='border p-2 rounded-2xl ' type="text" placeholder='Avatar' />
            <input value={nameEdit} onChange={(user) => setnameEdit(user.target.value)} name='name' className='border p-2 rounded-2xl ' type="text" placeholder='Name' />
            <input value={ageEdit} onChange={(user) => setageEdit(user.target.value)} name='age' className='border p-2 rounded-2xl ' type="text" placeholder='Age' />
            <select value={statueEdit} onChange={(user) => setstatusEdit(user.target.value)} className='border p-2 rounded-2xl ' name="status" id="">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className='bg-[blue] py-2 px-5 border rounded-2xl text-white' type='submit'>Edit</button>
          </form>
        </div>

        <div>
          <input value={search} onChange={(user) => setsearch(user.target.value)} name='' className='border p-2 rounded-2xl ' type="search" placeholder='Name...' />
          <select value={select} onChange={(user) => setselect(user.target.value)} className='border p-2 rounded-2xl ' name="" id="">
            <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
        </div>

      </div>

      <table className='w-[50%] m-auto'>
        <thead>
          <tr>
            <th className='border p-2 text-start w-10'>No</th>
            <th className='border p-2 text-start'>User</th>
            <th className='border p-2 text-start'>Age</th>
            <th className='border p-2 text-start w-30'>Status</th>
            <th className='border p-2 text-start w-60'>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            data
            .filter((user)=> user.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
            .filter((user)=> user.status.toString().includes(select))
            .map((user) => {
              return <tr key={user.id}>
                <td className='border p-2'>{user.id}</td>
                <td className='border p-2'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-8' src={user.img} alt="" />
                    {user.name}
                  </div>
                </td>
                <td className='border p-2'>{user.age}</td>
                <td className='border p-2'>{user.status ? "Active" : "Inactive"}</td>
                <td className='border p-2'>
                  <div className='flex gap-2'>
                    <button onClick={() => deleteusers(user.id)} className='bg-[red] py-1 px-7 rounded-2xl text-white'>Delete</button>
                    <button onClick={() => showEdit(user)} className='bg-[blue] py-1 px-5 rounded-2xl text-white'>Edit</button>
                    <input onClick={() => checkbox(user.id)} type="checkbox" checked={user.status} />
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
