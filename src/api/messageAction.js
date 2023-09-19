import axios from "axios";

export const messageSend = async (data) => {
  console.log(data);

  try {
    const response = await axios.post(
      "http://localhost:5000/send-message",
      data
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
