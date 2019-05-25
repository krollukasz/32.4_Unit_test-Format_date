const formatDate = (timeInSeconds) => {

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  // ::: SECONDS :::
  if (timeInSeconds >= 1 && timeInSeconds <= 59) {
    return `${seconds}s`;
  }
  if (timeInSeconds == 0 || timeInSeconds == null) {
    return '0s';
  }


  // ::: MINUTES :::
  if (timeInSeconds >= 60 && timeInSeconds <= 3599 && seconds >= 1) {
    return `${minutes}m ${seconds}s`;
  }
  if (timeInSeconds >= 60 && timeInSeconds <= 3599 && seconds < 1) {
    return `${minutes}m`;
  }
  

  // ::: HOURS :::
  if (timeInSeconds >= 3600 && seconds == 0 && minutes == 0) {
    return `${hours}h`
  }
  if (timeInSeconds >= 3600 && minutes < 1) {
    return `${hours}h ${seconds}s`;
  }
  if (timeInSeconds >= 3600 && seconds == 0) {
    return `${hours}h ${minutes}m`;
  }
  if (timeInSeconds >= 3600 && minutes > 1) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }
}

module.exports = formatDate;
