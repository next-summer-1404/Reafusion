'use clinet'
import { CommentAction } from "@/app/(Main)/FastReservePage";
import React, { FC, useActionState } from "react";
import FillButton from "../../Buttons/FillButton";

interface IProps {
  userId: string;
  houseId: string;
}

const CommentForm: FC<IProps> = ({ userId, houseId }) => {
  const [state, formAction] = useActionState(CommentAction, { message: "" });
  console.log(state)

  return (
    <form action={formAction} className="space-y-5 pt-7">
      <h3 className="text-[#1E2022] text-[16px] font-bold">عنوان دیدگاه</h3>
      <input
        name="title"
        type="text"
        placeholder="عنوان دیدگاه خود را بنویسید"
        className="w-full text-[#0D3B66] placeholder:text-[#777777] indent-2 bg-white 
            rounded-[25px] p-4 outline-0"
      />
      <h3 className="text-[#1E2022] text-[16px] font-bold">متن دیدگاه</h3>
      <textarea
        name="caption"
        placeholder="متن دیدگاه خود را بنویسید"
        className="w-full p-4 indent-2 pt-6 bg-white rounded-[25px] text-[#0D3B66] placeholder:text-[#777777] min-h-[250px] outline-0"
      />
      <input type="hidden" name="house_id" value={houseId}/>
      <input type="hidden" name="user_id" value={userId}/>
      <input type="hidden" name="rating" value={'3'}/>
      <input type="hidden" name="parent_comment_id" value={'2'}/>
      <div className="flex justify-end">
        <FillButton type="submit" ButtonText="ارسال نظر" className="p-3 px-10"/>
      </div>
    </form>
  );
};

export default CommentForm;
