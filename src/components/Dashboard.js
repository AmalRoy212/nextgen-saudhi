import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://utrechtitconsulting.com/api/getData.php', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (Array.isArray(response.data)) {
          setRegistrations(response.data);
        } else {
          console.error('Expected an array of registrations, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching registration data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Registrations</h1>
      {registrations.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300">First Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Last Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Company</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Designation</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Email</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Contact Number</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Telephone</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Technologies</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Event</th>
              {/* <th className="py-2 px-4 border-b-2 border-gray-300">Consent</th> */}
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {registrations.map((registration, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{registration.first_name}</td>
                <td className="py-2 px-4 border-b">{registration.last_name}</td>
                <td className="py-2 px-4 border-b">{registration.company_name}</td>
                <td className="py-2 px-4 border-b">{registration.designation}</td>
                <td className="py-2 px-4 border-b">{registration.email}</td>
                <td className="py-2 px-4 border-b">{registration.contact_number}</td>
                <td className="py-2 px-4 border-b">{registration.telephone}</td>
                <td className="py-2 px-4 border-b">{registration.technologies}</td>
                <td className="py-2 px-4 border-b">{registration.event}</td>
                {/* <td className="py-2 px-4 border-b">{registration.consent ? 'Yes' : 'No'}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No registrations found.</p>
      )}
    </div>
  );
};

export default Dashboard;
