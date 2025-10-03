'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { postLogin } from '@/core/Apis/Auth/Login/login';
import { ILoginResponse } from '@/core/Types/Auth/ILoginResponse';
import { loginSchema } from '@/lib/validations';

export async function onSubmitLogin(formData: FormData): Promise<{ error?: string; success?: boolean }> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'لطفاً ایمیل و رمز عبور را وارد کنید.' };
  }

  const validatedFields = loginSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const errorMessage = fieldErrors.email?.[0] || fieldErrors.password?.[0] || 'خطا در اعتبارسنجی';
    return { error: errorMessage };
  }

  try {
    const response: ILoginResponse = await postLogin({ email, password });
    console.log('Login successful:', response);
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    console.error('Login error:', error);
    return { error: 'ورود ناموفق بود. لطفاً دوباره تلاش کنید.' };
  }
}