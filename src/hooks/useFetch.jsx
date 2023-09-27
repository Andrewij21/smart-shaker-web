const useFetch = async (url, payload) => {
  let res;
  res = typeof payload != "boolean" ? payload : payload ? "on" : "off";
  console.log({ payload: typeof payload, res, url });
  return await fetch(`http://localhost:3001${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ msg: res }),
  })
    .then(() => {
      console.log(url != "/" ? `alat ${res}` : `kecepatan ${res}`);
    })
    .catch((e) => {
      console.log("gagal", e);
    });
};

export default useFetch;
