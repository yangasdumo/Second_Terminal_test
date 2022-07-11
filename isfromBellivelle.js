function isFromBellville (registration) {
      if(registration ==="") {
        return "invalid registration"
      }
      return registration.startsWith('CY')
  }
  


export default isFromBellville