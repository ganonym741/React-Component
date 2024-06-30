import Link from 'next/link';
import { useState } from 'react';
import {
  IconCode,
  IconX,
  IconInfoTriangle,
  IconSettings,
  IconBellBing,
  IconInfoCircle,
} from '@/icons';

const Alerts = () => {
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
          <Link
            href="/elements/alerts"
            className="text-primary hover:underline"
          >
            Elements
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Alerts</span>
        </li>
      </ul>
      <div className="space-y-8 pt-5">
        {/* Default Alerts  */}
        <div className="panel" id="default">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Default Alerts
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="flex items-center rounded bg-primary-light p-3.5 text-primary dark:bg-primary-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Primary!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-secondary-light p-3.5 text-secondary dark:bg-secondary-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Secondary!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-success-light p-3.5 text-success dark:bg-success-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Success!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-warning-light p-3.5 text-warning dark:bg-warning-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-danger-light p-3.5 text-danger dark:bg-danger-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Danger!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-info-light p-3.5 text-info dark:bg-info-dark-light">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum
                is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Outline Alerts */}
        <div className="panel" id="outline">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Outline Alerts
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="flex items-center rounded border border-primary p-3.5 text-white-dark">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-2 rtl:ml-2">Primary!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded border border-danger p-3.5 text-white-dark">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-2 rtl:ml-2">Danger!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Solid Alerts */}
        <div className="panel" id="solid">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Solid Alerts
            </h5>
            <button
              type="button"
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="flex items-center rounded bg-primary p-3.5 text-white">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center rounded bg-warning p-3.5 text-white">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum
                is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Alerts with icon */}
        <div className="panel" id="icon">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Alerts with icon
            </h5>
            <button
              type="button"
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="relative flex items-center rounded border border-success bg-success-light p-3.5 text-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light">
              <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-left-11 rtl:-right-11">
                <IconInfoTriangle />
              </span>
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex items-center rounded border border-dark bg-dark-light p-3.5 text-dark ltr:border-r-[64px] rtl:border-l-[64px] dark:border-white-light/20 dark:bg-dark-dark-light dark:text-white-light">
              <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-right-11 rtl:-left-11">
                <IconSettings />
              </span>
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Arrowed Alerts */}
        <div className="panel" id="arrowed">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Arrowed Alerts
            </h5>
            <button
              type="button"
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="relative flex items-center rounded border !border-primary bg-primary-light p-3.5 text-primary before:absolute before:top-1/2 before:-mt-2 before:border-l-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-l-inherit ltr:border-l-[64px] ltr:before:left-0 rtl:border-r-[64px] rtl:before:right-0 rtl:before:rotate-180 dark:bg-primary-dark-light">
              <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-left-11 rtl:-right-11">
                <IconBellBing className="w-6 h-6" />
              </span>
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex items-center rounded border border-danger bg-danger-light p-3.5 text-danger before:absolute before:top-1/2 before:-mt-2 before:inline-block before:border-r-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-r-inherit ltr:border-r-[64px] ltr:before:right-0 rtl:border-l-[64px] rtl:before:left-0 rtl:before:rotate-180 dark:bg-danger-dark-light">
              <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-right-11 rtl:-left-11">
                <IconInfoCircle />
              </span>
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Custom Alerts */}
        <div className="panel" id="custom">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Custom Alerts
            </h5>
            <button
              type="button"
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
          <div className="mb-5 grid gap-5 lg:grid-cols-2">
            <div className="flex items-center rounded bg-info p-3.5 text-white">
              <span className="h-6 w-6 text-white ltr:mr-4 rtl:ml-4">
                <IconBellBing className="w-6 h-6" />
              </span>
              <span>
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="btn btn-sm bg-white text-black ltr:ml-auto rtl:mr-auto"
              >
                Accept
              </button>
              <button type="button" className="ltr:ml-4 rtl:mr-4">
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center rounded bg-gradient-to-r from-[#BD194D] to-[#004fe6] p-3.5 text-white">
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div
              className="flex items-center rounded bg-cover bg-center bg-no-repeat p-3.5 text-white"
              style={{
                backgroundImage: `url("/assets/images/menu-heade.jpg")`,
              }}
            >
              <span className="ltr:pr-2 rtl:pl-2">
                <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem
                Ipsum is simply dummy text of the printing.
              </span>
              <button
                type="button"
                className="hover:opacity-80 ltr:ml-auto rtl:mr-auto"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
