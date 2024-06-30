import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import {
  IconBell,
  IconCode,
  IconHome,
  IconUser,
  IconPhone,
  IconSettings,
  IconInfoCircle,
} from '@/icons';
import Image from 'next/image';

const Tabs = () => {
  const [codeArr, setCodeArr] = useState<string[]>([]);
  const toggleCode = (name: string) => {
    if (codeArr.includes(name)) {
      setCodeArr((value) => value.filter((d) => d !== name));
    } else {
      setCodeArr([...codeArr, name]);
    }
  };

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link
            href="/components/tabs"
            className="text-primary hover:underline"
          >
            Components
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Tabs</span>
        </li>
      </ul>
      <div className="space-y-8 pt-5">
        <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
          <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
            <IconBell />
          </div>
          <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
          <a
            href="https://headlessui.com/react/tabs"
            target="_blank"
            className="block hover:underline"
            rel="noreferrer"
          >
            https://headlessui.com/react/tabs
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Simple Tabs */}
          <div className="panel" id="simple">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Simple Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code1')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                              : ''
                          } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                              : ''
                          } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                              : ''
                          } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab className="pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark">
                      Disabled
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Simple Pills */}
          <div className="panel" id="pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Simple Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code2')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-primary text-white !outline-none'
                              : ''
                          }
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-primary text-white !outline-none'
                              : ''
                          } -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-primary text-white !outline-none'
                              : ''
                          } -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab className="pointer-events-none -mb-[1px] block rounded p-3.5 py-2 text-white-light dark:text-dark">
                      Disabled
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Icon Tabs */}
          <div className="panel" id="icon">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Icon Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code3')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 mr-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger dark:hover:border-b-black`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger dark:hover:border-b-black`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger dark:hover:border-b-black`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab className="pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark">
                      <IconInfoCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                      Disabled
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Icon Pills */}
          <div className="panel" id="icon_pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Icon Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code4')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap gap-2">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-warning text-white !outline-none'
                              : ''
                          }
                                                    -mb-[1px] flex items-center rounded p-3.5 py-2 before:inline-block hover:bg-warning hover:text-white`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-warning text-white !outline-none'
                              : ''
                          }
                                                    -mb-[1px] flex items-center rounded p-3.5 py-2 before:inline-block hover:bg-warning hover:text-white`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'bg-warning text-white !outline-none'
                              : ''
                          }
                                                    -mb-[1px] flex items-center rounded p-3.5 py-2 before:inline-block hover:bg-warning hover:text-white`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab className="pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark">
                      <IconInfoCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                      Disabled
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Vertical Border */}
          <div className="panel" id="vertical_border">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Vertical Bordered
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code5')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row">
              {isMounted && (
                <Tab.Group>
                  <div className="mx-10 mb-5 sm:mb-0">
                    <Tab.List className="m-auto w-24 text-center">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    -mb-[1px] block w-full border border-white-light p-3.5 py-2 before:inline-block hover:bg-success hover:text-white dark:border-[#191e3a]`}
                          >
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    -mb-[1px] block w-full border border-white-light p-3.5 py-2 before:inline-block hover:bg-success hover:text-white dark:border-[#191e3a]`}
                          >
                            Profile
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    -mb-[1px] block w-full border border-white-light p-3.5 py-2 before:inline-block  hover:bg-success hover:text-white dark:border-[#191e3a]`}
                          >
                            Messages
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    -mb-[1px] block w-full border border-white-light p-3.5 py-2 before:inline-block hover:bg-success hover:text-white dark:border-[#191e3a]`}
                          >
                            Settings
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Border Tabs */}
          <div className="panel" id="vertical_border">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Border Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code6')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 !outline-none transition duration-300 hover:text-danger`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 !outline-none transition duration-300 hover:text-danger`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                -mb-[1px] flex items-center border border-transparent p-3.5 py-2 !outline-none transition duration-300 hover:text-danger`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="flex-1 border border-t-0 border-white-light p-4 text-sm  dark:border-[#191e3a]">
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex items-start">
                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                          <Image
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                          />
                        </div>
                        <div className="flex-auto">
                          <h5 className="mb-4 text-xl font-medium">
                            Media heading
                          </h5>
                          <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Border Top */}
          <div className="panel" id="border">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Border Top
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code7')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]'
                              : ''
                          }
                                                    ' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]'
                              : ''
                          }
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]'
                              : ''
                          }
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]'
                              : ''
                          }
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                        >
                          <IconSettings className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Settings
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="mt-5 rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 pt-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Line */}
          <div className="panel" id="border_top">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Line
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code8')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'border-b !border-secondary text-secondary !outline-none'
                              : ''
                          }
                                                    -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'border-b !border-secondary text-secondary !outline-none'
                              : ''
                          }
                                                -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'border-b !border-secondary text-secondary !outline-none'
                              : ''
                          }
                                                -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Animated Line */}
          <div className="panel" id="line">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Animated Line
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code9')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'text-secondary !outline-none before:!w-full'
                              : ''
                          }
                                                    relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                        >
                          <IconHome className="ltr:mr-2 rtl:ml-2" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'text-secondary !outline-none before:!w-full'
                              : ''
                          }
                                                relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                        >
                          <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? 'text-secondary !outline-none before:!w-full'
                              : ''
                          }
                                                relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                        >
                          <IconPhone className="ltr:mr-2 rtl:ml-2" />
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Vertical Line Tab */}
          <div className="panel" id="animated_line">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Vertical Line Tab
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code10')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row">
              {isMounted && (
                <Tab.Group>
                  <div className="mx-10 mb-5 sm:mb-0">
                    <Tab.List className="m-auto w-24 text-center font-semibold">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? 'text-secondary !outline-none before:!h-[80%]'
                                : ''
                            }
                                                    relative -mb-[1px] block w-full border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`}
                          >
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? 'text-secondary !outline-none before:!h-[80%]'
                                : ''
                            }
                                                    relative -mb-[1px] block w-full border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`}
                          >
                            Profile
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? 'text-secondary !outline-none before:!h-[80%]'
                                : ''
                            }
                                                    relative -mb-[1px] block w-full border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`}
                          >
                            Messages
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? 'text-secondary !outline-none before:!h-[80%]'
                                : ''
                            }
                                                    relative -mb-[1px] block w-full border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`}
                          >
                            Settings
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex items-start">
                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                          <Image
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                          />
                        </div>
                        <div className="flex-auto">
                          <h5 className="mb-4 text-xl font-medium">
                            Media heading
                          </h5>
                          <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Tabs */}
          <div className="panel" id="vertical_line">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code11')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected
                                ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                                : ''
                            } -mb-[1px] block w-full border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                          >
                            Home
                          </button>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected
                                ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                                : ''
                            } -mb-[1px] block w-full border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                          >
                            Profile
                          </button>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected
                                ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                                : ''
                            } -mb-[1px] block w-full border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                          >
                            Contact
                          </button>
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Pills */}
          <div className="panel" id="justify">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code12')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap justify-between space-x-2 rtl:space-x-reverse">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected ? 'bg-info text-white !outline-none' : ''
                            }
                                                    -mb-[1px] block w-full rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                          >
                            Home
                          </button>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected ? 'bg-info text-white !outline-none' : ''
                            }
                                                    -mb-[1px] block w-full rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                          >
                            Profile
                          </button>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                          <button
                            className={`${
                              selected ? 'bg-info text-white !outline-none' : ''
                            }
                                                    -mb-[1px] block w-full rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                          >
                            Contact
                          </button>
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Center Tabs */}
          <div className="panel" id="justify_pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Center Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code13')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap justify-center border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          } ' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          } -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          } ' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Center Pills */}
          <div className="panel" id="justify_center_pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Center Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code14')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap justify-center space-x-2 rtl:space-x-reverse">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Right Tabs */}
          <div className="panel" id="justify_right">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Right Tabs
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code15')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap justify-end border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                    -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                    -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
                              : ''
                          }
                                                    -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Right Pills */}
          <div className="panel" id="justify_right_pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Right Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code16')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 flex flex-wrap justify-end space-x-2 rtl:space-x-reverse">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                        >
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                        >
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? 'bg-info text-white !outline-none' : ''
                          }
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                        >
                          Contact
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active pt-5">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start pt-5">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pt-5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>Disabled</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Pills with Icon */}
          <div className="panel" id="pills_with_icon">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Pills with Icon
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code17')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!bg-success text-white !outline-none'
                              : ''
                          }
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconHome className="mb-1" />
                          Home
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!bg-success text-white !outline-none'
                              : ''
                          }
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconUser className="w-5 h-5 mb-1" />
                          Profile
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!bg-success text-white !outline-none'
                              : ''
                          }
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconPhone className="mb-1" />
                          Contact
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected
                              ? '!bg-success text-white !outline-none'
                              : ''
                          }
                                                    flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconSettings className="w-5 h-5 mb-1" />
                          Settings
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Rounded Pills with Icon */}
          <div className="panel" id="rounded_pills_icon">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Rounded Pills with Icon
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code18')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              {isMounted && (
                <Tab.Group>
                  <Tab.List className="mt-3 mb-5 flex flex-wrap justify-center space-x-3 rtl:space-x-reverse">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? '!bg-info text-white !outline-none' : ''
                          }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconHome className="w-6 h-6" />
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? '!bg-info text-white !outline-none' : ''
                          }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconUser className="w-6 h-6" />
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? '!bg-info text-white !outline-none' : ''
                          }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconPhone className="w-6 h-6" />
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`${
                            selected ? '!bg-info text-white !outline-none' : ''
                          }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                        >
                          <IconSettings />
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="flex items-start">
                      <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <Image
                          src="/assets/images/profile-34.jpeg"
                          alt="img"
                          className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                      </div>
                      <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">
                          Media heading
                        </h5>
                        <p className="text-white-dark">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Vertical Rounded With Icon */}
          <div className="panel" id="vertical_rounded_with_icon">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Vertical Rounded With Icon
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code19')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row">
              {isMounted && (
                <Tab.Group>
                  <div className="mx-10 mb-5 sm:mb-0">
                    <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            } flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconHome className="mb-1" />
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            } flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconUser className="w-5 h-5 mb-1" />
                            Profile
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            } flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconPhone className="mb-1" />
                            Contact
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active flex-1 text-sm">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="active flex-1 text-sm">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="active flex-1 text-sm">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Vertical Circle With Icon */}
          <div className="panel" id="vertical_circle_with_icon">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Vertical Circle With Icon
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code20')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row">
              {isMounted && (
                <Tab.Group>
                  <div className="mx-10 mb-5 sm:mb-0">
                    <Tab.List className="m-auto flex flex-col justify-center space-y-3">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-info text-white !outline-none'
                                : ''
                            }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconHome className="w-6 h-6" />
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-info text-white !outline-none'
                                : ''
                            }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconUser className="w-6 h-6" />
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-info text-white !outline-none'
                                : ''
                            }
                                                    flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all duration-300 hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`}
                          >
                            <IconPhone className="w-6 h-6" />
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <div className="flex items-start">
                          <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                            <Image
                              src="/assets/images/profile-34.jpeg"
                              alt="img"
                              className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                            />
                          </div>
                          <div className="flex-auto">
                            <h5 className="mb-4 text-xl font-medium">
                              Media heading
                            </h5>
                            <p className="text-white-dark">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="active flex-1 text-sm">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Vertical Pills */}
          <div className="panel" id="vertical_pills">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Vertical Pills
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code21')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row">
              {isMounted && (
                <Tab.Group>
                  <div className="mb-5 sm:mb-0 sm:flex-[0_0_20%]">
                    <Tab.List className="space-y-2 ltr:pr-4 rtl:pl-4">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success hover:text-white`}
                          >
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success hover:text-white`}
                          >
                            Profile
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success hover:text-white`}
                          >
                            Messages
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success hover:text-white`}
                          >
                            Settings
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex items-start">
                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                          <Image
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                          />
                        </div>
                        <div className="flex-auto">
                          <h5 className="mb-4 text-xl font-medium">
                            Media heading
                          </h5>
                          <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="active flex-1 text-sm">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
          {/* Justify Vertical Pills Right */}
          <div className="panel" id="justify_vertical_pills_right">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Justify Vertical Pills Right
              </h5>
              <button
                type="button"
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                onClick={() => toggleCode('code22')}
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row sm:gap-4">
              {isMounted && (
                <Tab.Group>
                  <div className="mb-5 space-y-2 ltr:pr-4 rtl:pl-4 sm:order-1 sm:mb-0 sm:flex-[0_0_20%]">
                    <Tab.List className="space-y-2">
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                          >
                            Home
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                          >
                            Profile
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                          >
                            Messages
                          </button>
                        )}
                      </Tab>
                      <Tab as={Fragment}>
                        {({ selected }) => (
                          <button
                            className={`${
                              selected
                                ? '!bg-success text-white !outline-none'
                                : ''
                            }
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                          >
                            Settings
                          </button>
                        )}
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="active">
                        <h4 className="mb-4 text-2xl font-semibold">
                          We move your world!
                        </h4>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex items-start">
                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                          <Image
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                          />
                        </div>
                        <div className="flex-auto">
                          <h5 className="mb-4 text-xl font-medium">
                            Media heading
                          </h5>
                          <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="active flex-1 text-sm">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                        <div className="flex items-start">
                          <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
