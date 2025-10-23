"use clinet";
import React, { FC } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import { IComment } from "@/core/types/ICommentResponse";

interface IProps {
  id: string;
  CommnetList: IComment[];
  CommentCount: number;
  userId: string;
  userName: string;
  userProfile: string;
}

const HouseComments: FC<IProps> = ({ CommnetList, CommentCount, userName, userProfile, id, userId }) => {
  console.log(CommnetList, CommentCount);

  return (
    <div className="mt-10 px-10 py-10 bg-[#F5F5F5] rounded-[25px]">
      <h3 className="text-[#1E2022] text-[18px] flex gap-2 font-bold">
        همه ی نظرات
        <div className="bg-[#0D3B66] size-[22px] rounded-[50%] text-white text-center  text-[16px] font-normal">
          {CommentCount}
        </div>
      </h3>
      <CommentForm houseId={id} userId={userId}/>
      {CommnetList.length > 0 ? (
        <div className="space-y-4">
          {CommnetList.map((comment, index) => (
            <CommentCard
              key={comment.dataValues.id || index}
              userName={userName}
              userProfile={userProfile}
              commentTitle={comment.dataValues.title}
              commentCaption={comment.dataValues.caption}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-[#0D3B66] text-[22px] w-full pt-6 text-center">نظری درباره این خانه وجود ندارد</h3>
      )}
    </div>
  );
};

export default HouseComments;
