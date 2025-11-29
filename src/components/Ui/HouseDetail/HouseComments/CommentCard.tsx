'use clinet'
import Image from "next/image";
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import UnKnownUser from '../../../../assets/images/UnKnownUserImg/UnKnownUser.jpg'
import React, { FC } from "react";

interface IProps {
  commentTitle: string;
  commentCaption: string;
  userName: string;
  userProfile: string
}

const CommentCard: FC<IProps> = ({ commentTitle, commentCaption, userName, userProfile }) => {

  return (
    <div className="border-b border-[#DDDDDD] pt-8 pb-5">
      {/* use Information */}
      <div className="flex gap-4">
        <div className="size-[55px] rounded-full overflow-hidden">
          <Image
            src={UnKnownUser}
            alt="personImage"
            width={55}
            height={55}
          />
        </div>
        <div className="text-[#1E1E1E] dark:text-thidary text-[16px] font-bold space-y-2">
            <h3>کاربر ریفیوژن</h3>
            <h4 className="text-[#777777] text-[14px] dark:text-borderColor font-normal">14 خرداد 1404</h4>
        </div>
      </div>
      {/* use Information end */}
      {/* the comment */}
      <div className="pt-6">
           <h4 className="text-[#1E2022] dark:text-white text-[14px] font-normal">{commentTitle}</h4>
          <p className="text-[#777777] dark:text-borderColor text-[14px] font-normal text-justify leading-6.5 pt-1">{commentCaption}</p>
      </div>
      {/* the comment end */}
      {/* comment Actions */}
      <div className="flex gap-5 text-[#1E2022] dark:text-white text-[12px] pt-5">
          <button className="flex gap-1 cursor-pointer"><MessageCircle size={16}/> 1 پاسخ</button>
          <button className="flex gap-1 cursor-pointer"><ThumbsDown size={16}/>21</button>
          <button className="flex gap-1 cursor-pointer"><ThumbsUp size={16}/>43</button>
          <button className="underline text-[#0D3B66] dark:text-thidary cursor-pointer">پاسخ دادن</button>
      </div>
      {/* comment Actions end */}
    </div>
  );
};

export default CommentCard;
