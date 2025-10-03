import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "ایمیل معتبر نیست" })
    .nonempty("ایمیل الزامی است")
    .trim(),
  password: z
    .string()
    .min(6, { message: "رمز حداقل 6 کارکتر" })
    .nonempty({ message: "رمز عبور الزامی است" })
    .trim(),
});

export const registerStep2Schema = z
  .object({
    password: z
      .string()
      .min(6, { message: "رمز حداقل 6 کارکتر" })
      .nonempty({ message: "رمز عبور الزامی است" })
      .trim(),

    confirmPassword: z.string().trim(),
  })
  .superRefine((val, contex) => {
    if (val.password !== val.confirmPassword) {
      contex.addIssue({
        code: z.ZodIssueCode.custom,
        message: "رمز عبور یکسان نیست",
        path: ["confirmPassword"],
      });
    }
  });
