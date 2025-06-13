// ContractorsList.js
import React, { useEffect, useState } from 'react';

function ContractorsList() {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    fetch('/api/contractors/')
      .then(res => res.json())
      .then(data => setContractors(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Список подрядчиков</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Название</th>
            <th>Адрес</th>
            <th>Контактное лицо</th>
          </tr>
        </thead>
        <tbody>
          {contractors.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.address}</td>
              <td>{`${c.contact_person.surname} ${c.contact_person.name} ${c.contact_person.patronymic} (${c.contact_person.phone})`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContractorsList;
