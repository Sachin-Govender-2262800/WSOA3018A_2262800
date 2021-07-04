

  function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = 'Well Well Well.. Hello there';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      
    }
  
    function error() {
      status.textContent = ':) could not find your loctaion';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Lucky :3 Your browser does not support it.';
    } else {
      status.textContent = 'Tracking';
      navigator.geolocation.getCurrentPosition(success, error);
     
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);