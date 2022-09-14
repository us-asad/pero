const api_uri = process.env.REACT_APP_API_URI;

export const getImgUrl = imgName => {
  if (imgName?.includes("/files/"))
    return api_uri + imgName;

  return api_uri + "/files/" + imgName;
}

export const request = async (endpoint = '', cb = Function.prototype, errCb = Function.prototype) => {
  try {
    const res = await fetch(api_uri + "/api" + endpoint)
    const data = await res.json();
    if (data === undefined || data === null || data.length === 0)
      return errCb("Data not found")
    
    cb(data);
  } catch (err) {
    errCb(err);
  }
}
