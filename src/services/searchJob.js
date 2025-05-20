import axios from "axios";

export const searchJob = async (searchParams) => {
  console.log(searchParams)
  try {
    const res = await axios.get(`https://cyber-mind-server-2.onrender.com/api/postjob/api/search`, {
      params: searchParams,
    });
    console.log(res)
    return res; // jobs data
  } catch (e) {
    console.log(e, "Error searching jobs");
    throw e;
  }
};
