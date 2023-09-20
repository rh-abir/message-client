import axios from "axios";

export const messageSend = async (data) => {
//   console.log(data);

  try {
    const response = await axios.post(
      "http://localhost:5000/send-message",
      data
    );
    return response?.data?.messageData;
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (email) => {
//   console.log(email);
  const { fdEmail, myEmail } = email;
  
  try {
    const response = await axios.get(
      `http://localhost:5000/get-message/${fdEmail}/${myEmail}`, 
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
