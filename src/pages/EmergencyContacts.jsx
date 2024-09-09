import { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import DeleteIcon from '@mui/icons-material/Delete';


const EmergencyContacts = () => {
  // Sample data for emergency contacts
  const initialContacts = [
    { id: 1, name: 'Police', phone: '100' },
    { id: 2, name: 'Fire Department', phone: '101' },
    { id: 3, name: 'Ambulance', phone: '102' },
    { id: 4, name: 'Disaster Management', phone: '108' },
    { id: 5, name: 'Women Helpline', phone: '1091' },
    { id: 6, name: 'Child Helpline', phone: '1098' },
    { id: 7, name: 'Old Age Helpline', phone: '1291' },
    { id: 8, name: 'Poison Control', phone: '1800-222-1222' },
    { id: 9, name: 'National Emergency Number', phone: '112' },
    { id: 10, name: 'Flood Control', phone: '1800-11-7267' },
    { id: 11, name: 'Earthquake Relief', phone: '1800-123-4567' },
    { id: 12, name: 'Gas Leak Emergency', phone: '1906' },
    { id: 13, name: 'Road Accident Emergency', phone: '1033' },
    { id: 14, name: 'COVID-19 Helpline', phone: '1075' },
    { id: 15, name: 'Electricity Emergency', phone: '1912' },
    { id: 16, name: 'Railway Helpline', phone: '139' },
    { id: 17, name: 'Anti-Trafficking Helpline', phone: '181' },
    { id: 18, name: 'Cyber Crime Helpline', phone: '1930' },
    { id: 19, name: 'Blood Bank', phone: '104' },
    { id: 20, name: 'Mental Health Helpline', phone: '1800-599-0019' },
    { id: 21, name: 'National Disaster Response Force (NDRF)', phone: '9711077372' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });
  const [editingContact, setEditingContact] = useState(null);

  // Handle contact addition
  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([{ id: Date.now(), ...newContact }, ...contacts]);
      setNewContact({ name: '', phone: '' });
    }
  };
  

  // Handle contact edit
  const handleEditContact = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, ...editingContact } : contact
    );
    setContacts(updatedContacts);
    setEditingContact(null);
  };

  // Handle contact delete
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Add New Contact</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            placeholder="Contact Name"
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            placeholder="Phone Number"
            className="p-2 border rounded-lg"
          />
          <button
            onClick={handleAddContact}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Add Contact
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center my-10">Emergency Contacts</h1>
      
      {/* List of contacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">{contact.name}</h2>
                <p className="mt-1 text-gray-500">Contact: {contact.phone}</p>
              </div>
              <PhoneIcon className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => setEditingContact(contact)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteContact(contact.id)}
              >
                <DeleteIcon className=' text-red-500 hover:text-red-600' fontSize="large" />
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Edit contact form */}
      {editingContact && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Contact</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                value={editingContact.name}
                onChange={(e) => setEditingContact({ ...editingContact, name: e.target.value })}
                className="p-2 border rounded-lg"
              />
              <input
                type="text"
                value={editingContact.phone}
                onChange={(e) => setEditingContact({ ...editingContact, phone: e.target.value })}
                className="p-2 border rounded-lg"
              />
              <button
                onClick={() => handleEditContact(editingContact.id)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingContact(null)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyContacts;
