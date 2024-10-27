import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../UseReducer";
import { useNavigate } from "react-router-dom";

function SubmitUserForm() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email, phone}))
    navigate('/showuser')
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Submit User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setName(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitUserForm;
