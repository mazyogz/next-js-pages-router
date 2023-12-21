import Link from "next/link";
const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Sudah Punya Akun? Registrasi <Link href={"/auth/login"}>Disini</Link></p>
    </div>
  );
};

export default RegisterPage;
