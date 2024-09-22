import RegistrationDetails from "./RegistrationDetails";
import RegistrationForm from "./RegistrationForm";

const RegistrationFormSection = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col min-h-screen w-screen">
      <div className="mx-auto mt-14 mb-5 flex w-[1200px] max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[30%]">
          <RegistrationDetails />
        </div>

        <div className="lg:w-[70%] shadow-2xl rounded-2xl">
          <div className="border bg-gray-200 text-black rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold flex items-center justify-center">
              Registration Form
            </h1>
            <p className="flex items-center justify-center">
              We&apos;d love to here for you, Please fill out this form.
            </p>
            <div className="mt-7">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormSection;
