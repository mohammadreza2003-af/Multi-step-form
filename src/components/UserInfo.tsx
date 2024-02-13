import { TypePropsUserInfo } from "../contexts/types";

const UserInfo = ({ setUser, user }: TypePropsUserInfo) => {
  const hanleChange = (type: string, value: string) => {
    switch (type) {
      case "name":
        setUser((pre) => {
          const temp = pre;
          return { ...temp, name: value };
        });
        break;
      case "email":
        setUser((pre) => {
          const temp = pre;
          return { ...temp, email: value };
        });
        break;
      case "phoneNumber":
        setUser((pre) => {
          const temp = pre;
          return { ...temp, phoneNumber: value };
        });
    }
  };

  return (
    <div className="flex sm:flex-col justify-center items-start my-6">
      <div>
        <form className="flex flex-col w-full gap-y-4">
          <div>
            <label htmlFor="name" className="text-slate-600 font-normal">
              Name
            </label>
            <input
              type="text"
              value={user.name}
              className="border rounded-md sm:px-4 sm:py-2 w-full mt-1 text-slate-700"
              placeholder="Your name"
              id="name"
              name="name"
              onChange={(e) => hanleChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-slate-600 font-normal">
              Email Address
            </label>
            <input
              type="email"
              value={user.email}
              className="border rounded-md sm:px-4 sm:py-2 w-full mt-1 text-slate-700"
              placeholder="Your Email Address"
              id="email"
              name="email"
              onChange={(e) => hanleChange("email", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number" className="text-slate-600 font-normal">
              Phone Number
            </label>
            <input
              type="text"
              value={user.phoneNumber}
              className="border rounded-md sm:px-4 sm:py-2 w-full mt-1 text-slate-700"
              placeholder="Your Phone Number"
              id="number"
              name="number"
              onChange={(e) => hanleChange("phoneNumber", e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
