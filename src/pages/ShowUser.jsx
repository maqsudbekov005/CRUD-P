import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser } from '../UseReducer';


function ShowUser(){
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
      dispatch(deleteUser({id: id}))
    }
  return (
    <div className='container mx-auto px-4 mt-6'>
      <h1>User List</h1>
      {/* <Link to="/create" className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded'>create +</Link> */}
      <table className='min-w-full border border-gray-300 divide-y divide-gray-200 mt-7'>
        <thead  className="bg-gray-50">
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Phone</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.id}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.name}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.email}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.phone}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded'>Edit</Link>
                <button onClick={() => handleDelete(user.id)} className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ml-2'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowUser
