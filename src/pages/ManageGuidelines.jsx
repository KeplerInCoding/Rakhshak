// import React, { useState } from 'react';
import { useState } from "react";

const initialGuidelines = [
    {
      id: 1,
      title: 'Emergency Evacuation Plan',
      description: 'Follow the marked evacuation routes and assemble at designated safety zones.',
    },
    {
      id: 2,
      title: 'Fire Safety Procedures',
      description: 'Ensure all fire exits are clear and perform regular fire drills.',
    },
    {
      id: 3,
      title: 'First Aid Basics',
      description: 'Keep a first aid kit readily available and be trained in basic first aid.',
    },
    // Add more initial guidelines as needed
  ];
  
  const ManageGuidelines = () => {
    const [guidelines, setGuidelines] = useState(initialGuidelines);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentGuideline, setCurrentGuideline] = useState(null);
  
    const [form, setForm] = useState({
      title: '',
      description: '',
    });
  
    const handleAddClick = () => {
      setForm({ title: '', description: '' });
      setCurrentGuideline(null);
      setIsModalOpen(true);
    };
  
    const handleEditClick = (guideline) => {
      setForm({
        title: guideline.title,
        description: guideline.description,
      });
      setCurrentGuideline(guideline);
      setIsModalOpen(true);
    };
  
    const handleDeleteClick = (id) => {
      setGuidelines(guidelines.filter(g => g.id !== id));
    };
  
    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setForm(prevForm => ({
        ...prevForm,
        [name]: value,
      }));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (currentGuideline) {
        setGuidelines(guidelines.map(g => 
          g.id === currentGuideline.id
            ? { ...g, title: form.title, description: form.description }
            : g
        ));
      } else {
        setGuidelines([
          ...guidelines,
          { id: Date.now(), title: form.title, description: form.description }
        ]);
      }
      setIsModalOpen(false);
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Guidelines</h1>
  
          <button
            onClick={handleAddClick}
            className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg mb-6"
          >
            Add New Guideline
          </button>
  
          <div>
            {guidelines.length > 0 ? (
              <ul className="space-y-4">
                {guidelines.map(guideline => (
                  <li key={guideline.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800">{guideline.title}</h3>
                      <p className="text-gray-600">{guideline.description}</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEditClick(guideline)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(guideline.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No guidelines available.</p>
            )}
          </div>
  
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">{currentGuideline ? 'Edit Guideline' : 'Add Guideline'}</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={form.title}
                      onChange={handleFormChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleFormChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      {currentGuideline ? 'Save Changes' : 'Add Guideline'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ManageGuidelines;
  