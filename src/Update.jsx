import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UseReducer';

function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email, phone} = existingUser[0];
    const [uname,setName] = useState(name);
    const [uemail,setEmail] = useState(email);
    const [uphone,setPhone] = useState(phone);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail,
            phone: uphone
        }))
        navigate('/showuser')
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-80">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Submit User</h2>

      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={uname} onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={uemail} onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={uphone} onChange={e => setPhone(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  </div>
  )
}

export default Update
