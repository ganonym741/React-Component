import Link from 'next/link';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { IconBell, IconCode, IconCaretDown, IconHorizontalDots } from '@/icons';

const DropdownPage = () => {
  const [codeArr, setCodeArr] = useState<string[]>([]);

  const toggleCode = (name: string) => {
    if (codeArr.includes(name)) {
      setCodeArr((value) => value.filter((d) => d !== name));
    } else {
      setCodeArr([...codeArr, name]);
    }
  };
  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="#" className="text-primary hover:underline">
            Elements
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Dropdowns</span>
        </li>
      </ul>
      <div className="space-y-8 pt-5">
        <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
          <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
            <IconBell />
          </div>
          <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
          <a
            href="https://www.npmjs.com/package/react-popper"
            target="_blank"
            className="block hover:underline"
            rel="noreferrer"
          >
            https://www.npmjs.com/package/react-popper
          </a>
        </div>
        {/* Basic */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="panel" id="basic">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Basic
              </h5>
              <button
                onClick={() => {
                  toggleCode('code1');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-primary dropdown-toggle"
                      button={
                        <>
                          Action
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-outline-primary dropdown-toggle"
                      button={
                        <>
                          Action
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Dropup */}
          <div className="space-y-8">
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Dropup
                </h5>
                <button
                  onClick={() => {
                    toggleCode('code2');
                  }}
                  className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                >
                  <span className="flex items-center">
                    <IconCode className="me-2" />
                    Code
                  </span>
                </button>
              </div>
              <div className="mb-5">
                <div className="flex w-full flex-wrap justify-around gap-7">
                  <div className="flex items-center justify-center">
                    <div className="dropdown">
                      <Dropdown
                        btnClassName="btn btn-info dropdown-toggle inline-flex"
                        button={
                          <>
                            Up
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block rotate-180" />
                          </>
                        }
                      >
                        <ul className="!min-w-[170px]">
                          <li>
                            <button type="button">Action</button>
                          </li>
                          <li>
                            <button type="button">Another action</button>
                          </li>
                          <li>
                            <button type="button">Something else here</button>
                          </li>
                          <li>
                            <button type="button">Separated link</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="dropdown">
                      <Dropdown
                        btnClassName="btn btn-outline-info dropdown-toggle inline-flex"
                        button={
                          <>
                            Up
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block rotate-180" />
                          </>
                        }
                      >
                        <ul className="!min-w-[170px]">
                          <li>
                            <button type="button">Action</button>
                          </li>
                          <li>
                            <button type="button">Another action</button>
                          </li>
                          <li>
                            <button type="button">Something else here</button>
                          </li>
                          <li>
                            <button type="button">Separated link</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Dropright */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Dropright
              </h5>
              <button
                onClick={() => {
                  toggleCode('code3');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-warning dropdown-toggle !flex"
                      button={
                        <>
                          Right
                          <IconCaretDown className="ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block" />
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-outline-warning dropdown-toggle !flex"
                      button={
                        <>
                          Right
                          <IconCaretDown className="ltr:ml-1 rtl:mr-1 rtl:rotate-90 -rotate-90 inline-block" />
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Dropleft */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Dropleft
              </h5>
              <button
                onClick={() => {
                  toggleCode('code4');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-danger dropdown-toggle !flex"
                      button={
                        <>
                          <IconCaretDown className="ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block" />
                          Left
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-outline-danger dropdown-toggle !flex"
                      button={
                        <>
                          <IconCaretDown className="ltr:mr-1 rtl:ml-1 rtl:-rotate-90 rotate-90 inline-block" />
                          Left
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Button */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Small Button
              </h5>
              <button
                onClick={() => {
                  toggleCode('code5');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-dark btn-sm dropdown-toggle"
                      button={
                        <>
                          Small Button
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-outline-dark btn-sm dropdown-toggle"
                      button={
                        <>
                          Small Button
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Large Button */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Large Button
              </h5>
              <button
                onClick={() => {
                  toggleCode('code6');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-success btn-lg dropdown-toggle"
                      button={
                        <>
                          Large Button
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn btn-outline-success btn-lg dropdown-toggle"
                      button={
                        <>
                          Large Button
                          <span>
                            <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                          </span>
                        </>
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grouped Dropdown Buttons */}
          <div className="panel" id="grouped">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Grouped Dropdown Buttons
              </h5>
              <button
                onClick={() => {
                  toggleCode('code7');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="relative inline-flex align-middle">
                    <button
                      type="button"
                      className="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-none"
                    >
                      2
                    </button>
                    <div className="relative inline-flex align-middle">
                      <div className="dropdown">
                        <Dropdown
                          btnClassName="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                          button={
                            <>
                              Dropdown
                              <span>
                                <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                              </span>
                            </>
                          }
                        >
                          <ul className="!min-w-[170px]">
                            <li>
                              <button type="button">Action</button>
                            </li>
                            <li>
                              <button type="button">Another action</button>
                            </li>
                            <li>
                              <button type="button">Something else here</button>
                            </li>
                            <li>
                              <button type="button">Separated link</button>
                            </li>
                          </ul>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative inline-flex align-middle">
                    <button
                      type="button"
                      className="btn btn-outline-secondary ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0"
                    >
                      2
                    </button>
                    <div className="dropdown">
                      <Dropdown
                        btnClassName="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                        button={
                          <>
                            Dropdown
                            <span>
                              <IconCaretDown className="ltr:ml-1 rtl:mr-1 inline-block" />
                            </span>
                          </>
                        }
                      >
                        <ul className="!min-w-[170px]">
                          <li>
                            <button type="button">Action</button>
                          </li>
                          <li>
                            <button type="button">Another action</button>
                          </li>
                          <li>
                            <button type="button">Something else here</button>
                          </li>
                          <li>
                            <button type="button">Separated link</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Split */}
          <div className="panel" id="split">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Split
              </h5>
              <button
                onClick={() => {
                  toggleCode('code8');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full flex-wrap justify-around gap-7">
                <div className="flex items-center justify-center">
                  <div className="inline-flex">
                    <button className="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">
                      Action
                    </button>
                    <div className="dropdown">
                      <Dropdown
                        btnClassName="btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full"
                        button={
                          <span className="sr-only">Toggle dropdown</span>
                        }
                      >
                        <ul className="!min-w-[170px]">
                          <li>
                            <button type="button">Action</button>
                          </li>
                          <li>
                            <button type="button">Another action</button>
                          </li>
                          <li>
                            <button type="button">Something else here</button>
                          </li>
                          <li>
                            <button type="button">Separated link</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="inline-flex">
                    <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">
                      Action
                    </button>
                    <div className="dropdown">
                      <Dropdown
                        btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                        button={
                          <span className="sr-only">Toggle dropdown</span>
                        }
                      >
                        <ul className="!min-w-[170px]">
                          <li>
                            <button type="button">Action</button>
                          </li>
                          <li>
                            <button type="button">Another action</button>
                          </li>
                          <li>
                            <button type="button">Something else here</button>
                          </li>
                          <li>
                            <button type="button">Separated link</button>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Custom Dropdown */}
          <div className="panel" id="custom">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Custom Dropdown
              </h5>
              <button
                onClick={() => {
                  toggleCode('code9');
                }}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mb-5">
              <div className="flex w-full">
                <div className="flex w-1/4 items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                      button={
                        <IconHorizontalDots className="w-6 h-6 opacity-70" />
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex w-1/4 items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                      button={
                        <IconHorizontalDots className="w-6 h-6 opacity-70" />
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex w-1/4 items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                      button={
                        <IconHorizontalDots className="w-6 h-6 opacity-70" />
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <div className="flex w-1/4 items-center justify-center">
                  <div className="dropdown">
                    <Dropdown
                      btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                      button={
                        <IconHorizontalDots className="w-6 h-6 opacity-70" />
                      }
                    >
                      <ul className="!min-w-[170px]">
                        <li>
                          <button type="button">Action</button>
                        </li>
                        <li>
                          <button type="button">Another action</button>
                        </li>
                        <li>
                          <button type="button">Something else here</button>
                        </li>
                        <li>
                          <button type="button">Separated link</button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownPage;
