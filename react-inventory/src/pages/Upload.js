import React, { useEffect, useState } from "react";
import { CreateInventory } from "../components/CreateInventory";
import { EditData } from "../components/EditData";

export const Upload = () => {
  const [arrayList, setArrayList] = useState([]);
  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {}, [arrayList]);
  function handleDelete(id) {
    console.log(id);
    arrayList.map((list, i) => {
      console.log("--------", list);
      if (list.id == id) {
        console.log(list.id, id, i);
        arrayList.splice(i, 1);
        setArrayList(arrayList);
        console.log(arrayList);
      }
    });
  }
  return (
    <div>
      <CreateInventory
        arrayList={arrayList}
        setArrayList={setArrayList}
        data={data}
        setData={setData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <EditData arrayList={arrayList} setArrayList={setArrayList} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {arrayList.map((list, i) => (
              <tr key={i}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {list.title}
                </th>
                <td className="px-6 py-4">{list.description}</td>
                <td className="px-6 py-4">${list.Price}</td>
                <td className="px-6 py-4">${list.discountPrice}</td>
                <td className="px-6 py-4">
                  <span
                    onClick={() => {
                      setData(list);
                      setIsEdit(true);
                    }}
                    className="mr-1 font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Edit,
                  </span>
                  <span
                    onClick={() => {
                      handleDelete(list.id);
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
