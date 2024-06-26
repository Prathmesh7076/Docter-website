function searchDoctors() {
    const searchQuery = document.getElementById('search-box').value;
    const resultsSection = document.getElementById('results-section');


    const doctors = [
        { name: 'Dr. Affan patil', specialty: 'Leg', location: 'Karad' },
        { name: 'Dr. Arati Shukla', specialty: 'Nose', location: 'Satara'},
        { name: 'Dr. Ajay Mehta', specialty: 'Neurologist', location: 'baramati' },
        { name: 'Dr. Dev Kumar', specialty: 'Pediatrician', location: 'Pune' }
    ];

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    resultsSection.innerHTML = '';

    if (filteredDoctors.length > 0) {
        filteredDoctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            doctorCard.innerHTML = `
                <h3>${doctor.name}</h3>
                <p><strong>Specialty:</strong> ${doctor.specialty}</p>
                <p><strong>Location:</strong> ${doctor.location}</p>
            `;
            resultsSection.appendChild(doctorCard);
        });
    } else {
        resultsSection.innerHTML = '<p>No doctors found.</p>';
    }
}