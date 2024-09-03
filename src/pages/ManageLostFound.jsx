import { useState } from 'react';

// Sample initial data
const initialLostPeople = [
  {
    id: 'lost1',
    name: 'Amit Sharma',
    lastSeen: '2024-09-01 10:00',
    place: 'Connaught Place, Delhi',
    description: 'Wearing a blue shirt and jeans, approximately 5\'8", last seen near the metro station.',
    contact: '9876543210',
    pictureUrl: 'https://via.placeholder.com/100'
  },
  {
    id: 'lost2',
    name: 'Neha Patel',
    lastSeen: '2024-09-01 11:30',
    place: 'MG Road, Bangalore',
    description: 'Wearing a red dress, approximately 5\'5", last seen near the shopping mall.',
    contact: '9123456789',
    pictureUrl: 'https://via.placeholder.com/100'
  },
  // Add more lost people as needed
];

const initialFoundPeople = [
  {
    id: 'found1',
    name: 'Ravi Kumar',
    foundAt: '2024-09-01 12:00',
    place: 'Sector 15, Gurgaon',
    description: 'Found near the local park, wearing a green jacket and khakis.',
    contact: '9654321098',
    pictureUrl: 'https://via.placeholder.com/100'
  },
  {
    id: 'found2',
    name: 'Sita Singh',
    foundAt: '2024-09-01 13:30',
    place: 'Marine Drive, Mumbai',
    description: 'Found near the beach, wearing a yellow top and shorts.',
    contact: '9876123456',
    pictureUrl: 'https://via.placeholder.com/100'
  },
  // Add more found people as needed
];

const ManageLostFound = () => {
  const [lostPeople, setLostPeople] = useState(initialLostPeople);
  const [foundPeople, setFoundPeople] = useState(initialFoundPeople);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [form, setForm] = useState({
    name: '',
    lastSeen: '',
    place: '',
    description: '',
    contact: '',
    pictureUrl: '',
    foundAt: '' // Only used for found people
  });

  const handleAddClick = () => {
    setForm({
      name: '',
      lastSeen: '',
      place: '',
      description: '',
      contact: '',
      pictureUrl: '',
      foundAt: '' // Only used for found people
    });
    setCurrentPerson(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (person) => {
    setForm({
      name: person.name,
      lastSeen: person.lastSeen,
      place: person.place,
      description: person.description,
      contact: person.contact,
      pictureUrl: person.pictureUrl,
      foundAt: person.foundAt || '' // Only used for found people
    });
    setCurrentPerson(person);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id, type) => {
    if (type === 'lost') {
      setLostPeople(lostPeople.filter(p => p.id !== id));
    } else {
      setFoundPeople(foundPeople.filter(p => p.id !== id));
    }
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
    if (currentPerson) {
      if (currentPerson.foundAt) {
        setFoundPeople(foundPeople.map(p =>
          p.id === currentPerson.id
            ? { ...p, ...form }
            : p
        ));
      } else {
        setLostPeople(lostPeople.map(p =>
          p.id === currentPerson.id
            ? { ...p, ...form }
            : p
        ));
      }
    } else {
      const newPerson = {
        id: Date.now().toString(),
        ...form
      };
      if (form.foundAt) {
        setFoundPeople([...foundPeople, newPerson]);
      } else {
        setLostPeople([...lostPeople, newPerson]);
      }
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Lost and Found</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lost People</h2>
          <button
            onClick={() => handleAddClick()}
            className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg mb-6"
          >
            Add Lost Person
          </button>
          {lostPeople.length > 0 ? (
            <ul className="space-y-4">
              {lostPeople.map(person => (
                <li key={person.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center">
                  <img src={person.pictureUrl} alt={person.name} className="w-24 h-24 object-cover rounded-full mr-4" />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800">{person.name}</h3>
                    <p className="text-gray-600"><strong>Last Seen:</strong> {person.lastSeen}</p>
                    <p className="text-gray-600"><strong>Place:</strong> {person.place}</p>
                    <p className="text-gray-600"><strong>Description:</strong> {person.description}</p>
                    <p className="text-gray-600"><strong>Contact:</strong> {person.contact}</p>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleEditClick(person)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(person.id, 'lost')}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No lost people reported.</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Found People</h2>
          <button
            onClick={() => handleAddClick()}
            className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg mb-6"
          >
            Add Found Person
          </button>
          {foundPeople.length > 0 ? (
            <ul className="space-y-4">
              {foundPeople.map(person => (
                <li key={person.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center">
                  <img src={person.pictureUrl} alt={person.name} className="w-24 h-24 object-cover rounded-full mr-4" />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800">{person.name}</h3>
                    <p className="text-gray-600"><strong>Found At:</strong> {person.foundAt}</p>
                    <p className="text-gray-600"><strong>Place:</strong> {person.place}</p>
                    <p className="text-gray-600"><strong>Description:</strong> {person.description}</p>
                    <p className="text-gray-600"><strong>Contact:</strong> {person.contact}</p>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleEditClick(person)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(person.id, 'found')}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No found people reported.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4">{currentPerson ? 'Edit' : 'Add'} Person</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastSeen" className="block text-gray-700">Last Seen</label>
                  <input
                    id="lastSeen"
                    name="lastSeen"
                    type="datetime-local"
                    value={form.lastSeen}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required={!form.foundAt}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="foundAt" className="block text-gray-700">Found At</label>
                  <input
                    id="foundAt"
                    name="foundAt"
                    type="datetime-local"
                    value={form.foundAt}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required={!!form.foundAt}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="place" className="block text-gray-700">Place</label>
                  <input
                    id="place"
                    name="place"
                    type="text"
                    value={form.place}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="contact" className="block text-gray-700">Contact</label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={form.contact}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pictureUrl" className="block text-gray-700">Picture URL</label>
                  <input
                    id="pictureUrl"
                    name="pictureUrl"
                    type="text"
                    value={form.pictureUrl}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
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
                    Save
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

export default ManageLostFound;
