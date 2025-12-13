const states = [
      { name: "Maharashtra", key: "maharashtra", coords: [19.0760,72.8777] }, // Mumbai
      { name: "Karnataka",   key: "karnataka",   coords: [12.9716,77.5946] }, // Bangalore
      { name: "Tamil Nadu",  key: "tamilnadu",   coords: [13.0827,80.2707] }, // Chennai
      { name: "Kerala",      key: "kerala",      coords: [8.5241,76.9366] },  // Thiruvananthapuram
      { name: "Gujarat",     key: "gujarat",     coords: [23.2156,72.6369] }, // Gandhinagar
      { name: "Rajasthan",   key: "rajasthan",   coords: [26.9124,75.7873] }, // Jaipur
      { name: "Uttar Pradesh", key: "up",        coords: [26.8467,80.9462] }, // Lucknow
      { name: "Bihar",       key: "bihar",       coords: [25.5941,85.1376] }, // Patna
      { name: "West Bengal", key: "westbengal",  coords: [22.5726,88.3639] }, // Kolkata
      { name: "Andhra Pradesh", key: "andhra",   coords: [16.5062,80.6480] }, // Amaravati (approx)
      { name: "Telangana",   key: "telangana",   coords: [17.3850,78.4867] }, // Hyderabad
      { name: "Madhya Pradesh", key: "madhya",   coords: [23.2599,77.4126] }, // Bhopal
      { name: "Haryana",     key: "haryana",     coords: [30.7333,76.7794] }, // Chandigarh (shared)
      { name: "Punjab",      key: "punjab",      coords: [31.5204,74.3587] }, // Ludhiana-ish/Amritsar region
      { name: "Odisha",      key: "odisha",      coords: [20.2961,85.8245] }, // Bhubaneswar
      { name: "Assam",       key: "assam",       coords: [26.1445,91.7362] }, // Guwahati
      { name: "Jharkhand",   key: "jharkhand",   coords: [23.3441,85.3096] }, // Ranchi
      { name: "Chhattisgarh", key: "chhattisgarh", coords: [21.2514,81.6296] }, // Raipur
      { name: "Goa",         key: "goa",         coords: [15.4909,73.8278] }, // Panaji/Mapusa
      { name: "Himachal Pradesh", key: "himachal", coords: [31.1048,77.1734] }, // Shimla
      { name: "Jammu & Kashmir", key: "jk",       coords: [34.0837,74.7973] }  // Srinagar
    ];

    // init map (center on India)
    const map = L.map('map').setView([22.0, 80.0], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // fill datalist
    const datalist = document.getElementById('statesList');
    states.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.name;
      datalist.appendChild(opt);
    });

    // marker variable
    let currentMarker = null;

    // helper: build flag element HTML (CSS-based)
    function makeFlagHtml(key, name, small=false){
      const extraClass = small ? 'flag-small' : '';
      return `<div class="flag ${key} ${extraClass}">${escapeHtml(name)}</div>`;
    }

    // simple escape
    function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

    // show in side panel
    const selFlagContainer = document.getElementById('selectedFlagContainer');

    function showStateOnMap(state){
      if(!state) return;
      const [lat,lng] = state.coords;
      map.setView([lat,lng], 7, {animate:true});
      if(currentMarker) map.removeLayer(currentMarker);
      currentMarker = L.marker([lat,lng]).addTo(map);

      // popup with small flag
      currentMarker.bindPopup(makeFlagHtml(state.key, state.name, true)).openPopup();

      // show larger flag in side panel
      selFlagContainer.innerHTML = makeFlagHtml(state.key, state.name, false);
    }

    // search button handler
    document.getElementById('searchBtn').addEventListener('click', () => {
      const val = document.getElementById('stateInput').value.trim().toLowerCase();
      if(!val) return;
      const found = states.find(s => s.name.toLowerCase() === val);
      if(found){
        showStateOnMap(found);
      } else {
        // try fuzzy/startsWith
        const starts = states.find(s => s.name.toLowerCase().startsWith(val));
        if(starts) {
          showStateOnMap(starts);
        } else {
          alert('State not found in list. Try one of the suggestions.');
        }
      }
    });

    // allow enter key in input
    document.getElementById('stateInput').addEventListener('keyup', (e) => {
      if(e.key === 'Enter') document.getElementById('searchBtn').click();
    });

    // optional: clicking markers could open popup (already bound)
    // Preload first sample (optional)
    // showStateOnMap(states[0]);
  </script>
</body>
</html>