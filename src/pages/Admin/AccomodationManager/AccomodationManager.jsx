import React, { useState } from "react";
import { API_ENDPOINT } from "../../../config";
import { useQuery } from "react-query";
import axios from "axios";
import { truncateString } from "@utils/string";
import Overlay from "@components/Overlay/Overlay";
import AccomodationEditor from "@components/AccomodationEditor/AccomodationEditor";
import { Portal } from "react-portal";
import { AiOutlinePlus } from "react-icons/ai";

function AccomodationManager() {
  const [editorVisibility, setEditorVisibility] = useState(false);

  const { isLoading, error, data } = useQuery("rooms", () =>
    axios.get(`${API_ENDPOINT}/api/rooms`)
  );

  console.log(data);

  const shopItems = data?.data ? data.data : [];

  return (
    <div className="relative flex-grow overflow-hidden overflow-y-scroll">
      <table className="table-auto divide-y relative divide-gray-200">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Provider
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Active
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 h-full">
          {shopItems &&
            shopItems?.map((value) => {
              return (
                <>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {value.provider}
                          </div>
                          <div className="text-sm text-gray-500">
                            {value.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {truncateString(value.name, 20)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${value.price}/night
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      Available
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      {editorVisibility && (
        <Overlay className="flex justify-center items-center">
          <AccomodationEditor
            onClickClose={() => {
              setEditorVisibility(false);
            }}
          />
        </Overlay>
      )}
      <Portal>
        <button
          onClick={() => {
            setEditorVisibility(true);
          }}
          className="p-4 fixed bottom-[4em] right-[4em] z-[999] bg-blue-600 rounded-full"
        >
          <AiOutlinePlus className="fill-white" size={25} />
        </button>
      </Portal>
    </div>
  );
}

export default AccomodationManager;
