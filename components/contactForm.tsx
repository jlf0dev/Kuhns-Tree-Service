import Link from "next/link";
import React from "react";

let countries: Country[] = require("../data/countryList.json");
let serviceType: ServiceType[] = require("../data/serviceType.json");

export type Country = {
  code: string;
  name: string;
};

export type ServiceType = {
  code: string;
  name: string;
};

export default function ContactForm() {
  return (
    <div className="bg-white w-full h-full py-10">
      <div className="max-w-4xl mx-auto">
        <h3 className="pb-10">Request An Estimate</h3>
        <form className="grid grid-cols-2 gap-x-7 gap-y-5">
          <label htmlFor="fname" className="font-bold flex flex-col text-left">
            First Name *
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
            />
          </label>
          <label htmlFor="lname" className="font-bold flex flex-col text-left">
            Last Name *
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
          </label>
          <label htmlFor="phone" className="font-bold flex flex-col text-left">
            Phone *
            <input type="text" id="phone" name="phone" placeholder="Phone" />
          </label>
          <label htmlFor="email" className="font-bold flex flex-col text-left">
            Email *
            <input type="text" id="email" name="email" placeholder="Email" />
          </label>
          <div className="grid grid-cols-2 gap-x-7 gap-y-2 col-span-2">
            <label
              htmlFor="serviceAddress"
              className="font-bold flex flex-col text-left col-span-2"
            >
              Service Address *
              <input
                type="text"
                id="serviceAddress"
                name="serviceAddress"
                placeholder="REQUIRED"
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
                name="city"
                placeholder="REQUIRED"
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
                name="state"
                placeholder="REQUIRED"
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
                name="zip"
                placeholder="REQUIRED"
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
                name="country"
                placeholder="REQUIRED"
                defaultValue={"US"}
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
              name="serviceType"
              placeholder="REQUIRED"
              defaultValue={"treeTrimming"}
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
              name="details"
              placeholder="Write your message"
            />
          </label>
          <div className="col-span-2 py-10">
            <Link href="/menu">
              <a className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl">
                Submit
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
