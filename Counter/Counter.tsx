import Link from 'next/link';
import { useState } from 'react';
import CountUp from 'react-countup';
import {
  IconBell,
  IconCode,
  IconUsers,
  IconCloudDownload,
  IconAward,
} from '@/icons';

const Counter = () => {
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
            Components
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Counter</span>
        </li>
      </ul>
      <div className="space-y-8 pt-5">
        <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
          <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
            <IconBell />
          </div>
          <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
          <a
            href="https://www.npmjs.com/package/react-countup"
            target="_blank"
            className="block hover:underline"
            rel="noreferrer"
          >
            https://www.npmjs.com/package/react-countup
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Simple Counter */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Simple Counter
              </h5>
              <button
                onClick={() => toggleCode('code1')}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={710}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  HOURS
                </h4>
              </div>
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={915}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  TICKETS
                </h4>
              </div>
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={580}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  CUSTOMERS
                </h4>
              </div>
            </div>
          </div>
          {/* With icon */}
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                With Icon
              </h5>
              <button
                onClick={() => toggleCode('code2')}
                className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              >
                <span className="flex items-center">
                  <IconCode className="me-2" />
                  Code
                </span>
              </button>
            </div>
            <div className="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={105}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  <IconUsers className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                  Clients
                </h4>
              </div>
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={300}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  <IconCloudDownload className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                  Downloads
                </h4>
              </div>
              <div>
                <div className="flex h-[70px] w-[70px] flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                  <CountUp
                    start={0}
                    end={58}
                    duration={7}
                    className="text-center text-xl text-primary sm:text-3xl"
                  ></CountUp>
                </div>
                <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">
                  <IconAward className="sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                  Awards
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
