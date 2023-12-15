function distanceFromHqInBlocks(currentLocation) {
    const hqLocation = 42; // Assuming the HQ is located at 42nd street
    let distance;
  
    // Check if the current location is below 42nd street
    if (currentLocation < hqLocation) {
      distance = hqLocation - currentLocation;
    } else {
      distance = currentLocation - hqLocation;
    }
  
    return distance;
  }
  function distanceFromHqInFeet(currentLocation) {
    const hqLocation = 42; // Assuming the HQ is located at 42nd street
    const feetPerBlock = 264; // Assuming an average block length of 264 feet
  
    let distance;
  
    // Check if the current location is below 42nd street
    if (currentLocation < hqLocation) {
      distance = (hqLocation - currentLocation) * feetPerBlock;
    } else {
      distance = (currentLocation - hqLocation) * feetPerBlock;
    }
  
    return distance;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Assuming an average block length of 264 feet
  
    let distance;
  
    // Calculate the absolute difference between start and destination
    const difference = Math.abs(start - destination);
  
    // Calculate the distance traveled in feet by multiplying the difference by the feet per block
    distance = difference * feetPerBlock;
  
    return distance;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Assuming an average block length of 264 feet
    const freeSampleDistance = 400; // The first 400 feet are free
    const centsPerFoot = 0.02; // 2 cents per foot
    const maxDistanceWithoutExtraCharge = 2000; // Maximum distance without extra charge
    const extraCharge = 2500; // Distance over 2500 feet is not allowed
  
    // Calculate the distance traveled in feet
    const distance = Math.abs(start - destination) * feetPerBlock;
  
    // Check if the distance traveled is within the allowed limits
    if (distance <= extraCharge) {
      if (distance <= freeSampleDistance) {
        return 0; // Free sample
      } else if (distance <= maxDistanceWithoutExtraCharge) {
        return (distance - freeSampleDistance) * centsPerFoot; // Charge 2 cents per foot
      } else {
        return 25; // Charge $25 for distance over 2000 feet
      }
    } else {
      return "cannot travel that far"; // Distance over 2500 feet is not allowed
    }
  }
