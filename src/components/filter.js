import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import filter from "../assets/Union 17.svg"
import CaretDown from "../assets/Icon ionic-md-arrow-dropdown.svg"
import chekBox from  "../assets/check_box.svg"

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getAvatar(name) {
  const avatar = [];
  const s = name.split(" ");
  if (s.length > 1) {
    return `${s[0][0]?.toUpperCase()}${s[1][0]?.toUpperCase()} `;
  } else {
    return name[0]?.toUpperCase();
  }
}
function getName(name) {
  const avatar = [];
  const s = name.split(" ");
  if (s.length > 1) {
    return `${s[0]?.toUpperCase()} `;
  } else {
    return name[0]?.toUpperCase();
  }
}

export default function Filter() {
  const [selectedTalents, setSelectedTalents] = useState([people[0],people[4],people[5],people[8]]);
  const [selectedManage, setSelectedManage] = useState([people[0],people[4],]);
  const [selectedBrands, setSelectedBrands] = useState([people[0],people[4],]);

  function selection(e, s) {
    const asd = e.find((v) => v.name === "all");
    if (asd) {
      if (selectedTalents.length == people.length) {
        setSelectedTalents([]);
      } else {
        setSelectedTalents(people);
      }
    } else {
      setSelectedTalents(e);
    }
  }
  function ManageSelection(e) {
    const asd = e.find((v) => v.name === "all");

    if (asd) {
      if (selectedManage.length == people.length) {
        setSelectedManage([]);
      } else {
        setSelectedManage(people);
      }
    } else {
      setSelectedManage(e);
    }
  }
  function BrandSelection(e) {
    const asd = e.find((v) => v.name === "all");

    if (asd) {
      if (selectedBrands.length == people.length) {
        setSelectedBrands([]);
      } else {
        setSelectedBrands(people);
      }
    } else {
      setSelectedBrands(e);
    }
  }

  return (
    <>
      <div className="p-3  justify-between  w-full hidden md:flex">
        <div className="w-4/5  flex items-center justify-between">
          <div>
          <div>
            <img
              src={filter}
              width={30}
              height={70}
              alt="Filter"
              title="Filter"
            />
          </div>
          </div>
          <div className="flex items-center justify-between w-11/12">
          <div className="flex items-center justify-between">
          <Listbox
            value={selectedTalents}
            onChange={selection}
            multiple
          >
            {({ open }) => (
              <>
                <div className="relative flex items-center text-sm font-small whitespace-nowrap w-70  leading-6 text-gray-900">
                 Talents:
                  <span className="font-semibold">
                  {selectedTalents.map((person, index) => {
                          if (index <= 0) {
                            return (
                              <p>
                              {getName(person.name)}
                             </p>
                            );
                          }
                        })}
                        </span>
                <div className="relative mt-2 col-span-3">
                  <Listbox.Button style={{height :"40px"}} className="relative w-full width-button border-none d-flex  bg-white py-1.5 pl-3 p-3 text-left text-gray-900 sm:text-sm sm:leading-6">
                    <span className="pointer-events-none absolute inset-y-0 left-0  flex items-center">
                      
                      <img src={CaretDown} className="h-3 w-3  text-black"
                        aria-hidden="true"/>
                    </span>
                    <span className="flex items-center ml-3 avatar-display">
                    <div className="flex -space-x-2 overflow-hidden">
                          {selectedTalents.map((person, index) => {
                            if (index <= 2) {
                              return (
                                <div>
                                  <img
                                    src={person.avatar}
                                    alt=""
                                    className="inline-block shadow-3xl rounded-full h-8 w-8  border-2 border-dark-green ring-2 ring-white"
                                  />
                                </div>
                              );
                            }
                          })}

                          {selectedTalents.length >2 && (
                            <p className="inline-block h-8 w-8 rounded-full border-2 text-center pt-1 text-white bg-dark-green ">
                              +{selectedTalents.length - 3}
                            </p>
                          )}
                        </div>
                    </span>
                  </Listbox.Button>

                </div>
                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="shadow-3xl p-6 absolute top-12 z-10 mt-1 max-h-96 w-full  rounded-md bg-white py-1  text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <div className="p-3 text-gray-800">Filter Talents</div>
                      
                      <Listbox.Option
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-transparent text-gray-900"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-5 pr-9"
                          )
                        }
                        value={{ id: 0, name: "all", avatar: "" }}
                      >
                        {({ selected, active }) => {
                          return (
                            <>
                              {selectedTalents.length ===
                              people.length ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-2 block truncate"
                                  )}
                                >
                                  <p className="font-semibold text-base">Show All ({people.length} Talents)</p>
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Listbox.Option>
                      <hr class="my-3 h-0.5  border-0 bg-gray-400 opacity-20" />
                      <div className="scroll-bar overflow-auto h-64">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-transparent text-gray-900"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-5 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                   <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-9 w-9 flex-shrink-0 border-4 border-dark-green rounded-full border-"
                                />
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-4 block truncate text-base"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                      </div>
                    </Listbox.Options>
                  </Transition>
                  </div>
              </>
            )}
          </Listbox>          
          </div>
          <div className="flex items-center justify-between">
          <Listbox
            value={selectedManage}
            onChange={ManageSelection}
            multiple
          >
            {({ open }) => (
              <>
                <div className="relative flex items-center text-sm font-small whitespace-nowrap w-70  leading-6 text-gray-900">
                  Managed by:
                  <span className="font-semibold">
                  {selectedManage.map((person, index) => {
                          if (index <= 0) {
                            return (
                              <p>
                              {getName(person.name)}
                             </p>
                            );
                          }
                        })}
                        </span>
                <div className="relative mt-2 col-span-3">
                  <Listbox.Button style={{height :"40px"}} className="width-button relative w-full border-none d-flex  bg-white py-1.5 pl-3 p-3 text-left text-gray-900 sm:text-sm sm:leading-6">
                    <span className="pointer-events-none absolute inset-y-0 left-0  flex items-center">
                    <img src={CaretDown} className="h-3 w-3  text-black"
                        aria-hidden="true"/>
                    </span>
                    <span className="flex items-center ml-3 avatar-display">
                    <div className="flex -space-x-2 overflow-hidden">
                      {selectedManage.map((person, index) => {
                          if (index <= 3) {
                            return (
                              <div>
                                <p  className="inline-block h-8 w-8 pt-1 rounded-full border-2  border-red-500 text-center  text-white bg-red-300 ">
                              {getAvatar(person.name)}
                            </p>
                              </div>
                            );
                          }
                        })}

                        {selectedManage.length > 3 && (
                          <p  className="inline-block h-8 w-8 pt-1 rounded-full text-center shadow-black border-2 drop-shadow-lg border-red-500  text-white bg-red-300">
                            +{selectedManage.length - 4}
                          </p>
                        )}
                      </div>
                    </span>
                  </Listbox.Button>

                </div>
                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="shadow-3xl p-6 absolute top-12 z-10 mt-1 max-h-96 w-full  rounded-md bg-white py-1  text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <div className="p-3 text-gray-800">Filter By Manager</div>
                      
                      <Listbox.Option
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-transparent text-gray-900"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-5 pr-9"
                          )
                        }
                        value={{ id: 0, name: "all", avatar: "" }}
                      >
                        {({ selected, active }) => {
                          return (
                            <>
                              {selectedManage.length ===
                              people.length ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-2 block truncate"
                                  )}
                                >
                                  <p className="font-semibold text-base">Show All ({people.length} Manager)</p>
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Listbox.Option>
                      <hr class="my-3 h-0.5  border-0 bg-gray-400 opacity-20" />
                      <div className="scroll-bar overflow-auto h-64">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-transparent text-gray-900"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-5 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                   <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-9 w-9 flex-shrink-0 border-4 border-green-900 rounded-full border-"
                                />
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-4 block truncate text-base"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                      </div>
                    </Listbox.Options>
                  </Transition>
                  </div>
              </>
            )}
          </Listbox>          
          </div>
          <div className="flex items-center justify-between">
          <Listbox
            value={selectedBrands}
            onChange={BrandSelection}
            multiple
          >
            {({ open }) => (
              <>
                <div className="relative flex items-center text-sm font-small whitespace-nowrap leading-6 text-gray-900">
                  Brands:
                  <span className="font-semibold">
                  {selectedBrands.map((person, index) => {
                          if (index <= 0) {
                            return (
                              <p>
                              {getName(person.name)}
                             </p>
                            );
                          }
                        })}
                        </span>
                <div className="relative mt-2 col-span-3">
                  <Listbox.Button style={{height :"40px"}} className="width-button relative w-full border-none d-flex  bg-white py-1.5 pl-3 p-3 text-left text-gray-900 sm:text-sm sm:leading-6">
                    <span className="pointer-events-none absolute inset-y-0 left-0  flex items-center">
                    <img src={CaretDown} className="h-3 w-3  text-black"
                        aria-hidden="true"/>
                    </span>
                    <span className="flex items-center ml-3 avatar-display">
                    <div className="flex -space-x-2 overflow-hidden">
                      {selectedBrands.map((person, index) => {
                          if (index <= 3) {
                            return (
                              <div>
                                <p className="inline-block h-8 w-8 pt-1 rounded-full border-2 shadow-black  drop-shadow-lg border-red-500 text-center  text-white bg-red-300 ">
                              {getAvatar(person.name)}
                            </p>
                              </div>
                            );
                          }
                        })}

                        {selectedBrands.length > 4 && (
                          <p  className="inline-block h-8 w-8 pt-1 rounded-full text-center shadow-black border-2 drop-shadow-lg border-red-500  text-white bg-red-300">
                            +{selectedBrands.length - 4}
                          </p>
                        )}
                      </div>
                    </span>
                  </Listbox.Button>

                </div>
                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="shadow-3xl p-6 absolute top-12 z-10 mt-1 max-h-96 w-full  rounded-md bg-white py-1  text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <div className="p-3 text-gray-800">Filter By Brands</div>
                      
                      <Listbox.Option
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-transparent text-gray-900"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-5 pr-9"
                          )
                        }
                        value={{ id: 0, name: "all", avatar: "" }}
                      >
                        {({ selected, active }) => {
                          return (
                            <>
                              {selectedManage.length ===
                              people.length ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-2 block truncate"
                                  )}
                                >
                                  <p className="font-semibold text-base">Show All ({people.length} Brands)</p>
                                </span>
                              </div>
                            </>
                          );
                        }}
                      </Listbox.Option>
                      <hr class="my-3 h-0.5  border-0 bg-gray-400 opacity-20" />
                      <div className="scroll-bar overflow-auto h-64">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-transparent text-gray-900"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-5 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              {selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                   <img src={chekBox} className="h-5 w-5"/>
                                </span>
                              ) : null}
                              {!selected ? (
                                <span
                                  className={classNames(
                                    active
                                      ? "text-white"
                                      : "text-indigo-600",
                                    "absolute inset-y-0 left-0 flex items-center pl-3"
                                  )}
                                >
                                  <div
                                    className="h-5 w-5 border-2 border-gray-300 rounded"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}

                              <div
                                className="flex items-center pl-7
                              "
                              >
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-9 w-9 flex-shrink-0 border-4 border-green-900 rounded-full border-"
                                />
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-4 block truncate text-base"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                      </div>
                    </Listbox.Options>
                  </Transition>
                  </div>
              </>
            )}
          </Listbox>          
          </div>
          </div>
        </div>
        <div> <input
            type="text"
            id="first_name"
            class="col-start-2 w-40 nosubmit  text-gray-500 text-sm rounded-lg border-2 border-yellow-100 ring-yellow-100 focus:border-2 focus:border-yellow-100 focus:ring-yellow-100"
            placeholder="@name"
          /></div>
      </div>
    </>
  );
}
