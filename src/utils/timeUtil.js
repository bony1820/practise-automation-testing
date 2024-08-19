import moment from "moment";

export function validCurrentTimeIsAfterSpecifyTime(specifyTime) {
  // Chuyển đổi chuỗi thời gian chỉ định thành đối tượng Moment
  const specifiedMoment = moment(specifyTime, "YYYY-MM-DD HH:mm:ss");

  // Lấy thời gian hiện tại
  const currentTime = moment();

  // So sánh thời gian hiện tại với thời gian chỉ định
  const isAfter = currentTime.isAfter(specifiedMoment);

  return isAfter;
}

// Sử dụng hàm
const specifyTime = "2024-08-19 17:05:00"; // Thời gian chỉ định (VD: 14:30:00)
const result = validCurrentTimeIsAfterSpecifyTime(specifyTime);

console.log(`Thời gian hiện tại có sau ${specifyTime} không? ${result}`);
