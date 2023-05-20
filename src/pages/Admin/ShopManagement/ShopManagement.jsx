import React, { useState } from "react";
import { API_ENDPOINT } from "../../../config";
import { useQuery } from "react-query";
import axios from "axios";
import { truncateString } from "@utils/string";
import Overlay from "@components/Overlay/Overlay";
import { Portal } from "react-portal";
import ShopEditor from "@components/ShopEditor/ShopEditor";
import { AiOutlinePlus } from "react-icons/ai";

function ShopManagement() {
  const [editorVisibility, setEditorVisibility] = useState(false);
  const [deleteVisibility, setDeleteVisibility] = useState(false);
  const [editorParams, setEditorParams] = useState({});
  const [deleteParams, setDeleteParams] = useState({});
  const { isLoading, error, data } = useQuery("rooms", () =>
    axios.get(`${API_ENDPOINT}/api/shop-items`)
  );

  console.log(data);

  const shopItems = data?.data ? data.data : [];

  const deleteItem = async () => {
    try {
      await axios.delete(`${API_ENDPOINT}/api/shop-items/${deleteParams.id}`);
      qc.invalidateQueries(["rooms"]);
      setDeleteVisibility(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative overflow-hidden overflow-y-scroll">
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
                            {value.providerDetails?.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {value.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {truncateString(value.name || "", 20)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${value.price}/night
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      Available
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setEditorParams({
                            selectedId: value._id,
                            editMode: true,
                          });
                          setEditorVisibility(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          console.log("fdasfdf");
                          setDeleteParams({ id: value._id, name: value.name });
                          setDeleteVisibility(true);
                        }}
                        href="#"
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      {editorVisibility && (
        <Overlay className="flex justify-center items-center">
          <ShopEditor
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
      {/* delete */}
      {deleteVisibility && (
        <Overlay className="flex justify-center items-center">
          <div className="p-4 bg-white flex flex-col w-60">
            <div className="mb-6 mr-6">Delete Entry {deleteParams.name}?</div>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={deleteItem}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={() => {
                  setDeleteVisibility(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}

export default ShopManagement;
