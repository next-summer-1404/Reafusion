"use client";
import React from "react";
import { Autocomplete, TextField, Chip, Box } from "@mui/material";
import { Newspaper } from "lucide-react";

interface TagsInputMUIProps {
  label?: string;
  placeholder?: string;
  value: string[];
  onChange: (tags: string[]) => void;
}

const defaultTags = [
  "ویلایی",
  "لوکس",
  "خانه بزرگ",
  "کاخ",
  "کلبه جنگلی",
  "خانه ساحلی",
  "خانه کوچک",
];

const TagsInputMUI: React.FC<TagsInputMUIProps> = ({
  label = "برچسب های ملک",
  placeholder = "برچسب را جستجو کنید یا تایپ کنید...",
  value,
  onChange,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {label && (
        <p className="text-dark text-sm font-medium pb-3">{label}</p>
      )}

      <Autocomplete
        multiple
        freeSolo
        options={defaultTags}
        value={value}
        onChange={(_, newValue) => {
          const tags = (newValue as string[]).filter(Boolean);
          onChange(tags);
          console.log("تگ‌های جدید:", tags); 
        }}
        renderTags={(tags, getTagProps) =>
          tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              {...getTagProps({ index })}
              className="!bg-secondary !text-whiteColor !px-4 !py-2 !rounded-full !text-sm !font-medium !mx-1"
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={value.length === 0 ? placeholder : ""}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "white",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                "& fieldset": { border: "none" },
                "&:hover": { borderColor: "#9ca3af" },
                "&.Mui-focused": {
                  borderColor: "primary.main",
                  boxShadow: "none",
                },
                minHeight: 56,
                py: 1,
              },
            }}
          />
        )}
        noOptionsText="برچسبی یافت نشد"
        renderOption={(props, option, { inputValue }) => {
          const isNew = !defaultTags.includes(option);
          return (
            <li {...props} className="flex items-center gap-2 px-3 py-2">
              {isNew && <Newspaper size={16} className="text-primary" />}
              <span>
                {isNew ? `ایجاد برچسب جدید: "${inputValue}"` : option}
              </span>
            </li>
          );
        }}
      />
      <p className="text-primary text-xs mt-2">
        می‌توانید از لیست انتخاب کنید یا برچسب جدید تایپ کرده و Enter بزنید
      </p>
    </Box>
  );
};

export default TagsInputMUI;