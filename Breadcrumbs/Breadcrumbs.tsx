import Link from 'next/link';
import { useState } from 'react';
import { IconCode, IconHome, IconBox, IconCpuBolt } from '@/icons';

const Breadcrumbs = () => {
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
          <span>Breadcrumbs</span>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
        {/* Default */}
        <div className="panel" id="default">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Default
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
            <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
              <li>
                <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                  <IconHome className="w-4 h-4" />
                </button>
              </li>
              <li className="before:px-1.5 before:content-['/']">
                <button type="button">Components</button>
              </li>
              <li className="before:px-1.5 before:content-['/']">
                <button className="text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70">
                  UI Kit
                </button>
              </li>
            </ol>
          </div>
        </div>
        {/* Basic */}
        <div className="panel" id="basic">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Basic
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
            <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
              <li>
                <button type="button">Components</button>
              </li>
              <li className="before:px-1.5 before:content-['/']">
                <button className="text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70">
                  UI Kit
                </button>
              </li>
            </ol>
          </div>
        </div>
        {/* Arrowed */}
        <div className="panel" id="arrowed">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Arrowed
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
            <ol className="flex font-semibold text-primary dark:text-white-dark">
              <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
                <button className="relative flex h-full items-center p-1.5 before:absolute  before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] hover:text-primary/70 ltr:pl-3 ltr:pr-2 ltr:before:-right-[15px] rtl:pr-3 rtl:pl-2 rtl:before:-left-[15px] rtl:before:rotate-180 dark:before:border-l-[#1b2e4b] dark:hover:text-white-dark/70">
                  Home
                </button>
              </li>
              <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                <button className="relative flex h-full items-center bg-primary p-1.5 text-white-light before:absolute  before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary ltr:pl-6 ltr:pr-2 ltr:before:-right-[15px] rtl:pr-6 rtl:pl-2 rtl:before:-left-[15px] rtl:before:rotate-180">
                  Components
                </button>
              </li>
              <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                <button className="relative flex h-full items-center p-1.5  px-3 before:absolute before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] hover:text-primary/70 ltr:pl-6 ltr:before:-right-[15px] rtl:pr-6 rtl:before:-left-[15px] rtl:before:rotate-180 dark:before:border-l-[#1b2e4b] dark:hover:text-white-dark/70">
                  UI Kit
                </button>
              </li>
            </ol>
          </div>
        </div>
        {/* Dotted Seperators */}
        <div className="panel" id="dotted">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Dotted Seperators
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
            <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
              <li>
                <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                  Home
                </button>
              </li>
              <li className="before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                <button className="text-primary">Components</button>
              </li>
              <li className="before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                  UI Kit
                </button>
              </li>
            </ol>
          </div>
        </div>
        {/* With Icons */}
        <div className="panel" id="with_icon">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              With Icons
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
            <ol className="flex flex-wrap items-center gap-y-4 font-semibold text-gray-500 dark:text-white-dark">
              <li>
                <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 shadow hover:text-gray-500/70 dark:border-0 dark:bg-[#191e3a] dark:hover:text-white-dark/70">
                  <IconHome />
                </button>
              </li>
              <li className="flex items-center before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 text-primary shadow dark:border-0 dark:bg-[#191e3a]">
                  <IconBox className="ltr:mr-2 rtl:ml-2 shrink-0" />
                  Components
                </button>
              </li>
              <li className="flex items-center before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 shadow hover:text-gray-500/70 dark:border-0 dark:bg-[#191e3a] dark:hover:text-white-dark/70">
                  <IconCpuBolt className="ltr:mr-2 rtl:ml-2" />
                  UI Kit
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
