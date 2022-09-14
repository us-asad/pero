import Swal from "sweetalert2";

export const sendMessageToTG = async (message, useSweetalert) => {
  const res = await fetch(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_CHANNEL_ID}&text=${message}`)
  const data = await res.json();

  if (useSweetalert) {
    if (data.ok) {
      Swal.fire(
        "Success",
        "message sent successfully",
        "success"
      );
    } else {
      Swal.fire(
        "Fail",
        "message hasn;t dasds",
        "error"
      );
    }
  }

  return data?.ok;
}