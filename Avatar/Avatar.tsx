import Link from 'next/link';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { IconCode } from '@/icons';
const Avatar = () => {
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
          <span>Avatar</span>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
        {/* Basic */}
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
            <div className="flex flex-wrap items-center justify-center gap-2">
              <img
                className="h-20 w-20 overflow-hidden rounded-full object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-16 w-16 overflow-hidden rounded-full object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-14 w-14 overflow-hidden rounded-full object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-12 w-12 overflow-hidden rounded-full object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* Indicators */}
        <div className="panel" id="indicators">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Indicators
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
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="relative h-20 w-20">
                <img
                  className="h-20 w-20 overflow-hidden rounded-full object-cover"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
                <span className="absolute bottom-0 h-7 w-7 rounded-full bg-danger ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
              </span>
              <span className="relative h-16 w-16">
                <img
                  className="h-16 w-16 overflow-hidden rounded-full object-cover"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
                <span className="absolute bottom-0 h-6 w-6 rounded-full bg-success ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
              </span>
              <span className="relative h-14 w-14">
                <img
                  className="h-14 w-14 overflow-hidden rounded-full object-cover"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
                <span className="absolute bottom-0 h-5 w-5 rounded-full bg-secondary ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
              </span>
              <span className="relative h-12 w-12">
                <img
                  className="h-12 w-12 overflow-hidden rounded-full object-cover"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
                <span className="absolute bottom-0 h-4 w-4 rounded-full bg-info ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
              </span>
            </div>
          </div>
        </div>
        {/* Shapes */}
        <div className="panel" id="shapes">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Shapes
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
            <div className="flex flex-wrap items-center justify-center gap-2">
              <img
                className="h-20 w-20 overflow-hidden rounded-md object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-16 w-16 overflow-hidden rounded-full object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-14 w-14 overflow-hidden rounded-md object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-10 w-10 overflow-hidden object-cover"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* Initials */}
        <div className="panel" id="initials">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Initials
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
            <div className="flex flex-wrap items-center justify-center gap-2 text-white">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success object-cover text-center text-2xl">
                AG
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary object-cover text-center text-xl">
                AG
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-info object-cover text-center text-lg">
                AG
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-danger object-cover text-center text-base">
                AG
              </span>
            </div>
          </div>
        </div>
        {/* Group */}
        <div className="panel" id="group">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Group
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
          <div className="mb-5 flex flex-wrap items-center justify-around gap-10">
            <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
              <img
                className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-info object-cover text-center text-xl ring-2 ring-white dark:ring-white-dark">
                AG
              </span>
            </div>
            <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
              <img
                className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white dark:ring-white-dark">
                AG
              </span>
            </div>
          </div>
        </div>
        {/* Animate Y-axis */}
        <div className="panel" id="animate">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Animate Y-axis
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
            <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white transition-all duration-300 hover:hover:translate-y-2 dark:ring-white-dark">
                AG
              </span>
            </div>
          </div>
        </div>
        {/* Animate X-axis */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Animate X-axis
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
            <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <img
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                src="/assets/images/profile-12.jpeg"
                alt="img"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark">
                AG
              </span>
            </div>
          </div>
        </div>
        {/* Tooltip */}
        <div className="panel" id="tooltip">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Tooltip
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
            <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
              <Tippy content="Judy Holmes">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
              </Tippy>
              <Tippy content="Judy Holmes">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
              </Tippy>
              <Tippy content="Judy Holmes">
                <img
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark"
                  src="/assets/images/profile-12.jpeg"
                  alt="img"
                />
              </Tippy>
              <Tippy content="Alan Green">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white dark:ring-white-dark">
                  AG
                </span>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
