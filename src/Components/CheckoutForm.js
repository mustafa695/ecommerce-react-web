import React, { useState } from "react";

const CheckoutForm = () => {
  let progress = [
    { title: "Shipping Method", active: true },
    { title: "Payment Method", active: false },
    { title: "Review", active: false },
  ];
  const [currPage, setCurrPage] = useState(1);
  const [progressData, setProgressData] = useState(progress);

  const nextPage = () => {
    let dup = [...progressData];
    if (currPage >= dup.length) {
      let next = currPage + 0;
      setCurrPage(next);
    } else {
      let next = currPage + 1;
      setCurrPage(next);
    }
    if (dup[currPage].active === false) {
      dup[currPage].active = true;
      setProgressData(dup);
    }
  };

  const prevPage = () => {
    let dup = [...progressData];
    let prev = currPage - 1;
    setCurrPage(prev);
    if (currPage <= 1) {
      let prev = currPage - 0;
      setCurrPage(prev);
    }

    if (dup[currPage >= 3 ? 2 : 1].active === true) {
      dup[currPage >= 3 ? 2 : 1].active = false;
      setProgressData(dup);
    }
  };

  return (
    <div className="mt-8">
      <div className="border-4 border-slate-100 p-4">
        <div className="flex justify-around line relative">
          {progressData.map((item, ind) => {
            return (
              <div
                key={ind}
                className={
                  item.active
                    ? "bg-[#47bac1] w-8 h-8 rounded-full relative circle active"
                    : "bg-[#ddd] w-8 h-8 rounded-full relative circle"
                }
              >
                  <h3 className="-mt-6 text-center whitespace-nowrap">{item?.title}</h3>
              </div>
            );
          })}
        </div>
        {currPage === 1 && <h3>Shipping Address 1</h3>}
        {currPage === 2 && <h3>Shipping Address 2</h3>}
        {currPage === 3 && <h3>Shipping Address 3</h3>}
        <div
          className={
            currPage === 1 ? "flex justify-end" : "flex justify-between"
          }
        >
          {currPage > 1 && (
            <button
              onClick={prevPage}
              className="mt-8 bg-[#47bac1]  text-white tracking-wider uppercase px-8 py-2.5 font-bold"
            >
              Back
            </button>
          )}

          <button
            onClick={currPage < 3 ? nextPage : undefined}
            className="mt-8 bg-[#47bac1] text-white tracking-wider uppercase px-8 py-2.5 font-bold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
