import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

let countries: Country[] = require("../data/countryList.json");
let serviceType: ServiceType[] = require("../data/serviceType.json");

type Country = {
  code: string;
  name: string;
};

type ServiceType = {
  code: string;
  name: string;
};

interface IFormData {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  serviceType: string;
  details: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div className="bg-white w-full h-full py-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="pb-10">Request An Estimate</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-x-7 gap-y-5"
        >
          <label
            htmlFor="firstName"
            className="font-bold flex flex-col text-left"
          >
            First Name *
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              {...(register("firstName"), { required: true })}
            />
          </label>
          <label
            htmlFor="lastName"
            className="font-bold flex flex-col text-left"
          >
            Last Name *
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              {...(register("lastName"), { required: true })}
            />
          </label>
          <label htmlFor="phone" className="font-bold flex flex-col text-left">
            Phone *
            <input
              type="number"
              id="phone"
              placeholder="Phone"
              {...(register("phone"), { required: true })}
            />
          </label>
          <label htmlFor="email" className="font-bold flex flex-col text-left">
            Email *
            <input
              type="text"
              id="email"
              placeholder="Email"
              {...(register("email"), { required: true })}
            />
          </label>
          <div className="grid grid-cols-2 gap-x-7 gap-y-2 col-span-2">
            <label
              htmlFor="address"
              className="font-bold flex flex-col text-left col-span-2"
            >
              Service Address *
              <input
                type="text"
                id="address"
                placeholder="REQUIRED"
                {...(register("address"), { required: true })}
              />
            </label>
            {/* <label
              htmlFor="streetAddress"
              className="font-normal text-xs flex flex-col text-left"
            >
              Street Address
              <input
                className="font-bold text-base"
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="REQUIRED"
              />
            </label> */}
            <label
              htmlFor="city"
              className="font-normal text-xs flex flex-col text-left"
            >
              City
              <input
                className="font-bold"
                type="text"
                id="city"
                placeholder="REQUIRED"
                {...(register("city"), { required: true })}
              />
            </label>
            <label
              htmlFor="state"
              className="font-normal text-xs flex flex-col text-left justify-end"
            >
              State / Province / Region
              <input
                className="font-bold"
                type="text"
                id="state"
                placeholder="REQUIRED"
                {...(register("state"), { required: true })}
              />
            </label>
            <label
              htmlFor="zip"
              className="font-normal text-xs flex flex-col text-left"
            >
              ZIP / Postal Code
              <input
                className="font-bold"
                type="text"
                id="zip"
                placeholder="REQUIRED"
                {...(register("zip"), { required: true })}
              />
            </label>
            <label
              htmlFor="country"
              className="font-normal text-xs flex flex-col text-left"
            >
              Country
              <select
                className="cursor-pointer"
                id="country"
                placeholder="REQUIRED"
                defaultValue={"US"}
                {...(register("country"), { required: true })}
              >
                {countries.map((item) => {
                  return (
                    <option
                      key={item.code}
                      value={item.code}
                      className="cursor-pointer"
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <label
            htmlFor="serviceType"
            className="font-bold flex flex-col text-left col-span-2"
          >
            How Can We Help You *
            <select
              className="font-normal cursor-pointer"
              id="serviceType"
              placeholder="REQUIRED"
              defaultValue={"treeTrimming"}
              {...(register("serviceType"), { required: true })}
            >
              {serviceType.map((item) => {
                return (
                  <option
                    key={item.code}
                    value={item.code}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
          <label
            htmlFor="details"
            className="font-bold flex flex-col text-left col-span-2"
          >
            Please Provide Any Additional Details
            <textarea
              className="font-bold h-48 resize-none"
              id="details"
              placeholder="Write your message"
              {...register("details")}
            />
          </label>
          <div className="col-span-2 py-10">
            <a
              type="submit"
              className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl"
            >
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
