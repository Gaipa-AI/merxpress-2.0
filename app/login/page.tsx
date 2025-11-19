import {LoginForm} from '@/components/auth/LoginForm';
//import { Header } from '@/components/Header';

export default function LoginPage() {
  return (
    <>
    {/* <Header /> */}
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
    </>
  );
}
