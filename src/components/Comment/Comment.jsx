import React from "react";
import Rating from "@components/Rating/Rating";
import { AiOutlineUser } from "react-icons/ai";
import moment from "moment";

function Comment({ comment }) {
  const { user, rating, date, text } = comment || {};

  return (
    <div className="px-4 py-4 border-[2px] rounded-lg">
      <div className="flex justify-between pt-1">
        <Rating />
        <div>{moment(date).format('YYYY-MM-DD')}</div>
      </div>
      <div className="flex items-center gap-4 pt-2">
        <div className="w-10 h-10 border-[2px] rounded-full flex justify-center items-center p-2">
          <AiOutlineUser />
        </div>
        {user}
      </div>
      <div className="pt-2">
        {text}
      </div>
    </div>
  );
}

export default Comment;
