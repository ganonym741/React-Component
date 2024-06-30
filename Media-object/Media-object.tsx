import Link from 'next/link';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {
  IconCode,
  IconMessageDots,
  IconPencil,
  IconTrashLines,
  IconHorizontalDots,
  IconChatDot,
  IconPhone,
  IconBarChart,
  IconXCircle,
  IconInfoTriangle,
} from '@/icons';

const MediaObject = () => {
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
          <span>Media Object</span>
        </li>
      </ul>
      <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
        {/* Simple */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Simple
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code1')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Order
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code2')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="flex-1 ltr:mr-4 rtl:ml-4">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
              <div>
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alignment */}

        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Top-aligned media
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code3')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex items-start">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque. Fusce condimentum cursus mauris et ornare. Mauris
                  fermentum mi id sollicitudin viverra. Aenean dignissim sed
                  ante eget dapibus. Sed dapibus nulla elementum, rutrum neque
                  eu, gravida neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Center-aligned media
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code4')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex items-center">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque. Fusce condimentum cursus mauris et ornare. Mauris
                  fermentum mi id sollicitudin viverra. Aenean dignissim sed
                  ante eget dapibus. Sed dapibus nulla elementum, rutrum neque
                  eu, gravida neque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Bottom-aligned media
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code5')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex items-end">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque. Fusce condimentum cursus mauris et ornare. Mauris
                  fermentum mi id sollicitudin viverra. Aenean dignissim sed
                  ante eget dapibus. Sed dapibus nulla elementum, rutrum neque
                  eu, gravida neque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Right Aligned
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code6')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="flex-1 ltr:mr-4 ltr:text-right rtl:ml-4 rtl:text-left">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque. Fusce condimentum cursus mauris et ornare. Mauris
                  fermentum mi id sollicitudin viverra. Aenean dignissim sed
                  ante eget dapibus. Sed dapibus nulla elementum, rutrum neque
                  eu, gravida neque.
                </p>
              </div>
              <div>
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-16 w-16 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Media list
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code7')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="mb-5 flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
            <div className="mb-5 flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nesting */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Nesting
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code8')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text mb-5">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
                <div className="flex">
                  <div className="ltr:mr-4 rtl:ml-4">
                    <img
                      src="/assets/images/profile-5.jpeg"
                      alt="img"
                      className="h-14 w-14 rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-semibold text-primary">
                      Heading
                    </h4>
                    <p className="media-text">
                      Fusce condimentum cursus mauris et ornare. Mauris
                      fermentum mi id sollicitudin viverra. Aenean dignissim sed
                      ante eget dapibus. Sed dapibus nulla elementum, rutrum
                      neque eu, gravida neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notation Text */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Notation Text
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code9')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text mb-4">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                  <li>
                    <button type="button" className="hover:text-primary">
                      Reply
                    </button>
                  </li>
                  <li>
                    <button type="button" className="hover:text-primary">
                      Edit
                    </button>
                  </li>
                  <li>
                    <button type="button" className="hover:text-primary">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Notation Icon */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Notation Icon
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code10')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                </h4>
                <p className="media-text mb-4">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                  <li>
                    <button
                      type="button"
                      className="flex items-center hover:text-primary"
                    >
                      <IconMessageDots className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                      Reply
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex items-center hover:text-primary"
                    >
                      <IconPencil className="w-3.5 h-3.5 ltr:mr-1 rtl:ml-1" />{' '}
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="flex items-center hover:text-primary"
                    >
                      <IconTrashLines className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Badge
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code11')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Heading
                  <span className="badge bg-primary ltr:float-right rtl:float-left">
                    Web Designer
                  </span>
                </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Dropdown List
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code12')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="dropdown mb-5">
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <img
                  src="/assets/images/profile-5.jpeg"
                  alt="img"
                  className="h-14 w-14 rounded"
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex justify-between">
                  <h4 className="text-lg font-semibold text-primary">
                    Heading{' '}
                  </h4>
                  <div className="dropdown">
                    <Dropdown
                      offset={[0, 5]}
                      btnClassName="text-white-dark"
                      button={
                        <IconHorizontalDots className="opacity-70 text-white-dark" />
                      }
                    >
                      <ul className="!min-w-[130px]">
                        <li>
                          <button type="button">
                            <IconChatDot className="ltr:mr-1 rtl:ml-1" />
                            Start chat
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <IconPhone className="ltr:mr-1 rtl:ml-1" />
                            Make a call
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <IconBarChart className="ltr:mr-1 rtl:ml-1" />
                            Statistics
                          </button>
                        </li>
                      </ul>
                    </Dropdown>
                  </div>
                </div>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Labels
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code13')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="mb-5 flex items-center">
              <div className="ltr:mr-4 rtl:ml-4">
                <IconXCircle className="w-7 h-7 text-danger" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ltr:mr-4 rtl:ml-4">
                <IconInfoTriangle className="w-7 h-7 text-warning" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Checkbox
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code14')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="mb-5 flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <input
                  type="checkbox"
                  className="form-checkbox mt-1.5"
                  defaultChecked
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <input type="checkbox" className="form-checkbox mt-1.5" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  Radio */}
        <div className="panel">
          <div className="mb-5 flex items-center justify-between">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Radio
            </h5>
            <button
              type="button"
              className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
              onClick={() => toggleCode('code15')}
            >
              <span className="flex items-center">
                <IconCode className="me-2" /> Code
              </span>
            </button>
          </div>
          <div className="mb-5">
            <div className="mb-5 flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <input
                  type="radio"
                  className="form-radio mt-1.5"
                  name="radio"
                  defaultChecked
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="ltr:mr-4 rtl:ml-4">
                <input
                  type="radio"
                  className="form-radio mt-1.5"
                  name="radio"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                <p className="media-text">
                  Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                  id sollicitudin viverra. Aenean dignissim sed ante eget
                  dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaObject;
