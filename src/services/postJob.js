import axios from "axios";

export const postJob = async (jobformData) => {
  console.log("This is from API function", jobformData);

  try {
    
      await axios.post("http://localhost:5000/api/postjob", jobformData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    console.error("Error posting job:", e);
  }
};
