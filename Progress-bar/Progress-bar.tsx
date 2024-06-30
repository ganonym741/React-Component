import { useState } from 'react';
import Link from 'next/link';
import { IconCode } from '@/icons';

const Progressbar = () => {
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
      <div>
        <ul className="flex space-x-2 rtl:space-x-reverse">
          <li>
            <Link href="#" className="text-primary hover:underline">
              Elements
            </Link>
          </li>
          <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
            <span>Progress Bar</span>
          </li>
        </ul>
        <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
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
            <div className="mb-5 space-y-5">
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-3/12 rounded-full bg-primary"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-4/12 rounded-full bg-secondary"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-5/12 rounded-full bg-success"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-6/12 rounded-full bg-warning"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-7/12 rounded-full bg-danger"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-8/12 rounded-full bg-info"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-9/12 rounded-full bg-black dark:bg-dark"></div>
              </div>
            </div>
          </div>
          <div className="panel" id="gradient">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Gradient
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
            <div className="mb-5 space-y-5">
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-3/12 rounded-full bg-gradient-to-r from-[#0081ff] to-[#0045ff]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-4/12 rounded-full bg-gradient-to-r from-[#04befe] to-[#4481eb]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-5/12 rounded-full bg-gradient-to-r from-[#3cba92] to-[#0ba360]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-6/12 rounded-full bg-gradient-to-r from-[#f09819] to-[#ff5858]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-7/12 rounded-full bg-gradient-to-r from-[#d09693] to-[#c71d6f]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-8/12 rounded-full bg-gradient-to-r from-[#7579ff] to-[#b224ef]"></div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-9/12 rounded-full bg-gradient-to-r from-[#2b5876] to-[#4e4376]"></div>
              </div>
            </div>
          </div>
          <div className="panel" id="striped">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Striped
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
            <div className="mb-5 space-y-5">
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div
                  className="h-4 w-3/12 rounded-full bg-primary"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                    backgroundSize: '1rem 1rem',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="panel" id="animated">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Animated
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
            <div className="mb-5 space-y-5">
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div
                  className="animated-progress h-4 w-6/12 rounded-full bg-primary"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                    backgroundSize: '1rem 1rem',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="panel" id="labeled">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Labels
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
            <div className="mb-5 space-y-5">
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="h-4 w-4/5 rounded-full bg-info text-center text-xs text-white">
                  80%
                </div>
              </div>
              <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                <div className="flex h-4 w-11/12 items-center justify-between rounded-full bg-danger px-2 text-center text-xs text-white">
                  <span>PHP</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel" id="stacked">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Stacked
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
            <div className="mb-5 space-y-5">
              <div className="space-y-2">
                <h3 className="text-base">Basic</h3>
                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-4 w-2/12 bg-success text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"></div>
                  <div className="h-4 w-4/12 bg-warning text-center text-xs text-white"></div>
                  <div className="h-4 w-3/12 bg-danger text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base">Striped</h3>
                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div
                    className="h-4 w-2/12 bg-primary text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                  <div
                    className="h-4 w-4/12 bg-success text-center text-xs text-white"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                  <div
                    className="h-4 w-3/12 bg-info text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base">Animated</h3>
                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div
                    className="animated-progress h-4 w-2/12 bg-info text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                  <div
                    className="animated-progress h-4 w-4/12 bg-secondary text-center text-xs text-white"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                  <div
                    className="animated-progress h-4 w-3/12 bg-primary text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                      backgroundSize: '1rem 1rem',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel lg:row-span-2 lg:row-start-3" id="sizes">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Progress Bars Different Sizes
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
            <div className="mb-5 space-y-5">
              <div className="space-y-1">
                <h3 className="text-primary">Default Progress Bar Size</h3>
                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-4 w-3/12 rounded-full rounded-bl-full bg-primary text-center text-xs text-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base text-success">Progress-sm</h3>
                <div className="flex h-1 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-1 w-5/12 rounded-full rounded-bl-full bg-success text-center text-xs text-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base text-warning">Progress-md</h3>
                <div className="flex h-2.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-2.5 w-7/12 rounded-full rounded-bl-full bg-warning text-center text-xs text-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base text-info">Progress-lg</h3>
                <div className="flex h-5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-5 w-8/12 rounded-full rounded-bl-full bg-info text-center text-xs text-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base text-danger">Progress-xl</h3>
                <div className="flex h-6 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                  <div className="h-6 w-10/12 rounded-full rounded-bl-full bg-danger text-center text-xs text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
