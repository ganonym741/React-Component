import Link from 'next/link';
import { useState } from 'react';
import { IconCode } from '@/icons';

const Jumbotron = () => {
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
          <span>Jumbotron</span>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
        {/* basic */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Basic
            </h5>
            <button
              type="button"
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
          <div className="prose mb-5 w-full max-w-full rounded bg-[#f1f2f3] px-4 py-9 dark:bg-[#1b2e4b] dark:text-white-light sm:px-8 sm:py-16">
            <h2 className="mb-5 mt-4  text-center text-5xl text-dark dark:text-white-light">
              Hello, world!
            </h2>
            <p className="lead mt-3 mb-4 dark:text-white-light">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4 dark:border-[#191e3a]" />
            <p className="mb-5">
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <button type="button" className="btn btn-dark">
                Learn more
              </button>
            </p>
          </div>
        </div>
        {/* fluid */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Jumbotron Fluid
            </h5>
            <button
              type="button"
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
          <div className="prose mb-5 w-full max-w-full rounded bg-[#f1f2f3] px-4 py-9 dark:bg-[#1b2e4b] dark:text-white-light sm:px-8 sm:py-16">
            <h2 className="mb-5 mt-4  text-center text-5xl text-dark dark:text-white-light">
              Fluid Jumbotron
            </h2>
            <p className="lead mt-3 mb-4 dark:text-white-light">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <blockquote className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
              <div className="flex items-start">
                <div className="h-14 w-14 flex-none ltr:mr-5 rtl:ml-5">
                  <img
                    src="/assets/images/profile-34.jpeg"
                    alt="img"
                    className="m-auto h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
              <small className="block w-full text-xs not-italic text-[#777] before:relative before:-top-1 before:inline-block before:h-[1px] before:w-3 before:bg-[#777] before:opacity-50 ltr:text-right before:ltr:mr-1 rtl:text-left rtl:before:ml-1">
                Someone famous <cite className="italic">Source Title</cite>
              </small>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;