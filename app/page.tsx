import Image from "next/image";
import PatientForm from "./components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
 <div className="flex h-screen max-h-screen">
  <section className="flex w-full h-screen justify-center items-center">
    {/* TODO: OTP veriticacion passkey */}
    <div className="md:min-w-[480px] min-w-full md:p-auto p-10">
      <Image width={1000} height={1000} src={"/assets/icons/logo-full.svg"} className={"mb-12 h-10 w-fit"} alt={"Logo"}></Image>
      <PatientForm></PatientForm>
      <div className="text-14-regular mt-20 flex justify-between">
        <p className="jusfity-items-end text-gray-500 xl:text-left">
        2024 Health
        </p>
        <Link href={"/?admin=true"} className="text-primary-def hover:text-primary-hov">
        Admin
        </Link>
      </div>
    </div>

  </section>
  <Image src={"/assets/images/onboarding-img.png"} width={2000} height={1000} alt={"onboarding"} 
  className="max-w-[50%] h-screen object-cover md:block hidden"></Image>
 </div>
  );
}
