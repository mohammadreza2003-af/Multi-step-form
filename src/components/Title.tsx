const Title = ({ step }: { step: number }) => {
  return (
    <>
      {step === 0 && (
        <div>
          <h1 className="font-semibold text-3xl text-slate-800">
            Personal info
          </h1>
          <p className="text-md text-slate-500">
            Please provide your name, email address, and phone number.
          </p>
        </div>
      )}
      {step === 1 && (
        <div>
          <h1 className="font-semibold text-3xl text-slate-800">
            Select your plan
          </h1>
          <p className="text-md text-slate-500">
            You have the option of monthly or yearly billing.
          </p>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1 className="font-semibold text-3xl text-slate-800">
            Pick add-ons
          </h1>
          <p className="text-md text-slate-500">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1 className="font-semibold text-3xl text-slate-800">
            Finishing up
          </h1>
          <p className="text-md text-slate-500">
            Double-check everything looks OK before confirming.
          </p>
        </div>
      )}
    </>
  );
};

export default Title;
