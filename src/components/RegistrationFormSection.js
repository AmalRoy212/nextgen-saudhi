import RegistrationDetails from "./RegistrationDetails";
import RegistrationForm from "./RegistrationForm";

const RegistrationFormSection = () => {
  return (
    <div className="bg-[#000814] flex flex-col min-h-screen w-screen">
      <div className="mx-auto mt-20 mb-5 flex w-[1200px] max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[40%]">
          <RegistrationDetails />
        </div>

        <div className="lg:w-[60%]">
          <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
              Registration Form
            </h1>
            <p className="">
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
