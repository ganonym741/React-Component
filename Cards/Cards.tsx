import Link from 'next/link';
import { useState } from 'react';
import { IconCode, IconDroplet, IconStar, IconHeart, IconEye } from '@/icons';

const Cards = () => {
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
          <span>Cards</span>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
        {/* card 1 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 1
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code1')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="py-7 px-6">
                <div className="mb-5 inline-block rounded-full bg-[#3b3f5c] p-3 text-[#f1f2f3]">
                  <IconDroplet />
                </div>
                <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light">
                  Simple
                </h5>
                <p className="text-white-dark">
                  Mauris nisi felis, placerat in volutpat id, varius et sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 2
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code2')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="py-7 px-6">
                <div className="-mx-6 -mt-7 mb-7 h-[215px] overflow-hidden rounded-tl rounded-tr">
                  <img
                    src="/assets/images/profile-28.jpeg"
                    alt="cover"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light">
                  CLI Based
                </h5>
                <p className="text-white-dark">
                  Etiam sed augue ac justo tincidunt posuere. Vivamus euismod
                  eros, nec risus malesuada.
                </p>
                <button type="button" className="btn btn-primary mt-6">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 3
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code3')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[18rem] rounded border border-white-light bg-[#3b3f5c] p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="text-center text-black-light">
                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src="/assets/images/profile-34.jpeg"
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h5 className="mb-2 text-[15px] font-semibold text-white">
                  Luke Ivory
                </h5>
                <p>Manager</p>
                <div className="my-4 flex items-center justify-center text-[#e2a03f]">
                  <IconStar className="fill-warning" />
                  <IconStar className="fill-warning" />
                  <IconStar className="fill-warning" />
                  <IconStar className="fill-warning" />
                  <IconStar />
                </div>
                <p className="font-semibold italic">
                  Maecenas nec mi vel lacus condimentum rhoncus dignissim
                  egestas orci. Integer blandit porta placerat. Vestibulum in
                  ultricies.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 4
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code4')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[30rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="flex flex-col items-center p-5 sm:flex-row">
                <div className="mb-5 h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src="/assets/images/profile-34.jpeg"
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left ltr:sm:pl-5 rtl:sm:pr-5">
                  <h5 className="mb-2 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">
                    Luke Ivory
                  </h5>
                  <p className="mb-2 text-white-dark">Manager</p>
                  <span className="badge rounded-full bg-primary">4.5</span>
                  <p className="mt-4 font-semibold text-white-dark sm:mt-8">
                    Maecenas nec mi vel lacus condimentum rhoncus dignissim
                    egestas orci. Integer blandit porta placerat. Vestibulum in
                    ultricies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 5
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code5')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[20rem] rounded border border-white-light bg-secondary p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-0 dark:bg-secondary-dark-light dark:shadow-none">
              <div className="text-black-light">
                <p className="mb-5 font-semibold">
                  Maecenas nec mi vel lacus condimentum rhoncus dignissim
                  egestas orci. Integer blandit porta placerat. Vestibulum in
                  ultricies.
                </p>
                <div className="flex">
                  <div className="mx-auto mb-5 h-14 w-14 overflow-hidden rounded-full">
                    <img
                      src="/assets/images/profile-34.jpeg"
                      alt="profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 ltr:pl-4 rtl:pr-4">
                    <h5 className="mb-1 text-[15px] font-semibold text-white">
                      Luke Ivory
                    </h5>
                    <p>Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 6
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code6')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[20rem] rounded border border-white-light bg-white p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none ">
              <div className="text-[#515365] dark:text-white-light">
                <p className="mb-5 font-semibold italic">
                  Maecenas nec mi vel lacus condimentum rhoncus dignissim
                  egestas orci. Integer blandit porta placerat. Vestibulum in
                  ultricies.
                </p>
                <div className="flex">
                  <div className="flex-1">
                    <h5 className="mb-1.5 text-[15px] font-bold text-[#3b3f5c] dark:text-white-light">
                      Luke Ivory
                    </h5>
                    <p className="mb-1.5 text-white-dark">Manager</p>
                    <div className="flex items-center justify-start text-[#e2a03f]">
                      <IconStar className="w-3 h-3 fill-warning" />
                      <IconStar className="w-3 h-3 fill-warning" />
                      <IconStar className="w-3 h-3 fill-warning" />
                      <IconStar className="w-3 h-3 fill-warning" />
                      <IconStar className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 7 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 7
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code7')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[20rem] rounded border border-white-light bg-primary p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-0 dark:bg-primary-dark-light dark:shadow-none">
              <div className="text-center font-semibold">
                <h5 className="mb-5 text-xl font-bold text-white dark:text-white-light">
                  Rating
                </h5>
                <p className="mb-5 text-base text-white">(4.3)</p>
                <div className="flex items-center justify-center gap-1 text-[#e2a03f]">
                  <IconStar className="w-4.5 h-4.5 fill-warning" />
                  <IconStar className="w-4.5 h-4.5 fill-warning" />
                  <IconStar className="w-4.5 h-4.5 fill-warning" />
                  <IconStar className="w-4.5 h-4.5 fill-warning" />
                  <IconStar className="w-4.5 h-4.5" />
                  <span className="text-white ltr:ml-1 rtl:mr-1">(94)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 8 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 8
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code8')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[24rem] rounded border border-white-light bg-white p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="mb-5 flex justify-between">
                <h6 className="text-base font-semibold text-black dark:text-white-light">
                  Placed Order
                </h6>
                <span className="badge bg-primary/10 py-1.5 text-primary dark:bg-primary dark:text-white">
                  IN PROGRESS
                </span>
              </div>
              <div className="mb-5 flex items-center justify-start -space-x-3 rtl:space-x-reverse">
                <img
                  className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                  src="/assets/images/profile-34.jpeg"
                  alt="profile"
                />
                <img
                  className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                  src="/assets/images/profile-34.jpeg"
                  alt="profile"
                />
                <img
                  className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                  src="/assets/images/profile-34.jpeg"
                  alt="profile"
                />
                <span className="rounded-full bg-white px-2 py-1 text-xs text-primary shadow-[0_0_20px_0_#d0d0d0] dark:bg-black dark:text-white dark:shadow-none">
                  +5 more
                </span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-primary">60%</span>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-black">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 9 */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Card 9
            </h5>
            <button
              type="button"
              onClick={() => toggleCode('code9')}
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
            >
              <span className="flex items-center">
                <IconCode className="me-2" />
                Code
              </span>
            </button>
          </div>
          <div className="mb-5 flex items-center justify-center">
            <div className="w-full max-w-[22rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
              <div className="py-7 px-6">
                <div className="-mx-6 -mt-7 mb-7 h-[260px] overflow-hidden rounded-tl rounded-tr">
                  <img
                    src="/assets/images/profile-28.jpeg"
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mb-1.5 text-xs font-bold text-primary">
                  25 Sep 2020
                </p>
                <h5 className="mb-4 text-[15px] font-bold text-[#3b3f5c] dark:text-white-light">
                  How to Start a Blog in 5 Easy Steps.
                </h5>
                <p className="text-white-dark ">
                  Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit
                  volutpat.
                </p>
                <div className="relative mt-6 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                  <div className="flex items-center font-semibold">
                    <div className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                      <span className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light">
                        AG
                      </span>
                    </div>
                    <div className="text-[#515365] dark:text-white-dark">
                      Luke Ivory
                    </div>
                  </div>
                  <div className="flex font-semibold">
                    <div className="flex items-center text-primary ltr:mr-3 rtl:ml-3">
                      <IconHeart className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                      51
                    </div>
                    <div className="flex items-center text-primary">
                      <IconEye className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                      250
                    </div>
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

export default Cards;
