import React, { Fragment, useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { Listbox, Transition } from "@headlessui/react";
import chekBox from "../assets/check_box.svg";
import CaretDown from "../assets/Icon ionic-md-arrow-dropdown.svg"

const labelsClasses = ["light-blue", "peach", "dark-green"];
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
export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title:selectedBrands.avatar,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedBrands ? selectedBrands.id : Date.now(),
    };
    if (selectedBrands) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  const [selectedBrands, setSelectedBrands] = useState(people[0]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-10">
      <form className="bg-white rounded-lg shadow-2xl w-1/5">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1 items-end gap-y-7">
            <div></div>
            {/* <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            /> */}
            <div>
              <lable className="text-base font-semibold">
              Campaign Date:
              </lable>
              <p className="mt-3 text-gray-600 text-xl font-semibold">
                {daySelected.format("dddd, MMMM DD")}
              </p>
            </div>
            <div>
            <lable className="text-base font-semibold">
            Select Talent:
              </lable>
            <Listbox className="mt-3"
              value={selectedBrands}
              onChange={setSelectedBrands}
            >
              {({ open }) => (
                <>
                  <div className="relative flex items-center text-sm font-small whitespace-nowrap leading-6 text-gray-900">
                    <div className="relative col-span-3">
                      <Listbox.Button
                        style={{ height: "40px", width: "298px" }}
                        className="relative pt-3 border-0  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                      >
                        {/* <span className="pointer-events-none absolute inset-y-0 left-0  flex items-center">
                    <img src={CaretDown} className="h-3 w-3  text-black"
                        aria-hidden="true"/>
                    </span> */}
                        <span className="flex items-center">
                          <p className="text-gray-600 text-xl font-semibold">
                            {selectedBrands.name}
                          </p>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <img src={CaretDown} className="h-3 w-3 text-gray-400" aria-hidden="true" />
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
                      <Listbox.Options className="shadow-3xl p-6 absolute top-12 z-10 mt-1 max-h-96 w-80 rounded-md bg-white py-1  text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                                      <img
                                        src={chekBox}
                                        className="h-5 w-5"
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
            <div className="flex-row">
              <lable className="text-base font-semibold">Talent Type</lable>
              <div className="flex gap-x-2 mt-3">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
