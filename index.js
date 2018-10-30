function produceDrivingRange(maxRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let blockRange = Math.abs(start - end);
    let diff = maxRange - blockRange;

    if (diff > 0) {
      return `within range by ${diff}`;
    } else {
      return `${Math.abs(diff)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  }
}


function createDriver() {
  let driverID = 0;
  
  return class Driver {
    constructor(name, driverID) {
      this.name = name;
      this.id = ++driverID;
    }
  }
}
