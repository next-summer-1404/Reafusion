"use client";
import React, { useState } from "react";
import { Menu, LogOut, X } from "lucide-react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        className="!bg-primary"
        sx={{
          width: 40,
          height: 40,
          bgcolor: "primary",
          color: "white",
          borderRadius: "50%",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        <Menu size={24} />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 320, borderRadius: "0 20px 20px 0" }, // یه کم گرد از چپ
        }}
      >
        <Box sx={{ width: 320, height: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 3,
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              منوی کاربری
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <X size={24} />
            </IconButton>
          </Box>
          <List sx={{ flex: 1, px: 2, py: 2 }}>
            sssss
          </List>
          <Box sx={{ borderTop: "1px solid #e5e7eb", p: 2 }}>
            <ListItem
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                borderRadius: 2,
                color: "error.main",
                "&:hover": {
                  bgcolor: "error.light",
                  color: "white",
                  "& .lucide-icon": { stroke: "white" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                <LogOut size={22} className="lucide-icon" />
              </ListItemIcon>
              <ListItemText primary="خروج از حساب" primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderMenu;